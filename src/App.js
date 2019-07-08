import React, { Fragment, Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* default props set in Navbar component can overwrite below */}
				<Navbar />
				<div className='container'>
					<Users />
				</div>
			</Fragment>
		)
	}
}

export default App
