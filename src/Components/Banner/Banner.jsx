import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './style/Banner.css';

function Banner() {
	const [movie, setMovie] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		// Fetch a random trending movie
		async function fetchData() {
			const request = await axios.get(
				requests.fetchTrending
			);
			setMovie(
				request.data.results[
					Math.floor(
						Math.random() * request.data.results.length - 1
					)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(
				movie?.title ||
					movie?.name ||
					movie?.original_name ||
					movie?.description ||
					movie?.original_title ||
					''
			)
				.then((url) => {
					const urlParams = new URLSearchParams(
						new URL(url).search
					);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
	};

	console.log(movie, 'movie');

	function truncate(str, n) {
		return str?.length > n
			? str.substr(0, n - 1) + '...'
			: str;
	}

	return (
		<>
			<header
				className='banner'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
					backgroundPosition: 'center center',
				}}>
				<div className='banner__contents'>
					{/* Movie title */}
					<h1 className='banner__title'>
						{movie?.title ||
							movie?.name ||
							movie?.original_name}
					</h1>
					{/* Banner buttons */}
					<div className='banner__buttons'>
						<button
							className='banner__button'
							onClick={() => handleClick(movie)}>
							Play
						</button>
						<button className='banner__button'>
							My List
						</button>
					</div>
					{/* Movie description */}
					<h1 className='banner__description'>
						{truncate(movie?.overview, 150)}
					</h1>
				</div>
				<div className='banner--fadeBottom'></div>
			</header>
			{trailerUrl && (
				<YouTube videoId={trailerUrl} opts={opts} />
			)}
		</>
	);
}

export default Banner;
