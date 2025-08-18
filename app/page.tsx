import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Repos } from '@/components/repos'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Repos />
			<About />
			<Contact />
			<footer className="py-10 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Emil Bobic</footer>
		</main>
	)
}
