import React, { Component } from 'react'

export class Search extends Component {
	state = {
		text: ''
	}

	onSubmit = e => {
		e.preventDefault()
		console.log(this.state.text)
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
