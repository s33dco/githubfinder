import React, { useState, useContext, Fragment } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
// bring in context

const Search = () => {
	// initialize context
	const githubContext = useContext(GithubContext)
	const alertContext = useContext(AlertContext)

	const [text, setText] = useState('')

	const onSubmit = e => {
		e.preventDefault()
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light')
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

export default Search
