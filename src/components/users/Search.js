import React, { useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

// bring in context

const Search = ({ setAlert }) => {
	// initialize context
	const githubContext = useContext(GithubContext)

	const [text, setText] = useState('')

	const onSubmit = e => {
		e.preventDefault()
		if (text === '') {
			setAlert('Please enter something', 'light')
		} else {
			// use context
			githubContext.searchUsers(text)
			setText('')
		}
	}

	const onChange = e => {
		setText(e.target.value)
	} // use bracket notation to get 'text' handy for multi use

	return (
		<Fragment>
			<form onSubmit={onSubmit} className='form'>
				{/* controlled input with onChange event, component level state */}
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{githubContext.users.length > 0 && (
				<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</Fragment>
	)
}

// as no longer class proptypes moved out..

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
}

export default Search
