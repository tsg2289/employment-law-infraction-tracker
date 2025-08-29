// Google Analytics 4 setup and tracking functions
// You'll need to replace 'G-XXXXXXXX' with your actual GA4 measurement ID

// Initialize GA4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-XXXXXXXX';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for your Employment Law app
export const trackSignup = (caseId) => {
  event({
    action: 'signup',
    category: 'User',
    label: 'Employee Registration',
    value: 1
  });
  
  // Also track as a conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'signup', {
      case_id: caseId,
      event_category: 'conversion'
    });
  }
};

export const trackStartLog = (section) => {
  event({
    action: 'start_log',
    category: 'Legal Section',
    label: section,
    value: 1
  });
  
  // Track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'start_log', {
      legal_section: section,
      event_category: 'conversion'
    });
  }
};

export const trackSectionSave = (section, caseId) => {
  event({
    action: 'section_save',
    category: 'Legal Section',
    label: section,
    value: 1
  });
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_save', {
      legal_section: section,
      case_id: caseId,
      event_category: 'engagement'
    });
  }
};

export const trackExportReport = (caseId) => {
  event({
    action: 'export_report',
    category: 'Report',
    label: 'Summary Export',
    value: 1
  });
  
  // Track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'export_report', {
      case_id: caseId,
      event_category: 'conversion'
    });
  }
};

export const trackContactSubmit = (method) => {
  event({
    action: 'contact_submit',
    category: 'Legal Contact',
    label: method, // 'direct_email' or 'attorney_notification'
    value: 1
  });
  
  // Track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_submit', {
      contact_method: method,
      event_category: 'conversion'
    });
  }
};

export const trackPageView = (page) => {
  event({
    action: 'page_view',
    category: 'Navigation',
    label: page,
    value: 1
  });
};

export const trackAttorneyWarning = (action) => {
  event({
    action: 'attorney_warning',
    category: 'Legal Warning',
    label: action, // 'shown', 'dismissed', 'accepted'
    value: 1
  });
};

export const trackPrivilegeWarning = (section, action) => {
  event({
    action: 'privilege_warning',
    category: 'Legal Protection',
    label: `${section}_${action}`, // e.g., 'wagehour_shown', 'disc_dismissed'
    value: 1
  });
};

// Track errors for debugging
export const trackError = (error, context) => {
  event({
    action: 'error',
    category: 'Error',
    label: context,
    value: 0
  });
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error,
      fatal: false
    });
  }
};
