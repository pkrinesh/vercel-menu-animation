import useWindowScroll from '@react-hook/window-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import reactLogo from './assets/react.svg'
import { useRange } from './hooks/use-range'
import viteLogo from '/vite.svg'
import clsx from 'clsx'

function App() {
	const y = useWindowScroll(60)
	const logoScale = useRange(y, 0, 50, 1, 0.8)

	return (
		<div className="font-sans">
			<header className="flex gap-4 bg-black px-6 py-4 ml-12 text-sm">
				<svg
					style={{
						transform: `scale(${logoScale})`,
					}}
					className="fixed left-6 top-4 z-10"
					aria-label="Vercel Logo"
					fill="white"
					viewBox="0 0 75 65"
					height="22"
				>
					<path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
				</svg>
				<ol className="flex gap-4">
					<li aria-hidden className="text-zinc-700">
						/
					</li>
					<li className="flex items-center gap-2">
						<a href="https://vitejs.dev" target="_blank" className="flex items-center gap-2">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
								<img src={viteLogo} className="h-5 w-5" alt="Vite logo" />
							</span>
							vite
						</a>
					</li>
					<li aria-hidden className="text-zinc-700">
						/
					</li>
					<li className="flex items-center gap-2">
						<a href="https://react.dev" target="_blank" className="flex items-center gap-2">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
								<img src={reactLogo} className="h-5 w-5" alt="React logo" />
							</span>
							react
						</a>
					</li>
				</ol>
			</header>

			<NavBar />

			<main className="mx-auto my-12 max-w-5xl rounded-md border border-zinc-800">
				<table className="w-full">
					<tbody>
						{[...Array(20)].map((_, i) => (
							<tr key={i} className="h-12 border-b border-zinc-800 bg-zinc-950">
								<td />
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</div>
	)
}

export default App

const tabs = [
	{ id: 'project', label: 'Project' },
	{ id: 'deployments', label: 'Deployments' },
	{ id: 'analytics', label: 'Analytics' },
	{ id: 'logs', label: 'Logs' },
	{ id: 'settings', label: 'Settings' },
]

function NavBar() {
	const y = useWindowScroll(60)
	const navbarTranslateX = useRange(y, 0, 50, 0, 42)

	const [active, setActive] = React.useState(tabs[0].id)
	const [hover, setHover] = React.useState<string | null>(null)

	return (
		<nav className="sticky top-0 flex border-b border-zinc-700 bg-zinc-900 text-sm">
			<ol
				style={{
					transform: `translateX(${navbarTranslateX}px)`,
				}}
				className="relative flex gap-1 px-3 py-4 text-zinc-400"
				onPointerLeave={() => {
					setHover(null)
				}}
			>
				{tabs.map((tab) => {
					return (
						<li key={tab.id} className="cursor-pointer">
							<a
								className={clsx(
									'relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2'
								)}
								onClick={(e) => {
									e.preventDefault()
									setActive(tab.id)
								}}
								onPointerEnter={() => {
									setHover(tab.id)
								}}
								onFocus={() => {
									setHover(tab.id)
								}}
							>
								{tab.label}
								{/* {active === tab.id && (
									<motion.span
										layoutId="bubble"
										className="absolute inset-0 z-10 bg-white mix-blend-difference"
										style={{ borderRadius: 9999 }}
										transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
									/>
								)} */}
								<AnimatePresence>
									{hover === tab.id ? (
										<motion.span
											className="absolute inset-0 z-10 bg-white/5 mix-blend-difference"
											style={{ borderRadius: 9999 }}
											transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
											initial={{
												opacity: hover === null ? 0 : 1,
											}}
											animate={{
												opacity: 1,
											}}
											exit={{
												opacity: 0,
											}}
											layoutId="hover-bubble"
										/>
									) : null}
								</AnimatePresence>
							</a>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
