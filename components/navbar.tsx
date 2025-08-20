'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
	const { theme, setTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			const offsetTop = element.offsetTop - 20 // Small offset for better positioning
			
			// Use smooth scrolling with custom easing
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			})
		}
	}

	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 dark:bg-[#1a1a2e]/30 backdrop-blur-2xl border border-white/10 dark:border-neutral-800/10 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 px-6 py-3">
			<div className="flex items-center gap-8">
				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					<button onClick={() => scrollToSection('hero')} className="text-[1.25rem] text-black dark:text-neutral-300 hover:opacity-80 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 cursor-pointer transition-all duration-200 px-4 py-2 relative group">
						<span className="relative">
							Home
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-300 transition-all duration-200 group-hover:w-full"></span>
						</span>
					</button>
					<button onClick={() => scrollToSection('about')} className="text-[1.25rem] text-black dark:text-neutral-300 hover:opacity-80 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 cursor-pointer transition-all duration-200 px-4 py-2 relative group">
						<span className="relative">
							About
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-300 transition-all duration-200 group-hover:w-full"></span>
						</span>
					</button>
					<button onClick={() => scrollToSection('projects')} className="text-[1.25rem] text-black dark:text-neutral-300 hover:opacity-80 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 cursor-pointer transition-all duration-200 px-4 py-2 relative group">
						<span className="relative">
							Projects
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-300 transition-all duration-200 group-hover:w-full"></span>
						</span>
					</button>
					<button onClick={() => scrollToSection('contact')} className="text-[1.25rem] text-black dark:text-neutral-300 hover:opacity-80 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 cursor-pointer transition-all duration-200 px-4 py-2 relative group">
						<span className="relative">
							Contact
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-300 transition-all duration-200 group-hover:w-full"></span>
						</span>
					</button>
				</div>

				{/* Divider */}
				<div className="hidden md:block w-px h-6 bg-neutral-600/30"></div>

				{/* Theme Toggle */}
				<button onClick={toggle} aria-label="Toggle theme" className="rounded-md p-2 hover:bg-white/10 dark:hover:bg-neutral-900/10 backdrop-blur-xl shadow-lg">
					{theme === 'dark' ? (
						<Sun className="h-5 w-5" />
					) : (
						<Moon className="h-5 w-5" />
					)}
				</button>

				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)} 
					className="md:hidden text-black dark:text-neutral-300 p-2"
				>
					{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/40 dark:bg-[#1a1a2e]/40 backdrop-blur-2xl border border-white/10 dark:border-neutral-800/10 rounded-2xl shadow-lg p-4">
					<div className="space-y-2">
						<button 
							onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-black dark:text-neutral-300 hover:bg-white/10 dark:hover:bg-neutral-800/10 hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer transition-all duration-200 rounded-md"
						>
							Home
						</button>
						<button 
							onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-black dark:text-neutral-300 hover:bg-white/10 dark:hover:bg-neutral-800/10 hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer transition-all duration-200 rounded-md"
						>
							About
						</button>
						<button 
							onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-black dark:text-neutral-300 hover:bg-white/10 dark:hover:bg-neutral-800/10 hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer transition-all duration-200 rounded-md"
						>
							Projects
						</button>
						<button 
							onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-black dark:text-neutral-300 hover:bg-white/10 dark:hover:bg-neutral-800/10 hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer transition-all duration-200 rounded-md"
						>
							Contact
						</button>
					</div>
				</div>
			)}
		</nav>
	)
}
