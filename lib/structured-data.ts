export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Chauffit",
  "description": "Professional drivers on demand in Delhi NCR. Book verified drivers to operate your own vehicle starting at ₹99.",
  "url": "https://www.chauffit.in",
  "telephone": "+91-XXXXXXXXXX",
  "email": "support@chauffit.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi NCR",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "₹₹",
  "areaServed": {
    "@type": "City",
    "name": "Delhi NCR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2500"
  }
})

export const generateDriverJobPostingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Professional Driver",
  "description": "Earn up to ₹40,000+ per month as a professional driver with Chauffit. Flexible schedule, weekly payouts, and growth opportunities.",
  "datePosted": "2026-01-01",
  "validThrough": "2026-12-31",
  "employmentType": "CONTRACTOR",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Chauffit",
    "sameAs": "https://www.chauffit.in"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 20000,
      "maxValue": 40000,
      "unitText": "MONTH"
    }
  },
  "qualifications": "Valid driving license (minimum 2 years), age 21-55, clean driving record"
})

export const generateBikerJobPostingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Professional Biker",
  "description": "Earn up to ₹25,000+ per month as a professional biker with Chauffit. Flexible hours, weekly payments, and daily incentives.",
  "datePosted": "2026-01-01",
  "validThrough": "2026-12-31",
  "employmentType": "CONTRACTOR",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Chauffit",
    "sameAs": "https://www.chauffit.in"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 15000,
      "maxValue": 25000,
      "unitText": "MONTH"
    }
  },
  "qualifications": "Valid two-wheeler license (minimum 1 year), age 18-50, own motorcycle/scooter"
})

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a driver on Chauffit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One-way trips start at ₹99, while hourly hire starts at ₹199 per hour with unlimited stops and flexible scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "Are Chauffit drivers verified and safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Chauffit drivers undergo thorough background checks, license verification, and professional training. We provide real-time GPS tracking and in-app SOS features for your safety."
      }
    },
    {
      "@type": "Question",
      "name": "Is Chauffit available 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Chauffit operates 24/7 across Delhi NCR, making professional drivers available whenever you need them."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between one-way and hourly hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One-way trips are for single journeys from point A to point B. Hourly hire gives you a driver for a set duration with unlimited stops, multiple destinations, and complete flexibility."
      }
    }
  ]
})