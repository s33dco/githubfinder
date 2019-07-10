import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

const App = () => {
	const [users, setUsers] = useState([])
	const [user, setUser] = useState({})
	const [repos, setRepos] = useState([])
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(null)

	// state = {
	// 	users: [],
	// 	user: {},
	// 	repos: [],
	// 	loading: false,
	// 	alert: null
	// }

	const searchUsers = async text => {
		// this.setState({ loading: true })
		setLoading(true)
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		// this.setState({ users: res.data.items, loading: false })
		setUsers(res.data.items)
		setLoading(false)
	}

	const getUser = async username => {
		// this.setState({ loading: true })
		setLoading(true)

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		// this.setState({ user: res.data, loading: false })
		setUser(res.data)
		setLoading(false)
	}

	const getUserRepos = async username => {
		// this.setState({ loading: true })
		setLoading(true)

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		// this.setState({ repos: res.data, loading: false })
		setRepos(res.data)
		setLoading(false)
	}

	const clearUsers = () => {
		// this.setState({ users: [], loading: false })
		setUsers([])
		setLoading(false)
	}

	const showAlert = (msg, type) => {
		// this.setState({ alert: { msg, type } })
		setAlert({ msg, type })
		setTimeout(() => setAlert(null), 5000)
	}

	return (
		<Router>
			<Fragment>
				{/* default props set in Navbar component can overwrite below */}
				<Navbar />
				<div className='container'>
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={props => (
								<Fragment>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										setAlert={showAlert}
										showClear={users.length > 0 ? true : false}
									/>
									<Users loading={loading} users={users} />
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={props => (
								<User
									{...props}
									getUser={getUser}
									getUserRepos={getUserRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</Fragment>
		</Router>
	)
}

export default App
