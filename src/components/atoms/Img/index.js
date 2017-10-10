import React from 'react';
import PropTypes from 'prop-types';

const Img = (props) => {
  const { src, alt, className } = props;

	return (
    <img { ...props} className={className} src={src} alt={alt} />
  );
};

Img.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Img;
