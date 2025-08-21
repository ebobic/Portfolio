'use client'

export default function ProjectsPage() {
	return (
		<div className="min-h-screen w-full bg-[#f8fafc] relative">
			{/* Top Fade Grid Background */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `
						linear-gradient(to right, #e2e8f0 1px, transparent 1px),
						linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
					`,
					backgroundSize: "20px 30px",
					WebkitMaskImage:
						"linear-gradient(to bottom, #000 0%, transparent 30%)",
					maskImage:
						"linear-gradient(to bottom, #000 0%, transparent 30%)",
				}}
			/>
			
			{/* Your Content/Components */}
			<div className="relative z-10">
				<div className="max-w-6xl mx-auto bg-transparent">
					{/* Projects Section */}
					<section className="min-h-[70vh] flex items-center justify-center relative pt-20">
						<div className="mx-auto max-w-2xl px-4 md:px-8">
							<div className="bg-white/90 backdrop-blur-2xl border border-neutral-300/30 rounded-2xl shadow-2xl shadow-black/10 px-6 py-8">
								<h1 className="mb-4 text-center text-3xl md:text-4xl font-bold text-black">Projects</h1>
								<p className="mx-auto mb-8 max-w-2xl text-center text-black">
									Coming soon! I'm working on some exciting projects that I'll be sharing here.
								</p>
								<div className="text-center">
									<a
										href="/"
										className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl"
									>
										Back to Home
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
