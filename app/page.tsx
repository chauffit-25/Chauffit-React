'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PhoneMockup from '@/components/PhoneMockup'
import DownloadButton from '@/components/DownloadButton'
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/structured-data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

function Section({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-burgundy/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="glass px-4 py-2 rounded-full text-sm text-text-secondary">
                    Delhi NCR's Most Trusted Driver Platform
                  </div>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-text-primary">Professional drivers</span>
                  <br />
                  <span className="text-gradient">on demand</span>
                </h1>

                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                  Starting at <span className="text-text-primary font-semibold">₹99</span>
                </p>

                <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                  We provide verified, professional drivers to operate your own vehicle. 
                  Not a cab service — your car, our expert drivers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <DownloadButton variant="primary" size="lg" />
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 glass-elevated rounded-full text-base font-medium text-text-primary transition-all duration-200"
                >
                  Learn More
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-primary">50K+</div>
                  <div className="text-sm text-text-secondary">Active Users</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-primary">4.8★</div>
                  <div className="text-sm text-text-secondary">Rating</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-primary">24/7</div>
                  <div className="text-sm text-text-secondary">Available</div>
                </div>
              </div>
            </motion.div>

            <div className="relative lg:pl-12">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      <Section id="how-it-works" className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              How Chauffit Works
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Professional drivers at your fingertips in three simple steps
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Open the App",
                description: "Enter your pickup location and destination. Choose between one-way trip or flexible hourly hire."
              },
              {
                step: "02",
                title: "Get Matched",
                description: "We assign a verified, professional driver within minutes. View their profile, rating, and ID before they arrive."
              },
              {
                step: "03",
                title: "Enjoy the Ride",
                description: "Our driver operates your vehicle safely. Track your trip, use in-app SOS, and rate your experience."
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-elevated rounded-2xl p-8 space-y-4 hover:bg-surface-elevated/80 transition-all duration-300">
                <div className="text-5xl font-bold text-accent-burgundy/30">{item.step}</div>
                <h3 className="text-2xl font-semibold text-text-primary">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Everyday Scenarios
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Chauffit fits seamlessly into your daily life
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🍷", title: "After Party", desc: "Get home safely after celebrations" },
              { icon: "✈️", title: "Airport Rides", desc: "One-way trips starting at ₹99" },
              { icon: "🏥", title: "Medical Visits", desc: "Reliable transport for appointments" },
              { icon: "🛍️", title: "Shopping Trips", desc: "Multiple stops, one flexible booking" },
              { icon: "🏢", title: "Office Commute", desc: "Daily reliable transportation" },
              { icon: "👨‍👩‍👧", title: "Family Outings", desc: "Safe drivers for family trips" },
              { icon: "🌙", title: "Late Night", desc: "24/7 availability for any hour" },
              { icon: "🎯", title: "Custom Routes", desc: "Unlimited stops with hourly hire" }
            ].map((scenario, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass rounded-xl p-6 text-center space-y-3 hover:glass-elevated transition-all duration-300">
                <div className="text-4xl">{scenario.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary">{scenario.title}</h3>
                <p className="text-sm text-text-secondary">{scenario.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                Safety is our priority
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Verified Drivers", desc: "Background checks, license verification, and professional training" },
                  { title: "Real-Time Tracking", desc: "Live GPS tracking and trip monitoring for complete transparency" },
                  { title: "In-App SOS", desc: "Emergency button connects you instantly to support and authorities" },
                  { title: "Rating System", desc: "Community-driven ratings ensure consistent quality and accountability" }
                ].map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-burgundy/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
                      <p className="text-text-secondary">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-elevated rounded-3xl p-12 space-y-6">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-burgundy/20 to-transparent flex items-center justify-center">
                <svg className="w-32 h-32 text-accent-burgundy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Your Safety, Our Promise</h3>
                <p className="text-text-secondary">Every driver is thoroughly vetted and continuously monitored to ensure your peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <div className="glass-elevated rounded-3xl p-12 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent-burgundy mb-2">₹99</div>
                    <div className="text-sm text-text-secondary">One-Way Starting</div>
                  </div>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent-gold mb-2">₹199</div>
                    <div className="text-sm text-text-secondary">Hourly Starting</div>
                  </div>
                </div>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent pricing with no hidden charges</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multiple payment options available</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pay only for the service you use</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                Flexible hourly hire
              </h2>
              <div className="space-y-6 text-lg text-text-secondary">
                <p>
                  Need complete flexibility? Book a driver by the hour starting at just <span className="text-text-primary font-semibold">₹199</span>.
                </p>
                <p>
                  Perfect for shopping trips, running errands, or exploring the city at your own pace. 
                  Make unlimited stops, visit multiple destinations, and enjoy round trips — all within your booked duration.
                </p>
                <div className="glass rounded-xl p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-text-primary">Hourly Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-burgundy">•</span> Unlimited stops during your booking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-burgundy">•</span> Multiple destinations, one booking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-burgundy">•</span> Perfect for round trips and errands
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-burgundy">•</span> Complete control over your schedule
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-gradient-to-b from-accent-burgundy/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-text-primary">
              Ready to experience the difference?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Chauffit for safe, professional driving services.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DownloadButton variant="primary" size="lg" />
              <div className="text-sm text-text-secondary">
                Available on Google Play & App Store
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 z-40 md:hidden"
      >
        <DownloadButton variant="primary" size="sm" className="shadow-2xl" />
      </motion.div>
    </div>
  )
}