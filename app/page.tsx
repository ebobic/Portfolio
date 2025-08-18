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
			<footer className="py-10 text-center text-sm text-neutral-500">
				<div className="flex items-center justify-center gap-2 mb-2">
					<span>© 2025 Emil Bobic</span>
					<span>•</span>
					<span className="flex items-center gap-1">
						Made with ❤️ and a whole lot of ☕
					</span>
				</div>

			</footer>
		</div>
	)
}
