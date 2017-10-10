import React from 'react';
import Img from '../../../components/atoms/Img';
import LogoImg from './images/logo-easingthemes.png';
import './styles.scss';

const Logo = () => (
	<div className="c-logo">
		<button
			type="button"
      className="c-logo__button"
		>
			<i className="c-logo__icon"></i>
		</button>
		<a href="/" className="c-logo__link">
			<Img
        src={LogoImg}
        alt="Dragan Filipovic - Logo"
        className="c-logo__image"
      />
			<span className="c-logo__text">Dragan Filipovic</span>
		</a>
	</div>
);

export default Logo;
