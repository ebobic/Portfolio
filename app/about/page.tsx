'use client'

import { About } from '@/components/about'

export default function AboutPage() {
	return (
		<div className="min-h-screen w-full bg-[#f8fafc] dark:bg-black relative">
			{/* Light Mode Fade Grid Background */}
			<div
				className="absolute inset-0 z-0 dark:hidden"
				style={{
					backgroundImage: `
						linear-gradient(to right, #e2e8f0 1px, transparent 1px),
						linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
					`,
					backgroundSize: "20px 30px",
					WebkitMaskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
					maskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
				}}
			/>
			
			{/* Dark Mode Fade Grid Background */}
			<div
				className="absolute inset-0 z-0 hidden dark:block opacity-60"
				style={{
					backgroundImage: `
						linear-gradient(to right, #1f2937 1px, transparent 1px),
						linear-gradient(to bottom, #1f2937 1px, transparent 1px)
					`,
					backgroundSize: "20px 30px",
					WebkitMaskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
					maskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
				}}
			/>
			
			{/* Dark Mode White Radial Light Under Navbar */}
			<div
				className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 hidden dark:block"
				style={{
					width: '800px',
					height: '400px',
					background: 'radial-gradient(ellipse 800px 400px at center top, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 60%)',
					pointerEvents: 'none',
				}}
			/>
			
			{/* Content */}
			<div className="relative z-10">
				<div className="max-w-6xl mx-auto bg-transparent">
					{/* About Section */}
					<section className="min-h-screen flex items-center justify-center relative pt-20">
						<About />
					</section>
				</div>
			</div>
		</div>
	)
}
