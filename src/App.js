import React, { Fragment, Component } from 'react'
import './App.css'

class App extends Component {
	// method as part of class
	baz = () => 'Baz'

	render() {
		const name = 'A Variable'
		const foo = () => 'Bar'
		const loading = false
		const showName = false

		return (
			<Fragment>
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<div>
						<h1>Hello {showName && name}</h1>
						<h2>Use a fragment instead of parent div of jsx</h2>
						<h3>from a function {foo()}</h3>
						<h3>from a class method {this.baz()}</h3>
					</div>
				)}
			</Fragment>
		)
	}
}

export default App
