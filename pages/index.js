import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  trackSignup, 
  trackStartLog, 
  trackSectionSave, 
  trackExportReport, 
  trackContactSubmit, 
  trackPageView, 
  trackAttorneyWarning, 
  trackPrivilegeWarning,
  trackError 
} from '../lib/analytics';
import AppLd from '../components/AppLd';

export default function Home() {
  const [state, setState] = useState({
    caseId: null,
    person: { name: '', email: '', employer: '', position: '' },
    wh: {},
    dh: {},
    ra: {},
    lv: {},
    sf: {}
  });

  const [currentPanel, setCurrentPanel] = useState('start');
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);

  // Toast functionality
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2000);
  };

  // Switch panel with privilege warning
  const switchPanel = (panelId) => {
    console.log('Switching to panel:', panelId);
    
    // Track page view
    trackPageView(panelId);
    
    // Check if leaving a legal section without saving
    const legalSections = ['wagehour', 'disc', 'retal', 'leave', 'safety', 'review'];
    const isLeavingLegalSection = legalSections.includes(currentPanel) && panelId !== currentPanel;
    
    // Check if there's unsaved data in current section
    const hasUnsavedData = checkForUnsavedData();
    
    if (isLeavingLegalSection && hasUnsavedData) {
      // Track privilege warning shown
      trackPrivilegeWarning(currentPanel, 'shown');
      
      // First prompt - privilege warning
      const shouldLeave = window.confirm(
        `⚠️ ATTORNEY-CLIENT PRIVILEGE WARNING ⚠️\n\n` +
        `You have unsaved information in this section. If you proceed without consulting an attorney, ` +
        `your data may NOT be protected under attorney-client privilege in potential future litigation.\n\n` +
        `RECOMMENDED: Consult with an attorney to protect your rights.\n\n` +
        `Do you want to:\n` +
        `• Click "Cancel" to stay and save your information (RECOMMENDED)\n` +
        `• Click "OK" to continue and see attorney consultation options`
      );
      
      if (!shouldLeave) {
        trackPrivilegeWarning(currentPanel, 'dismissed');
        return; // Stay on current panel
      } else {
        trackPrivilegeWarning(currentPanel, 'accepted');
        
        // Second prompt - attorney consultation options
        const consultationChoice = window.confirm(
          `⚖️ ATTORNEY CONSULTATION OPTIONS ⚖️\n\n` +
          `To protect your legal rights, you should consult with an employment attorney.\n\n` +
          `Thomas St. Germain, Esq. specializes in employment law and created this tracker to help employees.\n\n` +
          `Choose your next step:\n` +
          `• Click "OK" to email Attorney St. Germain now (RECOMMENDED)\n` +
          `• Click "Cancel" to see other options`
        );
        
        if (consultationChoice) {
          // User chose to email attorney directly
          trackAttorneyWarning('consultation_chosen');
          sendDirectAttorneyEmail();
        } else {
          // Third prompt - final warning with email button
          const finalChoice = window.confirm(
            `🚨 FINAL WARNING 🚨\n\n` +
            `Your employment law data may lose legal protection without attorney consultation.\n\n` +
            `LAST CHANCE TO PROTECT YOUR RIGHTS:\n\n` +
            `• Click "OK" to send urgent attorney notification (LAST CHANCE)\n` +
            `• Click "Cancel" to proceed WITHOUT legal protection (NOT RECOMMENDED)`
          );
          
          if (finalChoice) {
            trackAttorneyWarning('final_warning_accepted');
            sendAttorneyNotification();
          } else {
            trackAttorneyWarning('final_warning_dismissed');
          }
        }
      }
    }
    
    // Track start of legal section
    if (legalSections.includes(panelId) && panelId !== 'review') {
      trackStartLog(panelId);
    }
    
    setCurrentPanel(panelId);
  };

  // Check if current section has unsaved data
  const checkForUnsavedData = () => {
    if (currentPanel === 'wagehour') {
      return getChecked('wh_ot') || getChecked('wh_meal') || getValue('wh_desc');
    } else if (currentPanel === 'disc') {
      return getChecked('dh_sexhar') || getChecked('dh_hostile') || getValue('dh_desc');
    } else if (currentPanel === 'retal') {
      return getCheckedValues('.ra_pa').length > 0 || getCheckedValues('.ra_aa').length > 0 || getValue('ra_desc');
    } else if (currentPanel === 'leave') {
      return getCheckedValues('.lv_type').length > 0 || getChecked('lv_denied') || getValue('lv_desc');
    } else if (currentPanel === 'safety') {
      return getCheckedValues('.sf_haz').length > 0 || getCheckedValues('.sf_rep').length > 0 || getValue('sf_desc');
    }
    return false;
  };

  // Send direct attorney email with email client choice
  const sendDirectAttorneyEmail = () => {
    const employeeInfo = `${state.person.name || 'Potential Client'} (${state.person.email || 'Contact info needed'})`;
    const employerInfo = state.person.employer || 'Employer name needed';
    const currentData = getCurrentSectionData();
    
    // Create direct consultation email content
    const subject = 'URGENT: Employment Law Consultation Request';
    const bodyText = 
      `Dear Attorney St. Germain,\n\n` +
      `I am requesting an urgent consultation regarding potential employment law violations. I found your Employment Law Infraction Tracker and need legal advice to protect my rights.\n\n` +
      `MY INFORMATION:\n` +
      `Name: ${state.person.name || '[Please provide]'}\n` +
      `Email: ${state.person.email || '[Please provide]'}\n` +
      `Phone: [Please provide]\n` +
      `Current Employer: ${employerInfo}\n` +
      `Position: ${state.person.position || '[Please provide]'}\n\n` +
      `LEGAL ISSUES IDENTIFIED:\n${currentData}\n\n` +
      `URGENT REQUEST:\n` +
      `I need immediate legal consultation to:\n` +
      `• Establish attorney-client privilege\n` +
      `• Protect my evidence and legal rights\n` +
      `• Understand my legal options\n` +
      `• Ensure proper legal strategy\n\n` +
      `Please contact me as soon as possible to discuss this matter and establish our attorney-client relationship.\n\n` +
      `Thank you for creating this tracker tool and for your assistance.\n\n` +
      `Best regards,\n` +
      `${state.person.name || '[Your name]'}\n\n` +
      `Case ID: ${state.caseId || 'Not yet created'}\n` +
      `Generated from: Employment Law Infraction Tracker`;

    // Ask user to choose email client
    const useGmail = window.confirm(
      `📧 CHOOSE EMAIL CLIENT 📧\n\n` +
      `How would you like to send your attorney consultation email?\n\n` +
      `• Click "OK" to open Gmail (recommended for Gmail users)\n` +
      `• Click "Cancel" to use your default email client`
    );
    
    if (useGmail) {
      // Open Gmail compose
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thomas.st.germain22@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(gmailUrl, '_blank');
      showToast('Gmail opened. Send your consultation email to protect your legal rights.');
      trackContactSubmit('direct_email_gmail');
    } else {
      // Open default email client
      const mailtoUrl = `mailto:thomas.st.germain22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(mailtoUrl);
      showToast('Email client opened. Send your consultation email to protect your legal rights.');
      trackContactSubmit('direct_email_default');
    }
  };

  // Send attorney notification with email client choice
  const sendAttorneyNotification = () => {
    const employeeInfo = `Name: ${state.person.name || 'Not provided'}\nEmail: ${state.person.email || 'Not provided'}\nEmployer: ${state.person.employer || 'Not provided'}`;
    const currentData = getCurrentSectionData();
    
    // Create email content
    const subject = 'URGENT: Employment Law Case - Attorney Consultation Requested';
    const bodyText = 
      `URGENT ATTORNEY CONSULTATION REQUEST\n\n` +
      `Dear Attorney St. Germain,\n\n` +
      `An individual has identified potential employment law violations through your Employment Law Infraction Tracker and is requesting immediate attorney consultation to preserve attorney-client privilege.\n\n` +
      `EMPLOYEE INFORMATION:\n${employeeInfo}\n\n` +
      `CASE ID: ${state.caseId || 'Not yet created'}\n\n` +
      `LEGAL ISSUES IDENTIFIED:\n${currentData}\n\n` +
      `TIME SENSITIVE REQUEST: This individual needs immediate legal consultation to:\n` +
      `• Establish attorney-client privilege\n` +
      `• Protect their legal rights and evidence\n` +
      `• Ensure proper legal strategy for potential litigation\n\n` +
      `Please contact this individual as soon as possible to provide legal guidance and establish the attorney-client relationship.\n\n` +
      `About Attorney Thomas St. Germain:\n` +
      `Thomas St. Germain is a licensed attorney specializing in employment law matters. ` +
      `This Employment Law Infraction Tracker was created to help individuals identify and document ` +
      `potential workplace violations while ensuring proper legal protections are in place.\n\n` +
      `This notification was automatically generated from the Employment Law Infraction Tracker application.`;

    // Ask user to choose email client
    const useGmail = window.confirm(
      `📧 SEND ATTORNEY NOTIFICATION 📧\n\n` +
      `Choose how to send your urgent attorney consultation request:\n\n` +
      `• Click "OK" to open Gmail\n` +
      `• Click "Cancel" to use your default email client`
    );
    
    if (useGmail) {
      // Open Gmail compose
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thomas.st.germain22@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(gmailUrl, '_blank');
      showToast('Gmail opened with attorney notification. Send immediately to establish attorney-client privilege.');
      trackContactSubmit('attorney_notification_gmail');
    } else {
      // Open default email client
      const mailtoUrl = `mailto:thomas.st.germain22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(mailtoUrl);
      showToast('Email opened with attorney notification. Send immediately to establish attorney-client privilege.');
      trackContactSubmit('attorney_notification_default');
    }
  };

  // Get current section data for attorney notification
  const getCurrentSectionData = () => {
    switch (currentPanel) {
      case 'wagehour':
        return 'Wage & Hour Violations: Potential overtime, break, or wage issues identified';
      case 'disc':
        return 'Discrimination & Harassment: Potential workplace discrimination or harassment identified';
      case 'retal':
        return 'Retaliation & Wrongful Termination: Potential retaliation or wrongful termination identified';
      case 'leave':
        return 'Leave of Absence Issues: Potential FMLA/CFRA or leave-related violations identified';
      case 'safety':
        return 'Workplace Safety Violations: Potential safety hazards or OSHA violations identified';
      default:
        return 'Employment law violations identified';
    }
  };

  // Form helpers
  const getValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
  };

  const getChecked = (id) => {
    const element = document.getElementById(id);
    return element ? element.checked : false;
  };

  const getCheckedValues = (selector) => {
    const elements = document.querySelectorAll(selector + ':checked');
    return Array.from(elements).map(el => el.value);
  };

  // API helpers
  const apiCall = async (endpoint, data) => {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  };

  // Save employee info
  const saveEmployee = async () => {
    const name = getValue('name');
    const email = getValue('email');
    const employer = getValue('employer');
    const position = getValue('position');

    if (!name || !employer) {
      showToast('Name and Employer are required');
      return;
    }

    setLoading(true);
    try {
      const result = await apiCall('employee', { name, email, employer, position });
      setState(prev => ({
        ...prev,
        caseId: result.caseId,
        person: { name, email, employer, position }
      }));
      showToast('Employee saved');
      
      // Track signup conversion
      trackSignup(result.caseId);
      
      switchPanel('wagehour');
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'employee_save');
    }
    setLoading(false);
  };

  // Save wage & hour
  const saveWageHour = async () => {
    // If no case ID, create one first
    if (!state.caseId) {
      showToast('Please save employee information first');
      switchPanel('start');
      return;
    }

    const payload = {
      caseId: state.caseId,
      ...state.person,
      overtimeUnpaid: getChecked('wh_ot'),
      mealBreakIssues: getChecked('wh_meal'),
      restBreakIssues: getChecked('wh_rest'),
      misclassification: getChecked('wh_misclass'),
      minimumWageIssues: getChecked('wh_minwage'),
      unpaidFinalWages: getChecked('wh_final'),
      offTheClock: getChecked('wh_offclock'),
      wageStatementIssues: getChecked('wh_wagestmt'),
      startDate: getValue('wh_start'),
      endDate: getValue('wh_end'),
      description: getValue('wh_desc')
    };

    setLoading(true);
    try {
      await apiCall('wage-hour', payload);
      setState(prev => ({ ...prev, wh: payload }));
      showToast('Wage & Hour saved');
      
      // Track section save
      trackSectionSave('wagehour', state.caseId);
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'wage_hour_save');
    }
    setLoading(false);
  };

  // Save discrimination & harassment
  const saveDiscriminationHarassment = async () => {
    // If no case ID, create one first
    if (!state.caseId) {
      showToast('Please save employee information first');
      switchPanel('start');
      return;
    }

    const payload = {
      caseId: state.caseId,
      ...state.person,
      sexualHarassment: getChecked('dh_sexhar'),
      hostileWorkEnvironment: getChecked('dh_hostile'),
      failureToAccommodate: getChecked('dh_accomm'),
      failureToInteractiveProcess: getChecked('dh_interactive'),
      protectedClasses: getCheckedValues('#dh_classes input[type=checkbox]'),
      startDate: getValue('dh_start'),
      endDate: getValue('dh_end'),
      description: getValue('dh_desc')
    };

    setLoading(true);
    try {
      await apiCall('discrimination-harassment', payload);
      setState(prev => ({ ...prev, dh: payload }));
      showToast('Discrimination/Harassment saved');
      
      // Track section save
      trackSectionSave('disc', state.caseId);
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'discrimination_harassment_save');
    }
    setLoading(false);
  };

  // Save retaliation & wrongful termination
  const saveRetaliation = async () => {
    // If no case ID, create one first
    if (!state.caseId) {
      showToast('Please save employee information first');
      switchPanel('start');
      return;
    }

    const payload = {
      caseId: state.caseId,
      ...state.person,
      protectedActivities: getCheckedValues('.ra_pa'),
      adverseActions: getCheckedValues('.ra_aa'),
      dateOfAdverseAction: getValue('ra_date'),
      reasonGiven: getValue('ra_reason'),
      description: getValue('ra_desc')
    };

    setLoading(true);
    try {
      await apiCall('retaliation-wrongful-termination', payload);
      setState(prev => ({ ...prev, ra: payload }));
      showToast('Retaliation/Wrongful Termination saved');
      
      // Track section save
      trackSectionSave('retal', state.caseId);
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'retaliation_save');
    }
    setLoading(false);
  };

  // Save leave of absence
  const saveLeave = async () => {
    // If no case ID, create one first
    if (!state.caseId) {
      showToast('Please save employee information first');
      switchPanel('start');
      return;
    }

    const payload = {
      caseId: state.caseId,
      ...state.person,
      leaveTypes: getCheckedValues('.lv_type'),
      leaveDenied: getChecked('lv_denied'),
      notReinstated: getChecked('lv_notreinstated'),
      retaliation: getChecked('lv_retaliation'),
      startDate: getValue('lv_start'),
      endDate: getValue('lv_end'),
      description: getValue('lv_desc')
    };

    setLoading(true);
    try {
      await apiCall('leave-of-absence', payload);
      setState(prev => ({ ...prev, lv: payload }));
      showToast('Leave saved');
      
      // Track section save
      trackSectionSave('leave', state.caseId);
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'leave_save');
    }
    setLoading(false);
  };

  // Save workplace safety
  const saveWorkplaceSafety = async () => {
    // If no case ID, create one first
    if (!state.caseId) {
      showToast('Please save employee information first');
      switchPanel('start');
      return;
    }

    const payload = {
      caseId: state.caseId,
      ...state.person,
      hazards: getCheckedValues('.sf_haz'),
      reportedTo: getCheckedValues('.sf_rep'),
      retaliation: getChecked('sf_retaliation'),
      startDate: getValue('sf_start'),
      endDate: getValue('sf_end'),
      description: getValue('sf_desc')
    };

    setLoading(true);
    try {
      await apiCall('workplace-safety', payload);
      setState(prev => ({ ...prev, sf: payload }));
      showToast('Safety saved');
      
      // Track section save
      trackSectionSave('safety', state.caseId);
    } catch (error) {
      showToast('Error: ' + error.message);
      trackError(error.message, 'workplace_safety_save');
    }
    setLoading(false);
  };

  // Review functionality
  const generateReview = () => {
    const p = state.person;
    const lines = [];

    if (!state.caseId) {
      return 'Save your basic info to start a summary.';
    }

    lines.push(`Case ID: ${state.caseId}`);
    lines.push(`${p.name} works/worked as ${p.position || '—'} at ${p.employer}. Contact: ${p.email || '—'}.`);

    if (Object.keys(state.wh).length) {
      const w = state.wh;
      const flags = [
        w.overtimeUnpaid && 'unpaid overtime',
        w.mealBreakIssues && 'meal breaks',
        w.restBreakIssues && 'rest breaks',
        w.misclassification && 'misclassification',
        w.minimumWageIssues && 'minimum wage',
        w.unpaidFinalWages && 'unpaid final wages',
        w.offTheClock && 'off‑the‑clock work',
        w.wageStatementIssues && 'wage statements'
      ].filter(Boolean).join(', ');
      lines.push(`Wage & Hour: issues noted (${flags || 'none checked'}). Period: ${dateRange(w.startDate, w.endDate)}. ${w.description || ''}`.trim());
    }

    if (Object.keys(state.dh).length) {
      const d = state.dh;
      const flags = [
        d.sexualHarassment && 'sexual harassment',
        d.hostileWorkEnvironment && 'hostile work environment',
        d.failureToAccommodate && 'failure to accommodate',
        d.failureToInteractiveProcess && 'failure to engage in the interactive process'
      ].filter(Boolean).join(', ');
      const classes = (d.protectedClasses || []).join(', ') || '—';
      lines.push(`Discrimination/Harassment: ${flags || 'none checked'}. Protected classes: ${classes}. Period: ${dateRange(d.startDate, d.endDate)}. ${d.description || ''}`.trim());
    }

    if (Object.keys(state.ra).length) {
      const r = state.ra;
      lines.push(`Retaliation/Wrongful Termination: protected activity (${(r.protectedActivities || []).join(', ') || '—'}); adverse actions (${(r.adverseActions || []).join(', ') || '—'}). Date: ${pretty(r.dateOfAdverseAction)}. Employer's stated reason: ${r.reasonGiven || '—'}. ${r.description || ''}`.trim());
    }

    if (Object.keys(state.lv).length) {
      const l = state.lv;
      lines.push(`Leave of Absence: types (${(l.leaveTypes || []).join(', ') || '—'}). Denied: ${l.leaveDenied ? 'Yes' : 'No'}. Not reinstated: ${l.notReinstated ? 'Yes' : 'No'}. Retaliation: ${l.retaliation ? 'Yes' : 'No'}. Period: ${dateRange(l.startDate, l.endDate)}. ${l.description || ''}`.trim());
    }

    if (Object.keys(state.sf).length) {
      const s = state.sf;
      lines.push(`Workplace Safety: hazards (${(s.hazards || []).join(', ') || '—'}). Reported to (${(s.reportedTo || []).join(', ') || '—'}). Retaliation: ${s.retaliation ? 'Yes' : 'No'}. Period: ${dateRange(s.startDate, s.endDate)}. ${s.description || ''}`.trim());
    }

    return lines.join('\n\n');
  };

  const dateRange = (a, b) => `${pretty(a)} – ${b ? pretty(b) : 'present'}`;
  const pretty = (s) => s ? new Date(s).toLocaleDateString() : '—';

  const copyReview = async () => {
    const text = generateReview();
    try {
      await navigator.clipboard.writeText(text);
      showToast('Summary copied');
      
      // Track export report conversion
      trackExportReport(state.caseId);
    } catch (e) {
      showToast('Copy failed');
      trackError('Clipboard copy failed', 'export_report');
    }
  };

  // Browser exit warning for legal sections
  useEffect(() => {
    const legalSections = ['wagehour', 'disc', 'retal', 'leave', 'safety', 'review'];
    
    const handleBeforeUnload = (e) => {
      if (legalSections.includes(currentPanel) && checkForUnsavedData()) {
        const message = '⚠️ ATTORNEY-CLIENT PRIVILEGE WARNING ⚠️\n\nYou have unsaved employment law information. Leaving without consulting an attorney may compromise your legal protections. Consider contacting Thomas St. Germain, Esq. at thomas.st.germain22@gmail.com before proceeding.';
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentPanel]);

  // Legal notice component
  const LegalNotice = ({ position = 'top' }) => (
    <div style={{ 
      background: position === 'top' ? '#2d1b69' : '#1a0f4d', 
      border: '1px solid #4c1d95', 
      borderRadius: '8px', 
      padding: '12px', 
      marginBottom: position === 'top' ? '16px' : '0px', 
      marginTop: position === 'bottom' ? '16px' : '0px',
      fontSize: '12px',
      fontWeight: position === 'bottom' ? 'bold' : 'normal'
    }}>
      <strong>⚖️ {position === 'top' ? 'LEGAL NOTICE' : 'IMPORTANT REMINDER'}:</strong> Information entered here may be subject to attorney-client privilege if you consult with an attorney. For maximum legal protection, consider consulting Thomas St. Germain, Esq. (thomas.st.germain22@gmail.com) or another qualified employment attorney before proceeding.
      
      <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => {
            trackContactSubmit('legal_notice_button');
            sendDirectAttorneyEmail();
          }}
          style={{ 
            background: '#14b8a6', 
            color: '#000', 
            border: 'none', 
            padding: '6px 12px', 
            borderRadius: '6px', 
            fontSize: '11px', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          📧 Email Attorney St. Germain Now
        </button>
        <span style={{ fontSize: '10px', opacity: '0.8' }}>
          Free consultation | Gmail or Default Email | Immediate response
        </span>
      </div>
      
      {position === 'bottom' && (
        <div style={{ marginTop: '8px', fontSize: '11px', opacity: '0.9' }}>
          ⚠️ Exiting without attorney consultation may compromise your legal rights.
        </div>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Employment Law Infraction Tracker - Document Workplace Violations | Thomas St. Germain, Esq.</title>
        <meta name="description" content="Professional employment law violation tracker created by attorney Thomas St. Germain. Document wage theft, discrimination, harassment, wrongful termination, and workplace safety issues with attorney-client privilege protection." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://employment-law-infraction-tracker.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Employment Law Infraction Tracker - Document Workplace Violations" />
        <meta property="og:description" content="Professional employment law violation tracker created by attorney Thomas St. Germain. Document workplace violations with legal protection." />
        <meta property="og:url" content="https://employment-law-infraction-tracker.vercel.app/" />
        <meta property="og:site_name" content="Employment Law Infraction Tracker" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Employment Law Infraction Tracker" />
        <meta name="twitter:description" content="Document workplace violations with attorney-client privilege protection" />
        
        {/* Legal/Professional */}
        <meta name="author" content="Thomas St. Germain, Esq." />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="California" />
        
        {/* Structured Data for Legal Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Employment Law Infraction Tracker",
            "description": "Professional tool for documenting employment law violations with attorney-client privilege protection",
            "url": "https://employment-law-infraction-tracker.vercel.app/",
            "applicationCategory": "LegalService",
            "operatingSystem": "Web Browser",
            "author": {
              "@type": "Person",
              "name": "Thomas St. Germain",
              "jobTitle": "Employment Law Attorney",
              "email": "thomas.st.germain22@gmail.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Wage & Hour Violation Tracking",
              "Discrimination & Harassment Documentation", 
              "Retaliation & Wrongful Termination Records",
              "Leave of Absence Issue Tracking",
              "Workplace Safety Violation Documentation",
              "Attorney-Client Privilege Protection",
              "Professional Legal Consultation Integration"
            ]
          })}
        </script>
      </Head>

      {/* SoftwareApplication Schema for the Employment Law Tracker */}
      <AppLd 
        name="Employment Law Infraction Tracker"
        urlPath="/"
        description="Professional employment law violation tracker created by attorney Thomas St. Germain. Document wage theft, discrimination, harassment, wrongful termination, and workplace safety issues with attorney-client privilege protection."
        category="LegalService"
        features={[
          "Wage & Hour Violation Tracking",
          "Discrimination & Harassment Documentation", 
          "Retaliation & Wrongful Termination Records",
          "Leave of Absence Issue Tracking",
          "Workplace Safety Violation Documentation",
          "Attorney-Client Privilege Protection",
          "Professional Legal Consultation Integration",
          "Secure Data Export and Summary Generation"
        ]}
      />

      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="wrap">
        <aside className="sidebar" role="navigation" aria-label="Main navigation">
          <div className="brand">
            <h1>🏛️ Employment Infractions Tracker</h1>
          </div>
          <div className="sheet-link" role="status" aria-live="polite">
            Data is stored locally in the application database.
          </div>
          <nav role="navigation" aria-label="Legal sections navigation">
            <button
              type="button"
              className={currentPanel === 'start' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('start');
              }}
              aria-label="Go to employee information section"
              aria-current={currentPanel === 'start' ? 'page' : undefined}
            >
              Start
            </button>
            <button
              type="button"
              className={currentPanel === 'wagehour' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('wagehour');
              }}
              aria-label="Go to wage and hour violations section"
              aria-current={currentPanel === 'wagehour' ? 'page' : undefined}
            >
              Wage & Hour
            </button>
            <button
              type="button"
              className={currentPanel === 'disc' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('disc');
              }}
              aria-label="Go to discrimination and harassment section"
              aria-current={currentPanel === 'disc' ? 'page' : undefined}
            >
              Discrimination & Harassment
            </button>
            <button
              type="button"
              className={currentPanel === 'retal' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('retal');
              }}
            >
              Retaliation & Wrongful Termination
            </button>
            <button
              type="button"
              className={currentPanel === 'leave' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('leave');
              }}
            >
              Leave of Absence
            </button>
            <button
              type="button"
              className={currentPanel === 'safety' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('safety');
              }}
            >
              Workplace Safety
            </button>
            <button
              type="button"
              className={currentPanel === 'review' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                switchPanel('review');
              }}
            >
              Review
            </button>
          </nav>
          <footer>
            <div>Data is saved to the application database for review and export.</div>
            <div style={{ marginTop: '8px', fontSize: '11px', opacity: '0.8' }}>
              Created by Thomas St. Germain, Esq. | Employment Law Attorney<br/>
              For legal consultation: thomas.st.germain22@gmail.com
            </div>
          </footer>
        </aside>

        <main id="main-content" className="content" role="main" aria-label="Employment law tracker form">
          {/* START: Employee info */}
          {currentPanel === 'start' && (
            <section className="card" role="form" aria-labelledby="employee-info-heading">
              <h2 id="employee-info-heading">Employee Information</h2>
              <div className="row">
                <div>
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="Jane Doe" 
                    required 
                    aria-required="true"
                    aria-describedby="name-help"
                  />
                  <div id="name-help" className="sr-only">Enter your full legal name</div>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="jane@example.com"
                    aria-describedby="email-help"
                  />
                  <div id="email-help" className="sr-only">Optional: Your email for contact purposes</div>
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="employer">Employer</label>
                  <input id="employer" type="text" placeholder="ABC Corp" />
                </div>
                <div>
                  <label htmlFor="position">Position/Title</label>
                  <input id="position" type="text" placeholder="Sales Associate" />
                </div>
              </div>
              <div className="actions" style={{ marginTop: '10px' }}>
                <button className="btn" onClick={saveEmployee} disabled={loading}>
                  {loading ? 'Saving...' : 'Save & Continue'}
                </button>
                <span className="note">You can browse all sections, but save employee info first to enable data saving.</span>
              </div>
              {state.caseId && (
                <div className="note" style={{ marginTop: '8px' }}>
                  Saved. Case ID: {state.caseId}
                </div>
              )}
            </section>
          )}

          {/* WAGE & HOUR */}
          {currentPanel === 'wagehour' && (
            <section className="card">
              <h2>Wage & Hour</h2>
              <LegalNotice position="top" />
              <div className="checkgrid">
                <label><input type="checkbox" id="wh_ot" /> Unpaid overtime</label>
                <label><input type="checkbox" id="wh_meal" /> Meal break issues</label>
                <label><input type="checkbox" id="wh_rest" /> Rest break issues</label>
                <label><input type="checkbox" id="wh_misclass" /> Misclassification</label>
                <label><input type="checkbox" id="wh_minwage" /> Minimum wage issues</label>
                <label><input type="checkbox" id="wh_final" /> Unpaid final wages</label>
                <label><input type="checkbox" id="wh_offclock" /> Off‑the‑clock work</label>
                <label><input type="checkbox" id="wh_wagestmt" /> Inaccurate wage statements</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="wh_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="wh_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="wh_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveWageHour} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Wage & Hour'}
                </button>
                <span className="note">Saved items appear in your database.</span>
              </div>
              <LegalNotice position="bottom" />
            </section>
          )}

          {/* DISCRIMINATION & HARASSMENT */}
          {currentPanel === 'disc' && (
            <section className="card">
              <h2>Discrimination & Harassment</h2>
              <LegalNotice position="top" />
              <div className="checkgrid">
                <label><input type="checkbox" id="dh_sexhar" /> Sexual harassment</label>
                <label><input type="checkbox" id="dh_hostile" /> Hostile work environment</label>
                <label><input type="checkbox" id="dh_accomm" /> Failure to accommodate</label>
                <label><input type="checkbox" id="dh_interactive" /> Failure to engage in interactive process</label>
              </div>
              <label style={{ marginTop: '10px' }}>Protected classes implicated (check all that apply)</label>
              <div className="checkgrid" id="dh_classes">
                <label><input type="checkbox" value="Race" /> Race</label>
                <label><input type="checkbox" value="Color" /> Color</label>
                <label><input type="checkbox" value="National origin" /> National origin</label>
                <label><input type="checkbox" value="Religion" /> Religion</label>
                <label><input type="checkbox" value="Sex/Gender" /> Sex/Gender</label>
                <label><input type="checkbox" value="Pregnancy" /> Pregnancy</label>
                <label><input type="checkbox" value="Sexual orientation" /> Sexual orientation</label>
                <label><input type="checkbox" value="Gender identity/expression" /> Gender identity/expression</label>
                <label><input type="checkbox" value="Age 40+" /> Age (40+)</label>
                <label><input type="checkbox" value="Disability" /> Disability</label>
                <label><input type="checkbox" value="Medical condition" /> Medical condition</label>
                <label><input type="checkbox" value="Marital status" /> Marital status</label>
                <label><input type="checkbox" value="Military/Veteran status" /> Military/Veteran status</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="dh_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="dh_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="dh_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveDiscriminationHarassment} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Discrimination/Harassment'}
                </button>
              </div>
              <LegalNotice position="bottom" />
            </section>
          )}

          {/* RETALIATION & WRONGFUL TERMINATION */}
          {currentPanel === 'retal' && (
            <section className="card">
              <h2>Retaliation & Wrongful Termination</h2>
              <LegalNotice position="top" />
              <label>Protected activities (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="ra_pa" value="Reported harassment/discrimination" /> Reported harassment/discrimination</label>
                <label><input type="checkbox" className="ra_pa" value="Reported wage/hour violations" /> Reported wage/hour violations</label>
                <label><input type="checkbox" className="ra_pa" value="Requested accommodation" /> Requested accommodation</label>
                <label><input type="checkbox" className="ra_pa" value="Requested/used protected leave" /> Requested/used protected leave</label>
                <label><input type="checkbox" className="ra_pa" value="Reported safety issue" /> Reported safety issue</label>
                <label><input type="checkbox" className="ra_pa" value="Whistleblowing/illegal conduct" /> Whistleblowing/illegal conduct</label>
              </div>
              <label style={{ marginTop: '10px' }}>Adverse actions (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="ra_aa" value="Termination" /> Termination</label>
                <label><input type="checkbox" className="ra_aa" value="Demotion" /> Demotion</label>
                <label><input type="checkbox" className="ra_aa" value="Pay cut" /> Pay cut</label>
                <label><input type="checkbox" className="ra_aa" value="Schedule reduction" /> Schedule reduction</label>
                <label><input type="checkbox" className="ra_aa" value="Discipline/write-ups" /> Discipline/write-ups</label>
                <label><input type="checkbox" className="ra_aa" value="Harassment" /> Harassment</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Date of adverse action</label>
                  <input type="date" id="ra_date" />
                </div>
                <div>
                  <label>Reason the employer gave (if any)</label>
                  <input type="text" id="ra_reason" placeholder="e.g., performance, restructuring..." />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="ra_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveRetaliation} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Retaliation/Wrongful Termination'}
                </button>
              </div>
              <LegalNotice position="bottom" />
            </section>
          )}

          {/* LEAVE OF ABSENCE */}
          {currentPanel === 'leave' && (
            <section className="card">
              <h2>Leave of Absence</h2>
              <LegalNotice position="top" />
              <label>Leave types (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="lv_type" value="CFRA/FMLA" /> CFRA/FMLA</label>
                <label><input type="checkbox" className="lv_type" value="Pregnancy Disability Leave (PDL)" /> Pregnancy Disability Leave (PDL)</label>
                <label><input type="checkbox" className="lv_type" value="Paid Sick Leave" /> Paid Sick Leave</label>
                <label><input type="checkbox" className="lv_type" value="Kin Care" /> Kin Care</label>
                <label><input type="checkbox" className="lv_type" value="Other/Local ordinance" /> Other/Local ordinance</label>
              </div>
              <div className="checkgrid" style={{ marginTop: '8px' }}>
                <label><input type="checkbox" id="lv_denied" /> Leave denied</label>
                <label><input type="checkbox" id="lv_notreinstated" /> Not reinstated to same/equivalent job</label>
                <label><input type="checkbox" id="lv_retaliation" /> Retaliation for leave</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="lv_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="lv_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="lv_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveLeave} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Leave'}
                </button>
              </div>
              <LegalNotice position="bottom" />
            </section>
          )}

          {/* WORKPLACE SAFETY */}
          {currentPanel === 'safety' && (
            <section className="card">
              <h2>Workplace Safety</h2>
              <LegalNotice position="top" />
              <label>Hazards (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="sf_haz" value="Unsafe conditions/equipment" /> Unsafe conditions/equipment</label>
                <label><input type="checkbox" className="sf_haz" value="Lack of required training" /> Lack of required training</label>
                <label><input type="checkbox" className="sf_haz" value="Missing PPE" /> Missing PPE</label>
                <label><input type="checkbox" className="sf_haz" value="Excessive heat/indoor heat" /> Excessive heat/indoor heat</label>
                <label><input type="checkbox" className="sf_haz" value="Chemical/air quality hazards" /> Chemical/air quality hazards</label>
                <label><input type="checkbox" className="sf_haz" value="Injury/incident occurred" /> Injury/incident occurred</label>
              </div>
              <label style={{ marginTop: '10px' }}>Reported to (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="sf_rep" value="Supervisor/HR" /> Supervisor/HR</label>
                <label><input type="checkbox" className="sf_rep" value="Cal/OSHA" /> Cal/OSHA</label>
                <label><input type="checkbox" className="sf_rep" value="Other" /> Other</label>
              </div>
              <div className="checkgrid" style={{ marginTop: '8px' }}>
                <label><input type="checkbox" id="sf_retaliation" /> Retaliation for reporting</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="sf_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="sf_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="sf_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveWorkplaceSafety} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Safety'}
                </button>
              </div>
              <LegalNotice position="bottom" />
            </section>
          )}

          {/* REVIEW */}
          {currentPanel === 'review' && (
            <section className="card">
              <h2>Review — Plain Language Summary</h2>
              <div className="review">
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                  {generateReview()}
                </pre>
              </div>
              <div className="actions" style={{ marginTop: '10px' }}>
                <button className="btn secondary" onClick={copyReview}>
                  Copy Summary
                </button>
                <span className="note">The full data lives in the application database.</span>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div 
          className="toast" 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
          aria-label="Notification message"
        >
          {toast}
        </div>
      )}
    </>
  );
}
