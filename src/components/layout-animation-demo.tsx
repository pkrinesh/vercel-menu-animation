import React from 'react'
import { motion } from 'framer-motion'

export function LayoutAnimationDemo() {
	const position = ['start', 'center', 'end']
	const [positionIndex, setPositionIndex] = React.useState(0)
	return (
		<div className={`flex w-full bg-red-200 `}>
			<div
				className={`flex flex-1 items-center justify-${position[positionIndex]}`}
			>
				<motion.div layout className="h-5 w-5 bg-red-600" />
			</div>
			<button
				className="bg-red-600 px-4 py-2"
				onClick={() => {
					if (positionIndex === position.length - 1) {
						setPositionIndex(0)
					} else {
						setPositionIndex((prev) => ++prev)
					}
				}}
			>
				Toggle
			</button>
		</div>
	)
}
