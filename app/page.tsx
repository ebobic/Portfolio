'use client'
import { useState } from 'react'
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
				{activeSection === 'hero' && <Hero />}
				{activeSection === 'projects' && <Repos />}
				{activeSection === 'about' && <About />}
				{activeSection === 'contact' && <Contact />}
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
