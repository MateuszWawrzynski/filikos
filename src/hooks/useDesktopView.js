/*
	This hook returns 'true' if application should be rendered in desktop mode
	or 'false' if still in mobile mode. 
*/

import { useState, useEffect } from 'react'

export default function useDesktopView(){
	let [ width, setWidth ] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return width >= 1200
}