# Chauffit - Professional Drivers on Demand

World-class, Apple-quality product marketing website for Chauffit, Delhi NCR's premier driver on demand platform.

## Technology Stack

- **Framework:** Next.js 14 (React)
- **Styling:** TailwindCSS with custom dark theme
- **Animation:** Framer Motion
- **Language:** TypeScript
- **SEO:** Structured data, sitemap, optimized metadata

## Design System

### Colors
- Background: `#1a1a1a`
- Surface: `#2c2c2c` / `#353535`
- Text Primary: `#d9d1c6`
- Text Secondary: `#999999`
- Border: `#4a4a4a`
- Accent Burgundy: `#720c17`
- Accent Gold: `#bd8c5e`

### Typography
- Font Family: Inter
- Refined spacing and hierarchy
- Apple-inspired precision

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage with hero & narrative
│   ├── layout.tsx            # Root layout with SEO
│   ├── globals.css           # Global styles
│   ├── driver/               # Driver recruitment page
│   ├── biker/                # Biker recruitment page
│   ├── blog/                 # Blog listing & articles
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms of service
│   ├── refund/               # Refund policy
│   ├── contact/              # Contact page
│   ├── about/                # About page
│   └── sitemap.ts            # Dynamic sitemap
├── components/
│   ├── Navigation.tsx        # Glass navigation with scroll effects
│   ├── Footer.tsx            # Footer with social links
│   ├── PhoneMockup.tsx       # Animated iPhone mockup
│   └── DownloadButton.tsx    # CTA download button
├── lib/
│   └── structured-data.ts    # SEO structured data schemas
└── public/
    └── robots.txt            # Search engine directives
```

## Key Features

### Homepage
- Hero section with realistic iPhone mockup
- Professional driver messaging starting at ₹99
- Clear differentiation from cab services
- Flexible hourly hire from ₹199
- Everyday usage scenarios
- Safety and reliability messaging
- Smooth scroll animations and micro-interactions
- Mobile-optimized sticky CTA

### Blog (SEO-Optimized)
- Driver on demand Delhi NCR guide
- Benefits of hiring drivers
- Hourly driver hire complete guide
- Article schema markup
- Internal linking strategy
- Contextual download CTAs

### Recruitment Pages
- Driver page: Earn up to ₹40,000+/month
- Biker page: Earn up to ₹25,000+/month
- Hindi language toggle
- Earnings disclaimer
- JobPosting schema markup

### SEO & Performance
- LocalBusiness schema on homepage
- JobPosting schema on recruitment pages
- Article schema on blog posts
- FAQ schema for common questions
- Optimized metadata across all pages
- Sitemap.xml generation
- Robots.txt configuration
- Mobile-first responsive design

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Deployment

The application is configured for production deployment with:
- Server running on port 8080
- Host set to 0.0.0.0
- Security headers configured
- Image optimization enabled
- Core Web Vitals optimized

## Design Philosophy

This website embodies Apple-quality design principles:
- Disciplined glassmorphism with intentional translucency
- Precise, controlled animations with smooth easing
- Refined visual hierarchy and spatial rhythm
- Calm, confident interface without excessive effects
- Production-quality iPhone mockup with ambient lighting
- Tactile depth through layered elevation

## Contact

For inquiries: support@chauffit.in

---

**Proprietary - Chauffit © 2026**