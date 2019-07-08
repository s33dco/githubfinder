import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
		</nav>
	)
}

// default props :
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
}

// type checking for props
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

export default Navbar

// refactored from class based to stateless functional component,
// defaultProps and propTypes declared outside function
// props desctructuring const Navbar = ({ icon, title }) => {
//
