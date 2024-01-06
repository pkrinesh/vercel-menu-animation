import React from 'react'
import { motion } from 'framer-motion'

export function LayoutAnimationDemo() {
	const position = ['start', 'center', 'end']
	const [positionIndex, setPositionIndex] = React.useState(0)
	return (
		<div className={`w-full flex bg-red-200 `}>
			<div className={`flex items-center flex-1 justify-${position[positionIndex]}`}>
				<motion.div layout className="w-5 h-5 bg-red-600" />
			</div>
			<button
				className="px-4 py-2 bg-red-600"
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
