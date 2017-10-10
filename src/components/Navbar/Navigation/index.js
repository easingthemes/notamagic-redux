import React from 'react';

import './styles.scss';

const Navigation = () => (
	<div className="navbar-collapse collapse navbar-main-collapse">
		<ul className="nav navbar-nav">

			<li>
				<a href="/">
					Home
				</a>
			</li>

			<li className="dropdown">
				<a
					href="/portfolio"
					className="dropdown-toggle color-light"
					data-toggle="dropdown"
				>
					Portfolio
				</a>
				<ul className="dropdown-menu" role="menu">
					<li>
						<a
							href="/portfolio.pdf"
							download="Dragan-Filipovic_FrontendDeveloper.pdf"
						>
							PDF download
						</a>
					</li>
					<li>
						<a
							href="/portfolio"
						>
							Web version
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a
					href="/blog"
					className="color-light"
				>
					Blog
				</a>
			</li>
			<li>
				<a
					href="/contact"
					className="color-light"
				>
					Contact
				</a>
			</li>

		</ul>
	</div>
);

export default Navigation;
