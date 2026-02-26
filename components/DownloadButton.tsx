'use client'

import { motion } from 'framer-motion'

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DownloadButton({ 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: DownloadButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  const baseClasses = variant === 'primary' 
    ? 'bg-accent-burgundy hover:bg-accent-burgundy/90 text-white shadow-lg shadow-accent-burgundy/20'
    : 'glass-elevated hover:bg-surface-elevated/80 text-text-primary'

  return (
    <motion.a
      href="https://play.google.com/store/apps/details?id=com.chauffit"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-3 ${sizeClasses[size]} ${baseClasses} rounded-full font-medium transition-all duration-200 ${className}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      Download Now
    </motion.a>
  )
}