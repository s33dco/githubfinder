import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

// refactor to funtional component with useStatee hook

const Search = ({ searchUsers, clearUsers, setAlert, showClear }) => {
	// can't use state so destructure useState to
	// [state name, function] = useState('initial value')
	const [text, setText] = useState('')

	// now function rather than class functions declared with const

	const onSubmit = e => {
		e.preventDefault()
		if (text === '') {
			setAlert('Please enter something', 'light')
		} else {
			searchUsers(text) // pass up to App as arguement to function
			setText('') // reset from field
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
			{showClear && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			)}
		</Fragment>
	)
}

// as no longer class proptypes moved out..

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
}

export default Search
