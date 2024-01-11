import React from 'react'

export function useRange(
	num: number,
	inputRange: [number, number],
	outputRange: [number, number]
) {
	const mappedValue = React.useMemo(() => {
		const [inMin, inMax] = inputRange
		const [outMin, outMax] = outputRange

		const newValue =
			((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
		const largest = Math.max(outMin, outMax)
		const smallest = Math.min(outMin, outMax)

		return Math.min(Math.max(newValue, smallest), largest)
	}, [inputRange, num, outputRange])

	return mappedValue
}

type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽'

type TrueTable = {
	'👊🏻': '✌🏽'
	'🖐🏾': '👊🏻'
	'✌🏽': '🖐🏾'
}

type WhoWins<
	O extends RockPaperScissors,
	P extends RockPaperScissors,
> = P extends O ? 'draw' : O extends TrueTable[P] ? 'win' : 'lose'

const TrueTable = {
	'👊🏻': '✌🏽',
	'🖐🏾': '👊🏻',
	'✌🏽': '🖐🏾',
}

type Result = 'draw' | 'win' | 'lose'

function whoWins<O extends RockPaperScissors, P extends RockPaperScissors>(
	o: O,
	p: P
) {
	if ((o as RockPaperScissors) === (p as RockPaperScissors)) {
		return 'draw' as WhoWins<O, P>
	}

	if (TrueTable[p] === o) {
		return 'win' as WhoWins<O, P>
	} else {
		return 'lose' as WhoWins<O, P>
	}
}

whoWins('✌🏽', '👊🏻')
