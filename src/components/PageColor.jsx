import React from 'react'
import usePageColorChange from '../hooks/usePageColorChange'
import { Page } from '../styles/PageColor.styles'

function PageColor() {
	const [color] = usePageColorChange()

	return <Page color={color}>page color change</Page>
}

export default PageColor
