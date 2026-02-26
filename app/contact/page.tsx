import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Chauffit',
  description: 'Get in touch with Chauffit. Contact our support team for assistance with bookings, drivers, or general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-text-secondary">
            We're here to help. Reach out to our support team anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-elevated rounded-2xl p-8 space-y-6">
            <div className="w-12 h-12 rounded-full bg-accent-burgundy/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Email Support</h3>
              <p className="text-text-secondary mb-4">Get assistance via email. We typically respond within 24 hours.</p>
              <a href="mailto:support@chauffit.in" className="text-accent-burgundy hover:text-accent-burgundy/80 transition-colors">
                support@chauffit.in
              </a>
            </div>
          </div>

          <div className="glass-elevated rounded-2xl p-8 space-y-6">
            <div className="w-12 h-12 rounded-full bg-accent-burgundy/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">In-App Chat</h3>
              <p className="text-text-secondary mb-4">Chat with our support team 24/7 directly through the Chauffit app.</p>
              <p className="text-accent-gold">Available 24/7</p>
            </div>
          </div>
        </div>

        <div className="glass-elevated rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Office Location</h2>
          <div className="space-y-4 text-text-secondary">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-burgundy flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-medium text-text-primary">Chauffit Technologies</p>
                <p>Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-elevated rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">How do I book a driver?</h3>
              <p className="text-text-secondary">Download the Chauffit app, enter your pickup and destination, choose between one-way or hourly hire, and confirm your booking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">What are your operating hours?</h3>
              <p className="text-text-secondary">Chauffit operates 24/7 across Delhi NCR. You can book drivers any time, day or night.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">How do I cancel a booking?</h3>
              <p className="text-text-secondary">You can cancel bookings through the app. Free cancellation is available within 5 minutes of booking. See our Refund Policy for details.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Are your drivers verified?</h3>
              <p className="text-text-secondary">Yes, all drivers undergo thorough background checks, license verification, and professional training before joining our platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}