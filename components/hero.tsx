'use client'

import { motion } from 'framer-motion'

export function Hero() {
	return (
		<section className="relative flex min-h-[70vh] items-center justify-center border-b border-neutral-200/60 dark:border-neutral-800">
			<div className="mx-auto max-w-5xl px-4 py-20 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl"
			>
					Building accessible, minimal interfaces
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5 }}
					className="mx-auto mb-6 max-w-2xl text-neutral-600 dark:text-neutral-400"
				>
					I'm Emil, a junior frontend developer studying React, TypeScript, WCAG and Next.js.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 6 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.4 }}
					className="flex items-center justify-center gap-3"
				>
					<a href="#projects" className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black">View projects</a>
					<a href="#about" className="rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700">About me</a>
				</motion.div>
			</div>
		</section>
	)
}
