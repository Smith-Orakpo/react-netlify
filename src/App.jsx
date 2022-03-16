import React from 'react'
import AppStyles from './App.styles'

const App = () => {
	const message = 'welcome to the website'
	return (
		<React.Fragment>
			<AppStyles />
			<h1>{message}</h1>
		</React.Fragment>
	)
}

export default App
