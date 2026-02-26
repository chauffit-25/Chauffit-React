import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Chauffit',
  description: 'Learn about Chauffit - Delhi NCR\'s trusted driver on demand platform. Our mission to provide safe, reliable professional drivers.',
}

export default function AboutPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About Chauffit</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Delhi NCR's most trusted platform for professional drivers on demand
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              Chauffit was founded with a simple mission: to provide safe, reliable, and affordable professional driver services to everyone in Delhi NCR. We believe that getting home safely after a celebration, making it to the airport on time, or running errands efficiently shouldn't be complicated or expensive.
            </p>
          </div>

          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">What We Do</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We connect customers who need professional drivers with verified, trained driver partners. Unlike traditional cab services, we provide drivers to operate your own vehicle, giving you the comfort and security of traveling in your personal car with a professional at the wheel.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Whether you need a one-way trip to the airport starting at ₹99 or flexible hourly hire from ₹199 for shopping and errands, Chauffit makes it easy to book professional drivers 24/7.
            </p>
          </div>

          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Why Choose Chauffit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Safety First</h3>
                <p className="text-text-secondary text-sm">Thorough background checks, real-time tracking, and in-app SOS for your peace of mind.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Verified Drivers</h3>
                <p className="text-text-secondary text-sm">All drivers are professionally trained and community-rated for consistent quality.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Affordable Pricing</h3>
                <p className="text-text-secondary text-sm">Transparent rates starting at ₹99 with no hidden fees or surge pricing.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">24/7 Availability</h3>
                <p className="text-text-secondary text-sm">Book drivers any time, day or night, across Delhi NCR.</p>
              </div>
            </div>
          </div>

          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Impact</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-burgundy mb-2">50K+</div>
                <div className="text-sm text-text-secondary">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-burgundy mb-2">1000+</div>
                <div className="text-sm text-text-secondary">Professional Drivers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-burgundy mb-2">4.8★</div>
                <div className="text-sm text-text-secondary">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Commitment</h2>
            <p className="text-text-secondary leading-relaxed">
              We are committed to continuously improving our services, investing in driver training, and leveraging technology to make professional driver services accessible to everyone. Our goal is to set the standard for safety, reliability, and customer satisfaction in the driver on demand industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}