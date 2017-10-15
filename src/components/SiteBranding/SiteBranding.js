import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @class SiteBranding
 */
export class SiteBranding extends Component {
  constructor(props) {
 		super(props);
 		this.state = {
 			isLoading: true
 		};
 	}

  componentDidMount () {

	}

	render() {
		return (
			<div className='c-SiteBranding'>
				<h1>SiteBranding</h1>
			</div>
		);
	}
}

SiteBranding.propTypes = {
	str: PropTypes.string,
	oneof: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

SiteBranding.defaultProps = {
	str: 'string',
	oneof: 0
};

export default SiteBranding;
