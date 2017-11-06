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
      <Element className="c-site-branding__title">
        <a href={titleUrl} rel="home">
          {titleText}
        </a>
      </Element>
    );
  }

  render() {
    const { description } = this.props.dataAttrs;
		return (
      <div className="c-site-branding">
        <div className="c-site-branding__text wrap">
          {this.renderTitle()}
          <p className="c-site-branding__description">
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
