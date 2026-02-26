import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chauffit.in'),
  title: {
    default: 'Chauffit - Professional Drivers on Demand | Starting at ₹99',
    template: '%s | Chauffit'
  },
  description: 'Book professional, verified drivers to operate your own vehicle. One-way trips from ₹99, flexible hourly hire from ₹199. Safe, reliable, available 24/7 in Delhi NCR.',
  keywords: ['driver on demand', 'hire driver', 'professional driver', 'Delhi NCR driver', 'hourly driver hire', 'chauffeur service', 'car driver booking'],
  authors: [{ name: 'Chauffit' }],
  creator: 'Chauffit',
  publisher: 'Chauffit',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.chauffit.in',
    siteName: 'Chauffit',
    title: 'Chauffit - Professional Drivers on Demand',
    description: 'Book professional, verified drivers to operate your own vehicle. Starting at ₹99.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chauffit - Professional Drivers on Demand',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffit - Professional Drivers on Demand',
    description: 'Book professional, verified drivers to operate your own vehicle. Starting at ₹99.',
    images: ['/og-image.jpg'],
    creator: '@chauffit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}