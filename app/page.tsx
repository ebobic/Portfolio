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
		<main>
			<Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
			{activeSection === 'hero' && <Hero />}
			{activeSection === 'projects' && <Repos />}
			{activeSection === 'about' && <About />}
			{activeSection === 'contact' && <Contact />}
			<footer className="py-10 text-center text-sm text-neutral-500">© 2025 Emil Bobic</footer>
		</main>
	)
}
