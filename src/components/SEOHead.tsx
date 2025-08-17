import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOHead: React.FC = () => {
  const { i18n } = useTranslation();

  const siteTitle = 'GPITG - Innovative ICT Solutions for Africa';
  const siteDescription = 'Locally developed e-solutions for healthcare, retail, and payments in Tanzania and beyond. Featuring eHMS, AdeCare, GPOS, and more innovative business solutions.';
  const keywords = 'eHMS, AdeCare, GPOS, telemedicine, Tanzania ICT, healthcare management, retail solutions, digital payments, G-Pesa, G-Appointment, G-Queue, G-TELE, African software, business automation';
  const siteUrl = 'https://gpitg.co.tz';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GPITG" />
      <meta name="language" content={i18n.language} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="GPITG" />
      <meta property="og:locale" content={i18n.language === 'sw' ? 'sw_TZ' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="sw" href={`${siteUrl}/sw`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GPITG",
          "description": siteDescription,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+255-717-531-539",
              "contactType": "customer service",
              "email": "info@gpitg.co.tz",
              "availableLanguage": ["English", "Swahili"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dar es Salaam",
            "addressRegion": "Kawe",
            "addressCountry": "Tanzania"
          },
          "sameAs": [
            "https://linkedin.com/company/gpitg",
            "https://twitter.com/gpitg",
            "https://facebook.com/gpitg"
          ],
          "offers": [
            {
              "@type": "Service",
              "name": "eHMS - Electronic Health Management System",
              "description": "Comprehensive healthcare management system for medical facilities"
            },
            {
              "@type": "Service",
              "name": "AdeCare - Home-Based Healthcare",
              "description": "Digital healthcare ecosystem for home-based medical care"
            },
            {
              "@type": "Service",
              "name": "GPOS - Point of Sale System",
              "description": "Complete retail management solution with integrated payments"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;