import { useState, useEffect } from 'react'

const usePageColorChange = () => {
	const [color, setColor] = useState('')

	const colors = [
		'red',
		'blue',
		'yellow',
		'orange',
		'pink',
		'purple',
		'indigo',
	]

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])

		return () => null
	}, [color])

	return [color]
}

export default usePageColorChange
