import React, { useState, useEffect } from 'react';
import Fakeflix from '../../images/FakeflixLogo.png';
import './style/Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className='nav__logo'
				src={Fakeflix}
				alt='Netlfix Logo'
			/>
			<img
				className='nav__avatar'
				src='https://www.flaticon.com/svg/static/icons/svg/3382/3382655.svg'
				alt='Netlfix Logo'
			/>
		</div>
	);
}

export default Nav;
