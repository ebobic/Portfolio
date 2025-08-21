'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const revealAnimation = {
		hidden: { 
			opacity: 0, 
			y: 50,
			scale: 0.95
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8
			}
		}
	}

	return (
		<motion.footer 
			className="py-12 text-center text-sm border-t border-neutral-300 dark:border-neutral-700"
			variants={revealAnimation}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<div className="max-w-4xl mx-auto px-6">
				{/* Made with love section */}
				<div className="flex items-center justify-center gap-2 mb-6">
					<span className="flex items-center gap-2 text-base font-medium text-black dark:text-neutral-300">
						Made with 
						<svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>
						by Emil
					</span>
				</div>

				{/* Info section */}
				<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm text-neutral-800 dark:text-neutral-400 mb-8">
					<span className="font-medium">© 2025 Emil Bobić</span>
					<span className="hidden md:inline text-neutral-600">•</span>
					<span>Frontend Developer & QA Engineer</span>
					<span className="hidden md:inline text-neutral-600">•</span>
					<span>Built with Next.js & Tailwind CSS</span>
				</div>

				{/* Navigation links */}
				<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
					<Link href="/" className="text-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium">
						Home
					</Link>
					<span className="hidden md:inline text-neutral-600">•</span>
					<Link href="/#about" className="text-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium">
						About
					</Link>
					<span className="hidden md:inline text-neutral-600">•</span>
					<Link href="/projects" className="text-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium">
						Projects
					</Link>
					<span className="hidden md:inline text-neutral-600">•</span>
					<Link href="/#contact" className="text-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium">
						Contact
					</Link>
				</div>
			</div>
		</motion.footer>
	)
}
