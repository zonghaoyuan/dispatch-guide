import React from 'react';

export const VideoGameSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Dispatch",
    "description": "An episodic superhero workplace adventure game where you coordinate reformed villains as heroes",
    "genre": ["Adventure", "Narrative", "Strategy"],
    "gamePlatform": ["PC", "PlayStation 5"],
    "operatingSystem": ["Windows", "PlayStation 5"],
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "19.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "9.4",
      "ratingCount": "1000000",
      "bestRating": "10",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "AdHoc Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AdHoc Studio"
    },
    "datePublished": "2025-10-22"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const HowToSchema = ({ title, description, steps }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `https://dispatchguide.org${step.url || ''}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://dispatchguide.org${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
