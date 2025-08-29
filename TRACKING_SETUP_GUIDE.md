# Employment Law Infraction Tracker - Analytics Setup Guide

## 🎯 Overview
This guide will walk you through setting up comprehensive tracking for your Employment Law Infraction Tracker app, including Google Analytics 4, Google Tag Manager, and Google Search Console.

## 📊 What's Already Implemented

✅ **Google Analytics 4 (GA4) Tracking**
- Page views and navigation tracking
- User signup conversion events
- Legal section engagement tracking
- Attorney contact conversion events
- Error tracking and debugging

✅ **Conversion Events Setup**
- `signup`: When user saves employee information
- `start_log`: When user begins a legal section
- `export_report`: When user copies summary
- `contact_submit`: When user emails attorney
- Custom events for privilege warnings and attorney consultations

✅ **Google Tag Manager Ready**
- GTM container code included
- Ready for advanced event tracking

✅ **SEO Ready**
- Sitemap.xml generated
- Robots.txt configured
- Meta tags included

## 🚀 Setup Instructions

### Step 1: Google Analytics 4 Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Click "Create Property"
   - Choose "GA4" property type
   - Enter your website details

2. **Get Your Measurement ID**
   - In GA4, go to Admin → Property → Data Streams
   - Click on your web stream
   - Copy the "Measurement ID" (format: G-XXXXXXXXX)

3. **Add to Your App**
   - Create a `.env.local` file in your project root
   - Add: `NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXX`
   - Replace `G-XXXXXXXXX` with your actual measurement ID

### Step 2: Google Search Console Setup

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Click "Add Property"
   - Choose "Domain" (recommended) or "URL prefix"

2. **Verify Ownership**
   - **DNS Method (Recommended)**: Add TXT record to your domain's DNS
   - **HTML File**: Upload verification file to your public folder
   - **Meta Tag**: Add meta tag to your site's head

3. **Submit Sitemap**
   - In Search Console, go to Sitemaps
   - Submit: `https://yourdomain.com/sitemap.xml`
   - Update the domain in `/public/sitemap.xml` and `/public/robots.txt`

### Step 3: Google Tag Manager Setup (Optional but Recommended)

1. **Create GTM Account**
   - Go to [Google Tag Manager](https://tagmanager.google.com/)
   - Create account and container (choose "Web")
   - Copy the container ID (format: GTM-XXXXXXX)

2. **Add to Your App**
   - In your `.env.local` file, add: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
   - Update the GTM container ID in `pages/_app.js`

3. **Configure in GTM**
   - Create GA4 tag in GTM using your measurement ID
   - Set up conversion tracking
   - Create triggers for custom events

### Step 4: Mark Events as Conversions in GA4

1. **In GA4 Admin**
   - Go to Admin → Events
   - Find these events (they'll appear after user interactions):
     - `signup`
     - `start_log`
     - `export_report`
     - `contact_submit`

2. **Mark as Conversions**
   - Toggle "Mark as conversion" for each event
   - These will now appear in your conversion reports

## 📈 Tracking Events Implemented

### Core Conversion Events
- **signup**: User registers (saves employee info)
- **start_log**: User begins legal section tracking
- **export_report**: User exports/copies summary
- **contact_submit**: User contacts attorney

### Engagement Events
- **page_view**: Navigation between sections
- **section_save**: User saves legal section data
- **privilege_warning**: Attorney-client privilege warnings
- **attorney_warning**: Attorney consultation prompts

### Error Tracking
- **error**: API errors and system issues
- **exception**: JavaScript errors and failures

## 🧪 Testing Your Setup

### 1. Real-time Testing
1. Open GA4 → Reports → Realtime
2. Open your site in incognito mode
3. Perform test actions:
   - Save employee info (should fire `signup`)
   - Navigate to legal sections (should fire `start_log`)
   - Save section data (should fire `section_save`)
   - Copy summary (should fire `export_report`)
   - Click attorney email button (should fire `contact_submit`)

### 2. Debug with Browser Tools
1. Open Chrome DevTools → Console
2. Look for gtag calls: `gtag('event', 'signup', ...)`
3. Check for any JavaScript errors

### 3. GA4 Debug View
1. Install GA4 Debugger Chrome extension
2. Enable debug mode
3. See real-time event data with details

## 🔧 Customization Options

### Adding New Events
```javascript
// In lib/analytics.js
export const trackCustomEvent = (action, details) => {
  event({
    action: action,
    category: 'Custom',
    label: details.label,
    value: details.value
  });
};

// Usage in components
import { trackCustomEvent } from '../lib/analytics';
trackCustomEvent('custom_action', { label: 'description', value: 1 });
```

### Enhanced E-commerce (Future)
- Track form completion steps
- Track legal consultation funnel
- Track document download events

## 📱 Mobile Tracking
The implementation automatically works on mobile devices. All events are tracked consistently across:
- iOS Safari
- Android Chrome
- Mobile web browsers

## 🎯 Key Metrics to Monitor

### Conversion Metrics
- **Signup Rate**: Visitors who complete employee registration
- **Section Completion**: Users who save legal section data
- **Export Rate**: Users who export their summary
- **Attorney Contact Rate**: Users who contact attorney

### Engagement Metrics
- **Time on Site**: How long users spend documenting
- **Pages per Session**: Section navigation patterns
- **Bounce Rate**: Users who leave without engaging

### Legal Protection Metrics
- **Privilege Warning Interactions**: How users respond to warnings
- **Attorney Consultation Requests**: Conversion to legal help

## 🔒 Privacy Considerations
- All tracking respects user privacy
- No personally identifiable information is tracked in GA4
- Attorney-client communications are not tracked
- GDPR/CCPA compliant implementation

## 🆘 Troubleshooting

### Common Issues
1. **Events not showing in GA4**
   - Check measurement ID is correct
   - Verify .env.local file setup
   - Test in incognito mode

2. **GTM not working**
   - Verify container ID
   - Check for JavaScript errors
   - Ensure GTM code is in head section

3. **Search Console verification fails**
   - Double-check DNS records
   - Wait for DNS propagation (can take 24 hours)
   - Try alternative verification methods

### Getting Help
- Check browser console for errors
- Use GA4 Realtime view for debugging
- Test with GTM Preview mode
- Contact Thomas St. Germain for legal app specific issues

## 📧 Support
For technical issues with the tracking implementation or legal app functionality, contact Thomas St. Germain at thomas.st.germain22@gmail.com.
