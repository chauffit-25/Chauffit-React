'use client'

import { motion } from 'framer-motion'

export default function PhoneMockup() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div 
            className="relative w-[280px] md:w-[320px] mx-auto"
            style={{ transform: 'rotateY(-8deg)' }}
          >
            <div className="relative bg-[#1c1c1c] rounded-[3rem] p-3 shadow-2xl border border-[#333]">
              <div className="bg-background rounded-[2.5rem] overflow-hidden">
                <div className="relative aspect-[9/19.5]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1c1c1c] rounded-b-3xl z-10" />
                  
                  <div className="relative w-full h-full bg-gradient-to-br from-background to-surface p-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-text-secondary">9:41 AM</div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                          </svg>
                          <div className="text-xs text-accent-burgundy font-medium">SOS</div>
                        </div>
                      </div>

                      <div className="glass rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-accent-burgundy/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-accent-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-text-primary">Rajesh Kumar</div>
                            <div className="text-xs text-text-secondary">DL 4C AB 1234</div>
                          </div>
                          <div className="text-xs text-accent-gold font-medium">★ 4.8</div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="text-text-secondary">Verified Driver</div>
                          <div className="flex items-center gap-1 text-green-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            On the way
                          </div>
                        </div>
                      </div>

                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-elevated">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-burgundy/10 to-transparent" />
                        
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                          <motion.path
                            d="M 20 100 Q 60 60, 100 100 T 180 100"
                            stroke="#720c17"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </svg>

                        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent-burgundy shadow-lg shadow-accent-burgundy/50" />
                        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-accent-gold shadow-lg shadow-accent-gold/50" />
                        
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <div className="glass-elevated rounded-xl p-3 text-xs">
                            <div className="text-text-primary font-medium">Arriving in 5 min</div>
                            <div className="text-text-secondary">2.3 km away</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass rounded-xl p-3 text-center">
                          <div className="text-lg font-semibold text-text-primary">₹199</div>
                          <div className="text-xs text-text-secondary">Trip Fare</div>
                        </div>
                        <div className="glass rounded-xl p-3 text-center">
                          <div className="text-lg font-semibold text-text-primary">45 min</div>
                          <div className="text-xs text-text-secondary">Duration</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-burgundy/10 blur-3xl -z-10"
      />
    </div>
  )
}