import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(
				requests.fetchNetflixOriginals
			);
			setMovie(
				request.data.results[
					Math.floor(
						Math.random() * request.data.length - 1
					)
				]
			);
			// console.log(
			// 	request.data.results[
			// 		Math.floor(
			// 			Math.random() * request.data.length - 1
			// 		)
			// 	]
			// );
			return request;
		}
		fetchData();
	}, []);

	console.log(movie, 'movie');

	return (
		<header>
			<h1>Hi</h1>
		</header>
	);
}

export default Banner;
