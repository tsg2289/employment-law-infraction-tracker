import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview, GA_TRACKING_ID } from '../lib/analytics';
import JsonLd from '../components/JsonLd';
import { SCHEMA_FRAGMENTS } from '../lib/siteMeta';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_location: window.location.href,
            page_title: document.title,
          });
        `}
      </Script>

      {/* Google Tag Manager - Add your GTM container ID here */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      <Component {...pageProps} />
      <Analytics />
      
      {/* Global Schema Markup */}
      <JsonLd data={[SCHEMA_FRAGMENTS.organization, SCHEMA_FRAGMENTS.website]} />
    </>
  );
}
