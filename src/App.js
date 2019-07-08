import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	}

	// async componentDidMount() {
	// 	this.setState({ loading: true })
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${
	// 			process.env.REACT_APP_GITHUB_CLIENT_ID
	// 		}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	)
	// 	this.setState({ users: res.data, loading: false })
	// }

	// search Github users

	searchUsers = async text => {
		this.setState({ loading: true })
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		this.setState({ users: res.data.items, loading: false })
	}

	clearUsers = () => {
		this.setState({ users: [], loading: false })
	}

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } })
		setTimeout(() => this.setState({ alert: null }), 5000)
	}

	render() {
		const { users, loading } = this.state
		return (
			<Router>
				<Fragment>
					{/* default props set in Navbar component can overwrite below */}
					<Navbar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={props => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											setAlert={this.setAlert}
											showClear={users.length > 0 ? true : false}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		)
	}
}

export default App
