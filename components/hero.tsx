'use client'

import { motion } from 'framer-motion'

export function Hero() {
	return (
		<section className="relative flex min-h-[70vh] items-center justify-center">
			<div className="mx-auto max-w-5xl px-4 md:px-8 py-12 md:py-20 text-left">
				<motion.h1
					initial={{ opacity: 0, y: 30, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
					className="mb-4 text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight"
			>
   <motion.span 
      initial={{ opacity: 0, x: -50, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
      className="font-light"
   >
      Hi, I&apos;m{' '}
   </motion.span> 
   <motion.span 
      initial={{ opacity: 0, x: 50, rotateY: 15, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
      className="font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
   >
      Emil Bobić
   </motion.span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 25, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ delay: 0.9, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="mx-auto mb-8 max-w-3xl text-lg md:text-xl lg:text-3xl text-neutral-600 dark:text-neutral-400"
				>
					Frontend developer in the making, with a QA background and a passion for learning and creating. Excited to grow as a developer, contribute to meaningful projects, and craft digital experiences that make an impact.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="flex items-center justify-center gap-3"
				>
    <motion.a 
        href="#contact" 
        className="rounded-full bg-black hover:bg-cyan-600 dark:bg-white dark:hover:bg-cyan-400 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl lg:text-2xl text-white dark:text-black transition-all duration-300"
        whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
    >
        Let&apos;s Connect
    </motion.a>
</motion.div>
<motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 1.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="flex items-center justify-center gap-3 md:gap-4 mt-4"
>
          <motion.a 
          href="https://github.com/ebobic" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neutral-600 hover:text-cyan-400 dark:text-neutral-400 dark:hover:text-cyan-400 transition-all duration-300"
          whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    </motion.a>
          <motion.a 
          href="https://www.linkedin.com/in/emil-bobić-35a00a2a1/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neutral-600 hover:text-cyan-400 dark:text-neutral-400 dark:hover:text-cyan-400 transition-all duration-300"
          whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    </motion.a>
	<motion.a 
        href="mailto:ebobic95@gmail.com" 
        className="text-neutral-600 hover:text-cyan-400 dark:text-neutral-400 dark:hover:text-cyan-400 transition-all duration-300"
        whileHover={{ 
            scale: 1.2, 
            rotate: 5,
            transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.9 }}
    >
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
    </svg>
</motion.a>
</motion.div>

			</div>
		</section>
	)
}
