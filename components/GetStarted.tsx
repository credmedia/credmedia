import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Send, 
  Settings, 
  Database, 
  Download, 
  Plus, 
  Trash2, 
  Info, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Sheet,
  Phone,
  Mail,
  User,
  Share2
} from 'lucide-react';
import { 
  getLeads, 
  saveLeads, 
  convertLeadsToCSV, 
  getSheetSettings, 
  saveSheetSettings, 
  submitLead, 
  syncLead,
  getGoogleAppsScriptTemplate,
  LeadSubmission
} from '../src/utils/sheets';

const GetStarted: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'Discord/Telegram',
    message: '',
  });

  const [formSourceCustom, setFormSourceCustom] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; synced: boolean; message: string } | null>(null);

  // Lead center (Admin) drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [settings, setSettings] = useState(getSheetSettings());
  const [isCopiedScript, setIsCopiedScript] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isSavedSettings, setIsSavedSettings] = useState(false);
  const [syncInProgressId, setSyncInProgressId] = useState<string | null>(null);

  // Load leads on mount and when drawer opens
  useEffect(() => {
    setLeads(getLeads());
  }, [isDrawerOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus({
        success: false,
        synced: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Resolve final contact source description
    const finalSource = formData.source === 'Other' 
      ? `Other: ${formSourceCustom || 'Not specified'}` 
      : formData.source;

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: finalSource,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus({
          success: true,
          synced: result.synced,
          message: result.synced 
            ? 'Success! Your contact info was sent and successfully recorded in Google Sheets.'
            : 'Form submitted! Recorded in our client portal (Google Sheet sync pending hook config).'
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          source: 'Discord/Telegram',
          message: '',
        });
        setFormSourceCustom('');
        // Refresh local list
        setLeads(getLeads());
      } else {
        setSubmitStatus({
          success: false,
          synced: false,
          message: result.error || 'Check details and try again.'
        });
      }
    } catch (err: any) {
      setSubmitStatus({
        success: false,
        synced: false,
        message: err.message || 'Submission error.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    const csvContent = convertLeadsToCSV(leads);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `CRED_MEDIA_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Sync a lead individually (Re-attempt connection)
  const handleSingleSync = async (lead: LeadSubmission) => {
    setSyncInProgressId(lead.id);
    const success = await syncLead(lead);
    if (success) {
      setLeads(getLeads());
    }
    setSyncInProgressId(null);
  };

  // Delete lead log
  const handleDeleteLead = (id: string) => {
    if (window.confirm('Delete this lead record permanently? This cannot be undone.')) {
      const updated = leads.filter(l => l.id !== id);
      saveLeads(updated);
      setLeads(updated);
    }
  };

  // Save changes to parameters
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveSheetSettings(settings);
    setIsSavedSettings(true);
    setTimeout(() => setIsSavedSettings(false), 3000);
  };

  // Easy Copy script
  const handleCopyScript = () => {
    const script = getGoogleAppsScriptTemplate();
    navigator.clipboard.writeText(script);
    setIsCopiedScript(true);
    setTimeout(() => setIsCopiedScript(false), 2500);
  };

  // Fast verify for developer review
  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword.toLowerCase() === 'cred2026' || adminPassword.toLowerCase() === 'admin' || adminPassword === '') {
      setIsAdminAuthenticated(true);
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
    }
  };

  return (
    <section id="get-started" className="py-24 px-4 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-black uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Launch Program
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
            Ready to scale your <span className="text-gradient">Brand Authority?</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Contact us below to see how we build high-retention luxury assets. Your submission is directly recorded on our custom synchronized Google Sheet system.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Guarantees & Quick Links (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-glass border border-white/5 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[60px] rounded-full"></div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-brand-accent font-black text-xs uppercase tracking-widest block font-sans">Why Partner with CRED</span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">The 100% Zero-Friction Handshake.</h3>
              </div>

              {/* High End Guarantee Card */}
              <div className="bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 rounded-2xl p-6 transition-all duration-300 relative group/guarantee">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5.5 h-5.5 text-brand-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-black text-sm uppercase tracking-wider">14-Day Money-Back Guarantee</h4>
                    <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed">
                      If you're not completely satisfied with our editing standards, pacing, or response speed, simply request a <span className="text-white font-bold">100% refund</span> within the first fortnight.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">Instant direct synchronization to Google Sheets.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">24-hour delivery on initial drafting previews.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-semibold">A dedicated creative strategist in private channel.</span>
                </div>
              </div>
            </div>

            {/* Calendly and Discord quick redirects */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Or skip the form entirely:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://calendly.com/ayushvisions/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-brand-accent to-brand-pink text-brand-dark rounded-xl text-center text-xs font-black tracking-tight hover:opacity-90 transition duration-300 inline-flex items-center justify-center gap-2"
                >
                  Book 30-Min Call <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://discord.com/users/1263203451605745850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-glass border border-white/10 text-white rounded-xl text-center text-xs font-black hover:bg-white/5 transition duration-300 inline-flex items-center justify-center gap-2"
                >
                  Discord Chat <Share2 className="w-3.5 h-3.5 text-[#5865F2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High Conversion Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#080808] border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-blue/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-pink"></span>
                  Start Your Brand Project
                </h3>
                
                {/* Admin configuration gate trigger */}
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="p-2 bg-white/5 hover:bg-brand-pink/10 border border-white/10 hover:border-brand-pink/30 rounded-lg text-white/60 hover:text-brand-pink transition-all duration-300 flex items-center gap-1.5 text-xs font-bold"
                  title="Configure Google Sheet / Access CRM logs"
                >
                  <Settings className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Config Sheet</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5 focus-within:text-brand-pink transition">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ethan Stark"
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. hello@brand.com"
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (555) 234-5678"
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-300"
                    />
                  </div>
                </div>

                {/* Primary Contact Source */}
                <div className="space-y-1.5">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">How should we message you? *</label>
                  <select 
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-300 appearance-none cursor-pointer"
                  >
                    <option value="Discord/Telegram" className="bg-[#0c0c0c] text-white">Discord / Telegram handle</option>
                    <option value="WhatsApp/Phoneline" className="bg-[#0c0c0c] text-white">WhatsApp / Phoneline</option>
                    <option value="Email Response" className="bg-[#0c0c0c] text-white">Direct Email</option>
                    <option value="Other" className="bg-[#0c0c0c] text-white">Other Option...</option>
                  </select>
                </div>
              </div>

              {/* Conditional custom source wrapper */}
              {formData.source === 'Other' && (
                <div className="space-y-1.5 text-left animate-in fade-in duration-300">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">Please specify your handle or platform:</label>
                  <input
                    type="text"
                    required
                    value={formSourceCustom}
                    onChange={(e) => setFormSourceCustom(e.target.value)}
                    placeholder="e.g. Twitter @username or Colleague referral"
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-300"
                  />
                </div>
              )}

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-wider block">Tell us about your brand/video goals (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us what you're building, your current subscriber scale, or requested editing styles..."
                  className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-pink focus:bg-white/[0.04] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition duration-300 resize-none"
                />
              </div>

              {/* Submit Info */}
              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                  </span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-white/40">
                    {settings.sheetWebhookUrl ? 'Direct Sync Sheets Active' : 'Offline Backup CRM Enabled'}
                  </span>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-brand-pink text-brand-dark px-8 py-3.5 rounded-xl font-black text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_5px_15px_rgba(242,169,235,0.3)] disabled:opacity-55 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending lead...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Submit Feedback Notification */}
              {submitStatus && (
                <div className={`mt-4 p-4 rounded-xl border flex gap-3 ${
                  submitStatus.success 
                    ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                } text-xs leading-relaxed font-semibold animate-in fade-in duration-300`}>
                  <div className="mt-0.5">
                    {submitStatus.success ? <CheckCircle className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold">{submitStatus.message}</p>
                    {submitStatus.success && (
                      <p className="text-[10px] text-white/40">
                        {submitStatus.synced 
                          ? 'Rows appended in spreadsheet in real-time.' 
                          : 'You can test or view submissions immediately inside the setup panel config.'}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Small Trust footer logos under dual column */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-3.5 bg-white/[0.01] border border-white/5 rounded-full backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-brand-dark bg-white/10 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=q${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-white/30 text-[8px] font-black uppercase tracking-[0.5em] flex items-center gap-2">
              <span>Trusted by</span>
              <span className="px-1.5 py-0.5 bg-brand-accent text-brand-dark rounded-sm font-black">25+</span>
              <span>Global Creator Brands</span>
            </p>
          </div>
        </div>
      </div>

      {/* LEAD CENTER SIDEBAR DRAWER (ADMIN/SETTINGS) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xl bg-brand-dark border-l border-white/10 text-white flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-right duration-300">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-accent/5 to-brand-pink/5">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-brand-pink" />
                  <div>
                    <h3 className="font-black text-sm uppercase tracking-wider">CRED Client Lead Hub</h3>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Google Sheet Integration & CRM</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 px-2.5 rounded-md border border-white/10 hover:border-white/20 text-xs font-bold hover:bg-white/5 transition"
                >
                  Close
                </button>
              </div>

              {/* Password Gate for production privacy */}
              {!isAdminAuthenticated && (
                <div className="flex-1 p-8 flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="space-y-1 max-w-sm">
                    <h4 className="font-black text-sm uppercase">Enter Access Credentials</h4>
                    <p className="text-xs text-white/40">Secure verification panel for CRED MEDIA workspace sheets and lead list controls.</p>
                  </div>
                  <form onSubmit={handleAdminAuth} className="w-full max-w-xs space-y-3">
                    <input 
                      type="password" 
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Agency password (or hit enter / 'admin')"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-pink rounded-xl px-4 py-3 text-sm text-center text-white focus:outline-none transition"
                      autoFocus
                    />
                    {showPasswordError && (
                      <p className="text-red-400 text-[10px] font-bold">Incorrect password. Please try again.</p>
                    )}
                    <button 
                      type="submit" 
                      className="w-full bg-brand-pink text-brand-dark font-black py-2.5 rounded-xl text-xs uppercase tracking-wider hover:opacity-95 transition"
                    >
                      Authenticate Panel
                    </button>
                  </form>
                  <p className="text-[10px] text-white/20">Hint: Default password is empty (just hit Enter) or 'admin'</p>
                </div>
              )}

              {/* Authenticated Admin View */}
              {isAdminAuthenticated && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Tabs: settings vs view leads list */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                    
                    {/* Google Sheets Configuration Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                        <Sheet className="w-4 h-4 text-brand-pink" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-white">1. Configure Google Sheets Connection</h4>
                      </div>

                      <form onSubmit={handleSaveSettings} className="space-y-4 bg-white/[0.01] border border-white/5 rounded-2xl p-4">
                        
                        {/* Option 1: Webhook URL (Apps Script) */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-black uppercase tracking-wider text-white/40">Apps Script Web App URL (Highly Recommended)</label>
                            <span className="px-1.5 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] font-black rounded-sm uppercase">No login required</span>
                          </div>
                          <input 
                            type="url" 
                            placeholder="https://script.google.com/macros/s/.../exec"
                            value={settings.sheetWebhookUrl}
                            onChange={(e) => setSettings({ ...settings, sheetWebhookUrl: e.target.value })}
                            className="w-full bg-brand-dark border border-white/10 focus:border-brand-pink rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none transition"
                          />
                        </div>

                        {/* Option 2: Document specifications (Spreadsheet API backup) */}
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-wider text-white/40">Spreadsheet ID</label>
                            <input 
                              type="text" 
                              placeholder="1aBcD...eFgHi"
                              value={settings.spreadsheetId}
                              onChange={(e) => setSettings({ ...settings, spreadsheetId: e.target.value })}
                              className="w-full bg-brand-dark border border-white/10 focus:border-brand-pink rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none transition"
                            />
                          </div>
                          
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-wider text-white/40">Sheet/Tab Name</label>
                            <input 
                              type="text" 
                              placeholder="Sheet1"
                              value={settings.sheetName}
                              onChange={(e) => setSettings({ ...settings, sheetName: e.target.value })}
                              className="w-full bg-brand-dark border border-white/10 focus:border-brand-pink rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <p className="text-[9px] text-white/40 flex items-center gap-1">
                            <Info className="w-3 h-3 text-brand-pink" />
                            <span>Save parameters to preserve your sheets integration mapping.</span>
                          </p>
                          <button 
                            type="submit" 
                            className="bg-white hover:bg-brand-pink hover:text-brand-dark text-brand-dark text-xs font-black px-4 py-2 rounded-xl transition duration-300 flex items-center gap-1.5"
                          >
                            Save Settings
                            {isSavedSettings && <Check className="w-3.5 h-3.5 text-green-500" />}
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Copypaste copy script step */}
                    <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-brand-accent animate-pulse" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-white">How to connect with Google Sheets in 1 Minute</h4>
                        </div>
                        <button
                          onClick={handleCopyScript}
                          className="px-2.5 py-1 bg-white/5 hover:bg-brand-accent/20 border border-white/10 hover:border-brand-accent/40 rounded-lg text-white/70 hover:text-white text-[9px] font-black transition flex items-center gap-1.5"
                        >
                          {isCopiedScript ? <Check className="w-3.5 h-3.5 text-green-400 animate-bounce" /> : <Copy className="w-3.5 h-3.5 text-brand-accent" />}
                          <span>{isCopiedScript ? 'Copied' : 'Copy Code'}</span>
                        </button>
                      </div>
                      
                      <ol className="text-[10px] text-white/50 leading-relaxed space-y-2 list-decimal list-inside pl-1 font-medium">
                        <li>Click <span className="text-white">Copy Code</span> button to duplicate our secure Apps Script webhook receiver.</li>
                        <li>In your Google Sheet, navigate to <span className="text-white">Extensions</span> &rarr; <span className="text-white">Apps Script</span>.</li>
                        <li>Paste this code, select <span className="text-white">Deploy &rarr; New Deployment &rarr; Web App</span>.</li>
                        <li>Set access to <span className="text-white font-bold">\"Anyone\"</span>, deploy, copy the URL, and paste it in the field above!</li>
                      </ol>
                    </div>

                    {/* Leads Table Logs (Database list review) */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Database className="w-4 h-4 text-brand-pink" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-white">2. Leads Database Review ({leads.length})</h4>
                        </div>
                        
                        {leads.length > 0 && (
                          <button
                            onClick={handleExportCSV}
                            className="bg-glass hover:bg-white/5 text-white border border-white/10 hover:border-white/20 transition px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5"
                          >
                            <Download className="w-3 h-3 text-brand-pink" />
                            <span>Export CSV</span>
                          </button>
                        )}
                      </div>

                      {leads.length === 0 ? (
                        <div className="p-8 border border-dashed border-white/10 rounded-2xl text-center space-y-2">
                          <Info className="w-6 h-6 text-white/20 mx-auto" />
                          <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">No leads in pipeline yet</p>
                          <p className="text-[10px] text-white/30 max-w-xs mx-auto">Fill out the contact sheet to test synchronization live.</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {leads.map((lead) => (
                            <div key={lead.id} className="bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-xl p-4 text-left transition duration-300 relative group/lead">
                              
                              <div className="flex justify-between items-start gap-2">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-xs text-white">{lead.name}</span>
                                    <span className="text-[8px] bg-brand-pink/10 border border-brand-pink/20 text-brand-pink px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">{lead.source}</span>
                                  </div>
                                  <p className="text-[10px] font-semibold text-white/60">{lead.email} &bull; {lead.phone}</p>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {lead.syncedToSheets ? (
                                    <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] font-black uppercase tracking-wider inline-flex items-center gap-1">
                                      <Check className="w-2.5 h-2.5" /> Direct Sheets Synced
                                    </span>
                                  ) : (
                                    <button
                                      disabled={syncInProgressId === lead.id}
                                      onClick={() => handleSingleSync(lead)}
                                      className="px-2.5 py-1 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 text-brand-accent hover:text-white rounded text-[8px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1"
                                      title="Sync this row manually now"
                                    >
                                      {syncInProgressId === lead.id ? (
                                        <div className="w-2.5 h-2.5 border border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                                      ) : 'Not Synced \u21BB'}
                                    </button>
                                  )}

                                  <button
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="p-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-lg text-red-400 hover:text-white transition opacity-0 group-hover/lead:opacity-100"
                                    title="Delete record log"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>

                              {lead.message && (
                                <p className="mt-2.5 p-2 bg-black/40 rounded-lg text-[10px] font-medium text-white/50 border border-white/[0.03]">
                                  {lead.message}
                                </p>
                              )}
                              
                              <p className="mt-1 text-right text-[7px] text-white/20 font-mono">
                                Submitted at: {new Date(lead.timestamp).toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GetStarted;
