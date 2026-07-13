import { useEffect } from 'react';

export default function SEO({ title, description, keywords, schema, canonical }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.getAttribute('content') || '';
    if (description) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const prevKeywords = metaKeywords.getAttribute('content') || '';
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const prevCanonical = linkCanonical.getAttribute('href') || '';
    if (canonical) {
      linkCanonical.setAttribute('href', canonical);
    } else {
      linkCanonical.setAttribute('href', window.location.href);
    }

    // 5. Inject Structured JSON-LD Schema
    let scriptTag = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'page-json-ld-schema');
      scriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    return () => {
      // Cleanup dynamically injected tags on unmount
      if (prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      if (prevKeywords) {
        metaKeywords.setAttribute('content', prevKeywords);
      }
      if (prevCanonical) {
        linkCanonical.setAttribute('href', prevCanonical);
      }
      if (scriptTag && document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, schema, canonical]);

  return null;
}
