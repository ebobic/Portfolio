'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
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



	// Animation variants
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
		<div className="min-h-screen w-full bg-[#f8fafc] relative">
			{/* Grid Background - covers entire viewport */}
			<div
				className="fixed inset-0 z-0"
				style={{
					backgroundImage: `
						linear-gradient(to right, #e2e8f0 1px, transparent 1px),
						linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
					`,
					backgroundSize: "20px 30px",
					backgroundPosition: "0 0", // Start from very top
					WebkitMaskImage:
						"linear-gradient(to bottom, #000 0%, transparent 50%)",
					maskImage:
						"linear-gradient(to bottom, #000 0%, transparent 50%)",
				}}
			/>
			
			{/* Your Content/Components */}
			<div className="relative z-10">
				<Navbar />
				
				{/* Desktop Layout - Scrollable Sections */}
				<div className="hidden md:block max-w-6xl mx-auto bg-transparent">
					{/* Hero Section */}
					<section id="hero" className="min-h-screen flex items-center justify-center relative section-fade-in visible pt-10 md:pt-0 md:mt-10">
						<Hero />
					</section>

					{/* About Section */}
					<motion.section 
						id="about" 
						className="min-h-screen flex items-center justify-center relative section-fade-in py-2"
						variants={revealAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<About />
					</motion.section>

					{/* Contact Section */}
					<motion.section 
						id="contact" 
						className="min-h-screen flex items-center justify-center relative section-fade-in py-2"
						variants={revealAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<Contact />
					</motion.section>
				</div>

				{/* Mobile Layout - Scrollable Sections */}
				<div className="md:hidden max-w-6xl mx-auto bg-transparent">
					{/* Hero Section */}
					<section id="hero" className="min-h-screen flex items-center justify-center relative section-fade-in visible pt-20">
						<Hero />
					</section>

					{/* About Section */}
					<motion.section 
						id="about" 
						className="min-h-screen flex items-center justify-center relative section-fade-in -mt-20"
						variants={revealAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<About />
					</motion.section>

					{/* Contact Section */}
					<motion.section 
						id="contact" 
						className="min-h-screen flex items-center justify-center relative section-fade-in -mt-20"
						variants={revealAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<Contact />
					</motion.section>
				</div>
			</div>
		</div>
	)
}
