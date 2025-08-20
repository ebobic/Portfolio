'use client'
import { useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Repos } from '@/components/repos'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
				}
			})
		}, observerOptions)

		const sections = document.querySelectorAll('.section-fade-in')
		sections.forEach((section) => {
			observer.observe(section)
		})

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section)
			})
		}
	}, [])

	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="flex flex-col">
				{/* Hero Section */}
				<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-fade-in visible">
					<Hero />
				</section>

				{/* About Section */}
				<section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden section-fade-in">
					<About />
				</section>

				{/* Projects Section */}
				<section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden section-fade-in">
					<Repos />
				</section>

				{/* Contact Section */}
				<section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden section-fade-in">
					<Contact />
				</section>
			</main>
			<footer className="py-16 text-center text-sm text-black dark:text-neutral-500">
				<div className="flex items-center justify-center gap-2 mb-2">
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
