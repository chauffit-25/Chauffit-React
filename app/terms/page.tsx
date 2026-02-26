import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Chauffit',
  description: 'Chauffit terms of service. Read our terms and conditions for using our driver on demand platform.',
}

export default function TermsPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass-elevated rounded-2xl p-8">
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">Last Updated:</strong> February 26, 2026
            </p>
            <p className="text-text-secondary leading-relaxed">
              These Terms of Service ("Terms") govern your use of the Chauffit mobile application and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Service Description</h2>
            <p className="text-text-secondary leading-relaxed">
              Chauffit provides a technology platform that connects customers who need professional drivers with independent driver partners. We facilitate bookings but do not provide transportation services directly. Drivers are independent contractors, not employees of Chauffit.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. Eligibility</h2>
            <div className="space-y-3 text-text-secondary">
              <p>To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-lg font-semibold text-text-primary">As a Customer:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate pickup and destination information</li>
                <li>Ensure your vehicle is in safe operating condition</li>
                <li>Treat drivers with respect and courtesy</li>
                <li>Pay all applicable fees on time</li>
                <li>Not use the service for illegal activities</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mt-4">As a Driver:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Possess valid driving license and required documents</li>
                <li>Maintain professional conduct at all times</li>
                <li>Operate vehicles safely and legally</li>
                <li>Provide accurate availability information</li>
                <li>Complete background verification requirements</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Booking and Cancellation</h2>
            <div className="space-y-3 text-text-secondary">
              <p>Bookings are subject to driver availability. Cancellation policies:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Free cancellation within specified time before driver arrival</li>
                <li>Cancellation fees may apply for late cancellations</li>
                <li>No-show fees may be charged if driver arrives and customer is unavailable</li>
                <li>Chauffit reserves the right to cancel bookings for safety or policy violations</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Pricing and Payment</h2>
            <div className="space-y-3 text-text-secondary">
              <ul className="list-disc list-inside space-y-2">
                <li>Prices are displayed before booking confirmation</li>
                <li>Payment is processed through secure third-party providers</li>
                <li>Prices may vary based on demand, time, and location</li>
                <li>All fees are non-refundable except as specified in our Refund Policy</li>
                <li>Additional charges may apply for route changes or extended duration</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Ratings and Reviews</h2>
            <p className="text-text-secondary leading-relaxed">
              Our platform includes a rating system. Users agree to provide honest feedback. We reserve the right to remove inappropriate reviews and suspend accounts with consistently poor ratings.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Chauffit acts solely as a technology platform connecting customers with independent drivers. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Actions or omissions of drivers or customers</li>
              <li>Vehicle damage or accidents during trips</li>
              <li>Loss of personal property</li>
              <li>Service interruptions or technical issues</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Indemnification</h2>
            <p className="text-text-secondary leading-relaxed">
              You agree to indemnify and hold harmless Chauffit, its affiliates, and their respective officers, directors, and employees from any claims, damages, losses, or expenses arising from your use of the services or violation of these Terms.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed">
              All content, trademarks, and intellectual property on the Chauffit platform are owned by Chauffit or licensed to us. You may not copy, modify, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Termination</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for violation of these Terms, fraudulent activity, or any conduct we deem harmful to our platform or users.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">11. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi, India.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">12. Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              We may modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">13. Contact Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              For questions about these Terms, contact us:
            </p>
            <div className="space-y-2 text-text-secondary">
              <p><strong className="text-text-primary">Email:</strong> legal@chauffit.in</p>
              <p><strong className="text-text-primary">Address:</strong> Delhi NCR, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}