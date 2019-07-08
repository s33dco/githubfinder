import React, { Component } from 'react'

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login) // grab param from url :login
	}

	render() {
		// destructure this.props.user
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user

		const { loading } = this.props

		return <div>{name}</div>
	}
}

export default User
