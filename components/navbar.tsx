'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, House } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
	// State management for hydration, mobile menu, and theme
	const [mounted, setMounted] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	// Smooth scroll to section with navbar offset
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			const navbarHeight = 80 // Approximate navbar height
			const sectionTop = section.offsetTop - navbarHeight
			window.scrollTo({
				top: sectionTop,
				behavior: 'smooth'
			})
		}
	}

	// Close mobile menu on Escape key
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsMenuOpen(false)
		}
	}

	if (!mounted) {
		return (
			<nav 
				className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm border border-neutral-200/30 rounded-3xl shadow-xl shadow-black/10 px-4 py-2"
				role="navigation"
				aria-label="Main navigation"
			>
				<div className="flex items-center gap-6">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-6">
						<div className="text-lg text-black font-medium px-3 py-1">About</div>
						<div className="w-px h-5 bg-neutral-400/60" aria-hidden="true"></div>
						<div className="text-lg text-black font-medium px-3 py-1">Projects</div>
						<div className="w-px h-5 bg-neutral-400/60" aria-hidden="true"></div>
						<div className="text-black p-2 rounded-lg">
							<Menu className="h-5 w-5" aria-hidden="true" />
						</div>
					</div>
				</div>
			</nav>
		)
	}

	// Dynamic styling based on theme
	const navbarBgClass = theme === 'dark' ? 'bg-black/95' : 'bg-white/95'
	const textColorClass = theme === 'dark' ? 'text-white' : 'text-black'
	const borderColorClass = theme === 'dark' ? 'border-neutral-700/30' : 'border-neutral-200/30'
	const shadowClass = theme === 'dark' ? 'shadow-xl shadow-black/20' : 'shadow-xl shadow-black/10'

	return (
		<>
			{/* Desktop Navigation */}
			<nav 
				className={`hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} rounded-3xl ${shadowClass} px-4 py-2`}
				role="navigation"
				aria-label="Main navigation"
			>
				<div className="flex items-center gap-6">
					<Link 
						href="/" 
						className={`${textColorClass} font-medium hover:${textColorClass} transition-all duration-300 p-1 rounded-xl ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
						aria-label="Go to home page"
					>
						<House className="h-4 w-4" fill="currentColor" aria-hidden="true" />
					</Link>
					<div className="w-px h-5 bg-neutral-400/60" aria-hidden="true"></div>
					<Link 
						href="/about" 
						className={`${textColorClass} font-medium hover:${textColorClass} transition-all duration-300 px-3 py-1 rounded-xl ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
					>
						About
					</Link>
					<div className="w-px h-5 bg-neutral-400/60" aria-hidden="true"></div>
					<Link 
						href="/projects" 
						className={`${textColorClass} font-medium hover:${textColorClass} transition-all duration-300 px-3 py-1 rounded-xl ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
					>
						Projects
					</Link>
					<div className="w-px h-5 bg-neutral-400/60" aria-hidden="true"></div>
					<button 
						onClick={toggleTheme} 
						className={`${textColorClass} font-medium transition-all duration-300 p-1 rounded-xl ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
						aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
					>
						{theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" fill="currentColor" aria-hidden="true" />}
					</button>
				</div>
			</nav>

			{/* Mobile Hamburger Menu - Top Left */}
			<button 
				onClick={() => setIsMenuOpen(!isMenuOpen)} 
				className={`md:hidden fixed top-6 left-6 z-50 ${textColorClass} font-medium p-3 rounded-xl transition-all duration-300 ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'} ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} ${shadowClass}`}
				style={{
					backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'
				}}
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
			>
				{isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
			</button>

			{/* Mobile Theme Toggle - Top Right */}
			<button 
				onClick={toggleTheme} 
				className={`md:hidden fixed top-6 right-6 z-50 ${textColorClass} font-medium p-3 rounded-xl transition-all duration-300 ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'} ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} ${shadowClass}`}
				style={{
					backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'
				}}
				aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
			>
				{theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" fill="currentColor" aria-hidden="true" />}
			</button>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div 
					id="mobile-menu"
					className={`md:hidden fixed top-20 left-6 z-50 ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} rounded-3xl ${shadowClass} p-4 min-w-[200px]`}
					role="menu"
					aria-label="Mobile navigation menu"
					onKeyDown={handleKeyDown}
				>
					<div className="space-y-2">
						<button 
							onClick={() => {
								scrollToSection('hero')
								setIsMenuOpen(false)
							}}
							className={`block w-full text-left py-3 px-4 text-lg ${textColorClass} font-medium ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'} hover:${textColorClass} cursor-pointer transition-all duration-300 rounded-xl hover:scale-105`}
							role="menuitem"
						>
							Home
						</button>
						<Link 
							href="/projects"
							onClick={() => setIsMenuOpen(false)}
							className={`block w-full text-left py-3 px-4 text-lg ${textColorClass} font-medium ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'} hover:${textColorClass} cursor-pointer transition-all duration-300 rounded-xl hover:scale-105`}
							role="menuitem"
						>
							Projects
						</Link>
					</div>
				</div>
			)}
		</>
	)
}