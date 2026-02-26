import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | Chauffit',
  description: 'Chauffit refund and cancellation policy. Learn about our refund terms and conditions.',
}

export default function RefundPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass-elevated rounded-2xl p-8">
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">Last Updated:</strong> February 26, 2026
            </p>
            <p className="text-text-secondary leading-relaxed">
              This Refund Policy outlines the terms and conditions for refunds and cancellations on the Chauffit platform.
            </p>
          </div>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Cancellation by Customer</h2>
            <div className="space-y-4 text-text-secondary">
              <h3 className="text-lg font-semibold text-text-primary">Free Cancellation Period</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Bookings can be cancelled free of charge up to 5 minutes after booking</li>
                <li>No cancellation fee if driver is more than 10 minutes late without valid reason</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mt-4">Cancellation Fees</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancellation within 5 minutes of driver arrival: 50% of booking amount</li>
                <li>Cancellation after driver arrival: 100% of booking amount</li>
                <li>No-show by customer: 100% of booking amount</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. Cancellation by Driver</h2>
            <div className="space-y-3 text-text-secondary">
              <p>If a driver cancels your booking:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>100% refund will be issued to your original payment method</li>
                <li>Refunds are typically processed within 5-7 business days</li>
                <li>We will attempt to assign an alternative driver when possible</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Service Issues</h2>
            <div className="space-y-4 text-text-secondary">
              <p>You may be eligible for a full or partial refund if:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Driver failed to show up after confirmation</li>
                <li>Significant delay without proper notification</li>
                <li>Driver engaged in unprofessional or unsafe behavior</li>
                <li>Technical issues prevented service completion</li>
                <li>Service quality did not meet our standards</li>
              </ul>
              <p className="mt-4">
                To request a refund for service issues, contact our support team within 24 hours of the trip with relevant details and evidence.
              </p>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Payment Errors</h2>
            <p className="text-text-secondary leading-relaxed">
              If you were charged incorrectly due to a technical error or duplicate payment, we will issue a full refund. Please contact support with transaction details within 30 days of the charge.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Refund Process</h2>
            <div className="space-y-3 text-text-secondary">
              <h3 className="text-lg font-semibold text-text-primary">How to Request a Refund</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact our support team via app or email at refunds@chauffit.in</li>
                <li>Provide booking ID and reason for refund request</li>
                <li>Include any supporting evidence (screenshots, photos, etc.)</li>
                <li>Our team will review your request within 48 hours</li>
              </ol>

              <h3 className="text-lg font-semibold text-text-primary mt-4">Refund Timeline</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Approved refunds are processed within 24-48 hours</li>
                <li>Funds appear in your account within 5-7 business days</li>
                <li>Refund timing may vary based on your bank or payment provider</li>
                <li>You will receive email confirmation once refund is processed</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Non-Refundable Situations</h2>
            <div className="space-y-3 text-text-secondary">
              <p>Refunds will not be issued in the following cases:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Trip completed as requested</li>
                <li>Customer changed destination or extended trip (additional charges apply)</li>
                <li>Customer arrived late or unprepared for pickup</li>
                <li>Customer violated our terms of service or code of conduct</li>
                <li>Route changes requested by customer during trip</li>
                <li>Dissatisfaction with traffic or road conditions beyond driver's control</li>
              </ul>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. Promotional Credits and Offers</h2>
            <p className="text-text-secondary leading-relaxed">
              Promotional credits, discount codes, and special offers are non-refundable and cannot be exchanged for cash. Credits expire as per the terms specified when issued.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Disputed Charges</h2>
            <p className="text-text-secondary leading-relaxed">
              If you dispute a charge with your bank or payment provider before contacting us, we may be unable to provide a refund or resolve the issue directly. Please contact our support team first to resolve any payment concerns.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Refund Method</h2>
            <p className="text-text-secondary leading-relaxed">
              All refunds are issued to the original payment method used for the booking. We do not provide cash refunds or transfers to different payment methods.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Contact for Refunds</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              For refund requests or questions, contact us:
            </p>
            <div className="space-y-2 text-text-secondary">
              <p><strong className="text-text-primary">Email:</strong> refunds@chauffit.in</p>
              <p><strong className="text-text-primary">Support:</strong> Available 24/7 via app chat</p>
              <p><strong className="text-text-primary">Response Time:</strong> Within 48 hours</p>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">11. Policy Changes</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}