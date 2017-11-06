import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @class Logo
 */
export class Logo extends Component {
  constructor(props) {
 		super(props);
 		this.state = {
 			isLoading: true
 		};
 	}

  componentDidMount () {

	}

	render() {
    const { url, src, alt, title } = this.props.dataAttrs;
		return (
			<div className='c-logo'>
        <div className="wrap">
          <a href={url} title={alt} className="c-logo__link" rel="home" itemProp="url">
            <img src={src} alt={alt} className="c-logo__image" itemProp="logo" sizes="100vw" />
            <span className="c-logo__label">{title}</span>
          </a>
        </div>
			</div>
		);
	}
}

Logo.propTypes = {
  dataAttrs: PropTypes.object
};

Logo.defaultProps = {
  dataAttrs: {}
};

export default Logo;
