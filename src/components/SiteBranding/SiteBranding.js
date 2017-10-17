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
  renderTitle() {
    const { titleUrl, titleText, is_front_page } = this.props.dataAttrs;
    const Element = is_front_page ? 'h1' : 'p';

    return (
      <Element className="site-title">
        <a href={titleUrl} rel="home">
          {titleText}
        </a>
      </Element>
    );
  }

  render() {
    const { description } = this.props.dataAttrs;
		return (
      <div className="wrap">
        <div className="site-branding-text">
          {this.renderTitle()}
          <p className="site-description">
            {description}
          </p>
        </div>
      </div>
		);
	}
}

SiteBranding.propTypes = {
  dataAttrs: PropTypes.object
};

SiteBranding.defaultProps = {
  dataAttrs: {}
};

export default SiteBranding;
