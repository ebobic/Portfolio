'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Repos } from '@/components/repos'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
	const [activeSection, setActiveSection] = useState('hero')

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
			<main className="flex-1">
				<AnimatePresence mode="wait">
					{activeSection === 'hero' && (
						<motion.div
							key="hero"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<Hero />
						</motion.div>
					)}
					{activeSection === 'projects' && (
						<motion.div
							key="projects"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<Repos />
						</motion.div>
					)}
					{activeSection === 'about' && (
						<motion.div
							key="about"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<About />
						</motion.div>
					)}
					{activeSection === 'contact' && (
						<motion.div
							key="contact"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<Contact />
						</motion.div>
					)}
				</AnimatePresence>
			</main>
			<footer className="mt-auto py-16 text-center text-sm text-neutral-500">
				<div className="flex items-center justify-center gap-2 mb-2">
				
					<span></span>
					<span className="flex items-center gap-1">
						Made with 
						<svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>
						By Emil
					</span>
				</div>

			</footer>
		</div>
	)
}
