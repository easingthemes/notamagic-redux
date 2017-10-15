import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './styles.css';

class Navbar extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			pluginsInit: false
		};
	}

	render () {
		let navBg = '';
		if (this.props.path !== '/') {
			navBg = 'standard';
		} else {
			navBg = 'transparent';
		}

		return (
			<nav className={`c-navbar c-navbar--${navBg}`}>
				<div className="container-fluid">
					<Logo />
					<Navigation />
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	path: PropTypes.string
};

export default Navbar;
