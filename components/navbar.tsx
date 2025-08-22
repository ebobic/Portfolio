'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
	const [mounted, setMounted] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

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

	if (!mounted) {
		return (
			<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-sm border border-neutral-200/30 rounded-3xl shadow-xl shadow-black/10 px-4 py-2">
				<div className="flex items-center gap-6">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-6">
						<div className="text-lg text-black font-medium px-3 py-1">About</div>
						<div className="w-px h-5 bg-neutral-400/60"></div>
						<div className="text-lg text-black font-medium px-3 py-1">Projects</div>
						<div className="w-px h-5 bg-neutral-400/60"></div>
						<div className="text-lg text-black font-medium px-3 py-1">Contact</div>
						<div className="w-px h-5 bg-neutral-400/60"></div>
						<div className="text-black p-1 rounded-lg">
							<Moon className="h-4 w-4" fill="currentColor" />
						</div>
					</div>
					
					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center gap-4">
						<div className="text-black p-2 rounded-lg">
							<Moon className="h-5 w-5" fill="currentColor" />
						</div>
						<div className="w-px h-6 bg-neutral-400/60"></div>
						<div className="text-black p-2 rounded-lg">
							<Menu className="h-5 w-5" />
						</div>
					</div>
				</div>
			</nav>
		)
	}

	// Enhanced styling with semi-transparent backgrounds and modern effects
	const navbarBgClass = theme === 'dark' ? 'bg-black/95' : 'bg-white/95'
	const textColorClass = theme === 'dark' ? 'text-white' : 'text-black'
	const borderColorClass = theme === 'dark' ? 'border-neutral-700/30' : 'border-neutral-200/30'
	const hoverBgClass = theme === 'dark' ? 'hover:bg-neutral-800/80' : 'hover:bg-neutral-100/80'
	const shadowClass = theme === 'dark' ? 'shadow-xl shadow-black/20' : 'shadow-xl shadow-black/10'

	return (
		<nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} rounded-3xl ${shadowClass} px-4 py-2`}>
			<div className="flex items-center gap-6">
				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-6">
					<button onClick={() => scrollToSection('about')} className={`text-lg ${textColorClass} font-medium hover:opacity-80 hover:${textColorClass} hover:scale-110 cursor-pointer transition-all duration-300 px-3 py-1 relative group ${hoverBgClass} rounded-xl`}>
						<span className="relative">
							About
							<span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
						</span>
					</button>
					<div className="w-px h-5 bg-neutral-400/60"></div>
					<Link href="/projects" className={`text-lg ${textColorClass} font-medium hover:opacity-80 hover:${textColorClass} hover:scale-110 cursor-pointer transition-all duration-300 px-3 py-1 relative group ${hoverBgClass} rounded-xl`}>
						<span className="relative">
							Projects
							<span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
						</span>
					</Link>
					<div className="w-px h-5 bg-neutral-400/60"></div>
					<button onClick={() => scrollToSection('contact')} className={`text-lg ${textColorClass} font-medium hover:opacity-80 hover:${textColorClass} hover:scale-110 cursor-pointer transition-all duration-300 px-3 py-1 relative group ${hoverBgClass} rounded-xl`}>
						<span className="relative">
							Contact
							<span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
						</span>
					</button>
					
					<div className="w-px h-5 bg-neutral-400/60"></div>
					{/* Theme Toggle */}
					<button 
						onClick={toggleTheme} 
						className={`${textColorClass} font-medium hover:${textColorClass} transition-all duration-300 p-1 rounded-xl ${hoverBgClass} hover:scale-110`}
					>
						{theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" fill="currentColor" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex items-center gap-4">
					{/* Mobile Theme Toggle */}
					<button 
						onClick={toggleTheme} 
						className={`${textColorClass} font-medium hover:${textColorClass} transition-all duration-300 p-2 rounded-xl ${hoverBgClass} hover:scale-110`}
					>
						{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" fill="currentColor" />}
					</button>
					
					<div className="w-px h-6 bg-neutral-400/60"></div>
					
					{/* Mobile Menu Button */}
					<button 
						onClick={() => setIsMenuOpen(!isMenuOpen)} 
						className={`${textColorClass} font-medium p-2 ${hoverBgClass} rounded-xl transition-all duration-300 hover:scale-110`}
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className={`md:hidden absolute top-full left-0 right-0 mt-3 ${navbarBgClass} backdrop-blur-sm border ${borderColorClass} rounded-3xl ${shadowClass} p-4 min-w-[200px]`}>
					<div className="space-y-2">
						<button 
							onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
							className={`block w-full text-left py-3 px-4 text-lg ${textColorClass} font-medium ${hoverBgClass} hover:${textColorClass} cursor-pointer transition-all duration-300 rounded-xl hover:scale-105`}
						>
							About
						</button>
						<Link 
							href="/projects"
							onClick={() => setIsMenuOpen(false)}
							className={`block w-full text-left py-3 px-4 text-lg ${textColorClass} font-medium ${hoverBgClass} hover:${textColorClass} cursor-pointer transition-all duration-300 rounded-xl hover:scale-105`}
						>
							Projects
						</Link>
						<button 
							onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
							className={`block w-full text-left py-3 px-4 text-lg ${textColorClass} font-medium ${hoverBgClass} hover:${textColorClass} cursor-pointer transition-all duration-300 rounded-xl hover:scale-105`}
						>
							Contact
						</button>
					</div>
				</div>
			)}
		</nav>
	)
}