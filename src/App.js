import React from 'react';
import Row from './Row';
import request from './requests';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Movies</h1>
			<Row
				title='Netflix Originals'
				fetchUrl={request.fetchNetflixOriginals}></Row>
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
