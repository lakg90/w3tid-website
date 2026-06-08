'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LogoAnimation() {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative">
        {/* Outer slow-rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ scale: 1.18 }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ scale: 1.35 }}
        />
        {/* Logo with gentle pulse */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/w3tid-logo.png"
            alt="W3TID"
            width={240}
            height={240}
            className="rounded-full shadow-lg"
            priority
          />
        </motion.div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gold/5 blur-2xl -z-10 scale-150" />
      </div>
    </motion.div>
  );
}
