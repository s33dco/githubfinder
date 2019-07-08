import React, { Fragment, Component } from 'react'
import Navbar from './components/layout/Navbar'
import './App.css'

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* default props set in Navbar component can overwrite below */}
				<Navbar />
			</Fragment>
		)
	}
}

export default App
