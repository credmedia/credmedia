export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  message: string;
  timestamp: string;
  syncedToSheets: boolean;
}

export interface SheetSettings {
  sheetWebhookUrl: string;
  spreadsheetId: string;
  sheetName: string;
}

const STORAGE_KEYS = {
  LEADS: 'cred_leads_data',
  SETTINGS: 'cred_sheets_settings',
};

// Default setup values
export const getSheetSettings = (): SheetSettings => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to parse sheet settings', e);
  }
  return {
    sheetWebhookUrl: '',
    spreadsheetId: '',
    sheetName: 'Sheet1',
  };
};

export const saveSheetSettings = (settings: SheetSettings) => {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};

export const getLeads = (): LeadSubmission[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to parse leads', e);
  }
  return [];
};

export const saveLeads = (leads: LeadSubmission[]) => {
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
};

// Submit lead through all configured sinks:
// 1. Local Storage fallback (guarantees data integrity)
// 2. Apps Script Webhook (easiest, works without login)
// 3. Official Google Sheets API (if accessToken is provided)
export const submitLead = async (
  formData: { name: string; email: string; phone: string; source: string; message: string },
  accessToken?: string | null
): Promise<{ success: boolean; synced: boolean; error?: string }> => {
  const newLead: LeadSubmission = {
    id: 'lead_' + Math.random().toString(36).substr(2, 9),
    ...formData,
    timestamp: new Date().toISOString(),
    syncedToSheets: false,
  };

  // Add to local storage leads database first
  const existingLeads = getLeads();
  const leadsList = [newLead, ...existingLeads];
  saveLeads(leadsList);

  const settings = getSheetSettings();
  let synced = false;
  let customError = '';

  // Mode A: Post to Google Apps Script Webhook
  if (settings.sheetWebhookUrl && settings.sheetWebhookUrl.startsWith('http')) {
    try {
      // Use modern fetch pattern with no-cors to avoid strict CORs restrictions on simple Apps Script redirects
      await fetch(settings.sheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'addLead',
          ...formData,
          timestamp: newLead.timestamp,
        }),
      });
      synced = true;
    } catch (e: any) {
      console.warn('Apps Script Webhook failed or was limited by CORS:', e);
      customError = e.message;
    }
  }

  // Mode B: Post using OAuth Access Token via official Google Sheets API
  if (!synced && accessToken && settings.spreadsheetId) {
    try {
      const range = `${settings.sheetName || 'Sheet1'}!A:F`;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${settings.spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          range: `${settings.sheetName || 'Sheet1'}!A:F`,
          majorDimension: 'ROWS',
          values: [
            [
              newLead.name,
              newLead.email,
              newLead.phone,
              newLead.source,
              newLead.message,
              newLead.timestamp,
            ],
          ],
        }),
      });

      if (response.ok) {
        synced = true;
      } else {
        const errorDetails = await response.json().catch(() => ({}));
        console.error('Google Sheets API failed:', errorDetails);
        customError = errorDetails.error?.message || 'Sheets API error';
      }
    } catch (e: any) {
      console.error('Failed to append via official Sheets API:', e);
      customError = e.message;
    }
  }

  // Update synchronization flag in local database if successful
  if (synced) {
    const updatedLeads = getLeads().map((l) =>
      l.id === newLead.id ? { ...l, syncedToSheets: true } : l
    );
    saveLeads(updatedLeads);
  }

  return { success: true, synced, error: customError };
};

// Secondary action: Sync single or all pending leads
export const syncLead = async (
  lead: LeadSubmission,
  accessToken?: string | null
): Promise<boolean> => {
  const settings = getSheetSettings();
  let synced = false;

  // Try Webhook
  if (settings.sheetWebhookUrl && settings.sheetWebhookUrl.startsWith('http')) {
    try {
      await fetch(settings.sheetWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'addLead',
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          source: lead.source,
          message: lead.message,
          timestamp: lead.timestamp,
        }),
      });
      synced = true;
    } catch (e) {
      console.warn('Sync via Apps Script failed:', e);
    }
  }

  // Try API
  if (!synced && accessToken && settings.spreadsheetId) {
    try {
      const range = `${settings.sheetName || 'Sheet1'}!A:F`;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${settings.spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          range: `${settings.sheetName || 'Sheet1'}!A:F`,
          majorDimension: 'ROWS',
          values: [
            [
              lead.name,
              lead.email,
              lead.phone,
              lead.source,
              lead.message,
              lead.timestamp,
            ],
          ],
        }),
      });
      if (response.ok) {
        synced = true;
      }
    } catch (e) {
      console.error('Sync via API failed:', e);
    }
  }

  if (synced) {
    const updatedLeads = getLeads().map((l) =>
      l.id === lead.id ? { ...l, syncedToSheets: true } : l
    );
    saveLeads(updatedLeads);
  }

  return synced;
};

// Generate standard CSV string for downloading leads
export const convertLeadsToCSV = (leads: LeadSubmission[]): string => {
  const headers = ['Name', 'Email', 'Phone', 'Source', 'Message/Details', 'Timestamp', 'Is Synced'];
  const rows = leads.map((l) => [
    `"${l.name.replace(/"/g, '""')}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.phone.replace(/"/g, '""')}"`,
    `"${l.source.replace(/"/g, '""')}"`,
    `"${l.message.replace(/"/g, '""')}"`,
    `"${l.timestamp}"`,
    l.syncedToSheets ? 'Yes' : 'No',
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

// Official Google Apps Script code to copy and paste
export const getGoogleAppsScriptTemplate = () => {
  return `/* 
  CRED MEDIA - Google Sheets Webhook Script
  
  Instructions:
  1. Open your Google Sheet.
  2. Click on "Extensions" -> "Apps Script".
  3. Delete any default code and paste this script there.
  4. Edit the file: replace 'Sheet1' with your active tab's name if needed.
  5. Click "Deploy" (top right) -> "New deployment".
  6. Under "Select type", click the gear icon and select "Web app".
  7. Set "Execute as" to "Me".
  8. Set "Who has access" to "Anyone" (so the website contact form can submit data).
  9. Click "Deploy", authorize permissions, and copy the "Web app URL".
  10. Paste this Web app URL into your CRED MEDIA sheets settings drawer on the website!
*/

function doPost(e) {
  try {
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Set headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Name", "Email", "Phone", "Source/Reference", "Message", "Timestamp"]);
    }
    
    // Append the lead row
    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.phone || "",
      data.source || "",
      data.message || "",
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
};
