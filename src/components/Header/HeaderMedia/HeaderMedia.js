import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./styles.css";

class HeaderMedia extends Component {
  render() {
    const { rAttrs } = this.props.dataAttrs;

    if (!rAttrs) {
      return (<span />);
    }
    const dataAttrs = JSON.parse(rAttrs);
    const { url, width, height, alt } = dataAttrs;

    if (!url) {
      return (<span />);
    }

    return (
      <div id="wp-custom-header" className="wp-custom-header">
        <img
          src={url}
          width={width}
          height={height}
          alt={alt} />
      </div>
    );
  }
}

HeaderMedia.propTypes = {
  dataAttrs: PropTypes.object,
};

HeaderMedia.defaultProps = {
  dataAttrs: {},
};

export default HeaderMedia;
