'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const articles = [
  {
    slug: 'driver-on-demand-delhi-ncr',
    title: 'Driver on Demand in Delhi NCR: Complete Guide 2026',
    excerpt: 'Everything you need to know about hiring professional drivers on demand in Delhi NCR. Compare services, pricing, and safety features.',
    date: 'February 20, 2026',
    readTime: '8 min read',
    category: 'Guide'
  },
  {
    slug: 'hire-driver-delhi-ncr-benefits',
    title: 'Why Hire a Driver in Delhi NCR? Top Benefits Explained',
    excerpt: 'Discover the advantages of hiring a professional driver for your daily commute, special occasions, and one-way trips in Delhi NCR.',
    date: 'February 18, 2026',
    readTime: '6 min read',
    category: 'Benefits'
  },
  {
    slug: 'hourly-driver-hire-complete-guide',
    title: 'Hourly Driver Hire: Complete Flexibility Guide',
    excerpt: 'Learn how hourly driver hire works, pricing models, and how to make the most of unlimited stops and flexible scheduling.',
    date: 'February 15, 2026',
    readTime: '7 min read',
    category: 'Guide'
  }
]

export default function BlogPage() {
  return (
    <div className="relative pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Chauffit Blog
          </h1>
          <p className="text-xl text-text-secondary">
            Insights, guides, and tips for hiring professional drivers in Delhi NCR
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="glass-elevated rounded-2xl p-6 h-full hover:bg-surface-elevated/80 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-accent-burgundy px-3 py-1 glass rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-text-secondary">{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-text-primary group-hover:text-gradient transition-all">
                      {article.title}
                    </h2>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-text-secondary">{article.date}</span>
                      <svg className="w-5 h-5 text-accent-burgundy group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}