'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Metadata } from 'next'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function DriverPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en')

  const content = {
    en: {
      title: "Drive with Chauffit",
      subtitle: "Earn up to ₹40,000+ per month",
      cta: "Join as Driver",
      benefits: [
        { title: "Flexible Schedule", desc: "Work on your own time, choose your hours" },
        { title: "Weekly Payouts", desc: "Get paid weekly directly to your bank account" },
        { title: "Training Provided", desc: "Free professional driving and safety training" },
        { title: "Growth Opportunity", desc: "Performance bonuses and incentives" }
      ],
      requirements: [
        "Valid driving license (minimum 2 years)",
        "Age between 21-55 years",
        "Clean driving record",
        "Basic smartphone knowledge",
        "Good communication skills"
      ],
      disclaimer: "Earnings potential varies based on hours worked, location, and demand. ₹40,000+ figure represents top-performing drivers working full-time."
    },
    hi: {
      title: "Chauffit के साथ ड्राइव करें",
      subtitle: "प्रति माह ₹40,000+ तक कमाएं",
      cta: "ड्राइवर के रूप में जुड़ें",
      benefits: [
        { title: "लचीला समय", desc: "अपने समय पर काम करें, अपने घंटे चुनें" },
        { title: "साप्ताहिक भुगतान", desc: "सीधे अपने बैंक खाते में साप्ताहिक भुगतान प्राप्त करें" },
        { title: "प्रशिक्षण प्रदान किया गया", desc: "मुफ्त पेशेवर ड्राइविंग और सुरक्षा प्रशिक्षण" },
        { title: "विकास का अवसर", desc: "प्रदर्शन बोनस और प्रोत्साहन" }
      ],
      requirements: [
        "वैध ड्राइविंग लाइसेंस (न्यूनतम 2 वर्ष)",
        "21-55 वर्ष की आयु",
        "साफ ड्राइविंग रिकॉर्ड",
        "बुनियादी स्मार्टफोन ज्ञान",
        "अच्छा संचार कौशल"
      ],
      disclaimer: "कमाई की क्षमता काम के घंटों, स्थान और मांग के आधार पर भिन्न होती है। ₹40,000+ आंकड़ा पूर्णकालिक काम करने वाले शीर्ष प्रदर्शन करने वाले ड्राइवरों का प्रतिनिधित्व करता है।"
    }
  }

  const t = content[language]

  return (
    <div className="relative pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="absolute top-24 right-8">
          <div className="glass rounded-full p-1 flex gap-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'en' 
                  ? 'bg-accent-burgundy text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'hi' 
                  ? 'bg-accent-burgundy text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {t.title}
          </h1>
          <p className="text-3xl font-semibold text-gradient mb-8">
            {t.subtitle}
          </p>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.chauffit.driver"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-accent-burgundy hover:bg-accent-burgundy/90 text-white rounded-full text-lg font-medium shadow-lg shadow-accent-burgundy/20 transition-all"
          >
            {t.cta}
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-elevated rounded-2xl p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold text-text-primary">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-elevated rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-text-primary">
              {language === 'en' ? 'Requirements' : 'आवश्यकताएं'}
            </h2>
            <ul className="space-y-3">
              {t.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-6 glass rounded-xl border border-accent-gold/20">
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-semibold text-text-primary">
                {language === 'en' ? 'Disclaimer: ' : 'अस्वीकरण: '}
              </span>
              {t.disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}