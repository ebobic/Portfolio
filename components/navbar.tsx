'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar({ 
	activeSection, 
	setActiveSection 
}: { 
	activeSection: string
	setActiveSection: (section: string) => void 
}) {
	const { theme, setTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	 return (
		<nav className="sticky top-0 z-50 w-full bg-white dark:bg-[#1a1a2e]">
			<div className="flex max-w-5xl items-center justify-between px-4 md:px-8 py-3 ml-auto mr-auto">
				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					<button onClick={() => setActiveSection('hero')} className="text-[1.25rem] text-neutral-300 hover:opacity-80 px-8 py-5">Home</button>
					<button onClick={() => setActiveSection('about')} className="text-[1.25rem] text-neutral-300 hover:opacity-80 px-8 py-5">About</button>
					<button onClick={() => setActiveSection('projects')} className="text-[1.25rem] text-neutral-300 hover:opacity-80 px-8 py-5">Works</button>
					<button onClick={() => setActiveSection('contact')} className="text-[1.25rem] text-neutral-300 hover:opacity-80 px-8 py-5">Contact</button>
				</div>

				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)} 
					className="md:hidden text-neutral-300 p-2"
				>
					{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>

				{/* Right side - Email and Theme Toggle */}
				<div className="flex items-center gap-4">
					<div className="hidden sm:block rounded-full border border-neutral-600 px-4 md:px-6 py-2 md:py-3">
						<span className="text-sm md:text-[1.25rem] text-neutral-300">ebobic95@gmail.com</span>
					</div>
					<button onClick={toggle} aria-label="Toggle theme" className="rounded-md p-3 hover:bg-neutral-100 dark:hover:bg-neutral-900">
						<Sun className="h-6 w-6 dark:hidden" />
						<Moon className="hidden h-6 w-6 dark:block" />
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white dark:bg-[#1a1a2e] border-t border-neutral-200 dark:border-neutral-700">
					<div className="px-4 py-2 space-y-2">
						<button 
							onClick={() => { setActiveSection('hero'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
						>
							Home
						</button>
						<button 
							onClick={() => { setActiveSection('about'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
						>
							About
						</button>
						<button 
							onClick={() => { setActiveSection('projects'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
						>
							Works
						</button>
						<button 
							onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} 
							className="block w-full text-left py-3 px-4 text-lg text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
						>
							Contact
						</button>
						<div className="px-4 py-2">
							<span className="text-sm text-neutral-300">ebobic95@gmail.com</span>
						</div>
					</div>
				</div>
			)}
		</nav>
	 )
	}
