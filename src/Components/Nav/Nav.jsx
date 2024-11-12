import React, { useState, useEffect } from 'react';
import Fakeflix from '../../images/FakeflixLogo.png';
import './style/Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);

	const logoImg = 'https://i.imgur.com/KJAlIKg.png';
	const avatarImg = 'https://i.imgur.com/Pnb938O.jpeg';

	useEffect(() => {
		// Add scroll event listener
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			// Remove scroll event listener
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			{/* Logo */}
			<img
				className='nav__logo'
				src={logoImg}
				alt='Netlfix Logo'
			/>
			{/* Avatar */}
			<img
				className='nav__avatar'
				src={avatarImg}
				alt='Netlfix Logo'
			/>
		</div>
	);
}

export default Nav;
