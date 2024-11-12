import React from 'react';
import Row from '../Components/Row/Row';
import Banner from '../Components/Banner/Banner';
import Nav from '../Components/Nav/Nav';
import request from '../requests';
import './style/App.css';

function App() {
	return (
		<div className='app'>
			{/* Navigation bar */}
			<Nav />
			{/* Banner section */}
			<Banner />
			{/* Rows of movies */}
			<Row
				title='Fakeflix Originals'
				fetchUrl={request.fetchNetflixOriginals}
				isLargeRow={true}></Row>
			<Row
				title='Trending Now'
				fetchUrl={request.fetchTrending}></Row>
			<Row
				title='Top Rated'
				fetchUrl={request.fetchTopRated}></Row>
			<Row
				title='Action'
				fetchUrl={request.fetchActionMovies}></Row>
			<Row
				title='Comedy'
				fetchUrl={request.fetchComedyMovies}></Row>
			<Row
				title='Documentaries'
				fetchUrl={request.fetchDocumentaries}></Row>
			<Row
				title='Horror'
				fetchUrl={request.fetchHorrorMovies}></Row>
			<Row
				title='Romance'
				fetchUrl={request.fetchRomanceMovies}></Row>
		</div>
	);
}

export default App;
