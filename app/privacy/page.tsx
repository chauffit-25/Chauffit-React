import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Chauffit',
  description: 'Chauffit privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass-elevated rounded-2xl p-8">
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">Last Updated:</strong> February 26, 2026
            </p>
            <p className="text-text-secondary leading-relaxed">
              Chauffit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </div>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-text-secondary">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Profile photo and government-issued ID (for drivers)</li>
                  <li>Payment information and transaction history</li>
                  <li>Vehicle details (for customers)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Location Information</h3>
                <p>We collect precise location data when you use our services to match you with nearby drivers and provide navigation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Usage Information</h3>
                <p>Information about how you interact with our app, including trip history, preferences, and device information.</p>
              </div>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Match customers with drivers and facilitate trips</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send administrative information and service updates</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Ensure safety and security of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-text-secondary">
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-text-primary">Drivers:</strong> We share necessary trip information including pickup/drop-off locations</li>
                <li><strong className="text-text-primary">Service Providers:</strong> Third-party companies that help us operate our business</li>
                <li><strong className="text-text-primary">Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li><strong className="text-text-primary">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </div>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
            <p className="text-text-secondary leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Your Rights and Choices</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Access and update your personal information through the app</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt-out of promotional communications</li>
              <li>Disable location services (may limit app functionality)</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Data Retention</h2>
            <p className="text-text-secondary leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your information, except where retention is required by law.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Changes to This Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="glass rounded-xl p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-text-secondary">
              <p><strong className="text-text-primary">Email:</strong> privacy@chauffit.in</p>
              <p><strong className="text-text-primary">Address:</strong> Delhi NCR, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}