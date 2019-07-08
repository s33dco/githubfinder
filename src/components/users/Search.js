import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
	state = {
		text: ''
	}

	static propTypes = {
		searchUsers: PropTypes.func.isRequired
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.searchUsers(this.state.text) // pass up to App as arguement to function
		this.setState({ text: '' }) // reset from field
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value }) // use bracket notation to get 'text' handy for multi use

	render() {
		return (
			<form onSubmit={this.onSubmit} className='form'>
				{/* controlled input with onChange event, component level state */}
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={this.state.text}
					onChange={this.onChange}
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
		)
	}
}

export default Search
