import { Metadata } from 'next'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'Driver on Demand in Delhi NCR: Complete Guide 2026',
  description: 'Complete guide to hiring professional drivers on demand in Delhi NCR. Compare services, pricing from ₹99, safety features, and availability. Book verified drivers instantly.',
  keywords: ['driver on demand Delhi NCR', 'hire driver Delhi', 'professional driver booking', 'Delhi NCR chauffeur service', 'on-demand driver'],
  openGraph: {
    title: 'Driver on Demand in Delhi NCR: Complete Guide 2026',
    description: 'Complete guide to hiring professional drivers on demand in Delhi NCR starting at ₹99.',
    type: 'article',
    publishedTime: '2026-02-20T00:00:00.000Z',
  },
}

export default function ArticlePage() {
  return (
    <article className="relative pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Driver on Demand in Delhi NCR: Complete Guide 2026",
            "description": "Complete guide to hiring professional drivers on demand in Delhi NCR. Compare services, pricing, and safety features.",
            "datePublished": "2026-02-20T00:00:00.000Z",
            "dateModified": "2026-02-20T00:00:00.000Z",
            "author": {
              "@type": "Organization",
              "name": "Chauffit"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Chauffit",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.chauffit.in/logo.png"
              }
            }
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-accent-burgundy px-3 py-1 glass rounded-full">Guide</span>
            <span className="text-sm text-text-secondary">February 20, 2026</span>
            <span className="text-sm text-text-secondary">•</span>
            <span className="text-sm text-text-secondary">8 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Driver on Demand in Delhi NCR: Complete Guide 2026
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed">
            Everything you need to know about hiring professional drivers on demand in Delhi NCR. Compare services, pricing, and safety features.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="glass-elevated rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">What is Driver on Demand?</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Driver on demand is a service that provides professional, verified drivers to operate your own vehicle. Unlike traditional cab services where you use the service provider's vehicle, driver on demand platforms like Chauffit send trained drivers to your location to drive your personal car.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This service is particularly popular in Delhi NCR for various scenarios including one-way trips to the airport, late-night returns from parties, medical appointments, and flexible hourly hire for shopping or errands.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-12">Why Choose Driver on Demand in Delhi NCR?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Cost-Effective</h3>
              <p className="text-text-secondary">Starting at just ₹99 for one-way trips, driver on demand is significantly cheaper than cab services for airport runs and similar journeys.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Your Own Vehicle</h3>
              <p className="text-text-secondary">Enjoy the comfort and familiarity of your own car with all your personal settings and belongings.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Professional Drivers</h3>
              <p className="text-text-secondary">All drivers are verified, trained, and rated by the community ensuring consistent quality and safety.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">24/7 Availability</h3>
              <p className="text-text-secondary">Book drivers any time of day or night, perfect for early morning flights or late-night returns.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-12">Pricing Models Explained</h2>
          
          <div className="glass-elevated rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">One-Way Trips - Starting at ₹99</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Perfect for airport drops, one-way commutes, or when you only need a driver for a single journey. The driver will operate your vehicle to your destination and then return on their own.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Common use cases include dropping your car at the airport before a trip, getting home safely after evening events, or one-way commutes where you need a driver.
            </p>
          </div>

          <div className="glass-elevated rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Hourly Hire - Starting at ₹199</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Hourly hire provides complete flexibility with unlimited stops, multiple destinations, and round trips within your booked duration. This is ideal for shopping trips, running errands, medical appointments, or exploring the city at your own pace.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With hourly hire, you're not limited by distance or number of stops. The driver stays with you for the entire duration, providing maximum convenience and flexibility.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-12">Safety Features</h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-text-secondary">
              <svg className="w-6 h-6 text-accent-burgundy flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-text-primary">Background Verification:</strong> All drivers undergo thorough background checks and license verification before onboarding.
              </div>
            </li>
            <li className="flex items-start gap-3 text-text-secondary">
              <svg className="w-6 h-6 text-accent-burgundy flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-text-primary">Real-Time GPS Tracking:</strong> Track your trip in real-time with live location updates and estimated arrival times.
              </div>
            </li>
            <li className="flex items-start gap-3 text-text-secondary">
              <svg className="w-6 h-6 text-accent-burgundy flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-text-primary">In-App SOS Button:</strong> Emergency button provides instant connection to support team and authorities if needed.
              </div>
            </li>
            <li className="flex items-start gap-3 text-text-secondary">
              <svg className="w-6 h-6 text-accent-burgundy flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-text-primary">Community Ratings:</strong> Rate your experience and view driver ratings to ensure consistent service quality.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-12">How to Book a Driver on Chauffit</h2>
          
          <ol className="space-y-4 mb-8 list-decimal list-inside text-text-secondary">
            <li className="leading-relaxed">Download the Chauffit app from Google Play Store or Apple App Store</li>
            <li className="leading-relaxed">Enter your pickup location and destination</li>
            <li className="leading-relaxed">Choose between one-way trip or hourly hire</li>
            <li className="leading-relaxed">Review the fare estimate and confirm booking</li>
            <li className="leading-relaxed">View driver details including photo, ID, and rating</li>
            <li className="leading-relaxed">Track driver arrival in real-time</li>
            <li className="leading-relaxed">Enjoy your safe journey and rate your experience</li>
          </ol>

          <div className="glass-elevated rounded-2xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to book your driver?</h3>
            <p className="text-text-secondary mb-6">Download the Chauffit app and experience professional driver services in Delhi NCR</p>
            <DownloadButton variant="primary" size="lg" />
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-4 mt-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Is driver on demand available 24/7?</h3>
              <p className="text-text-secondary">Yes, Chauffit operates round the clock, making it perfect for early morning flights, late-night returns, or any time you need a driver.</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">How quickly can I get a driver?</h3>
              <p className="text-text-secondary">In most cases, drivers are assigned within minutes and can reach your location within 15-30 minutes depending on your area and demand.</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">What payment methods are accepted?</h3>
              <p className="text-text-secondary">Chauffit accepts multiple payment methods including UPI, credit/debit cards, and digital wallets for your convenience.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-burgundy hover:text-accent-burgundy/80 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  )
}