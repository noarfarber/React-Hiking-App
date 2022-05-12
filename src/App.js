import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import TrailRow from './components/trailRow';

const App = () => {
	return (
		<div className="App">
			<h1>OH, THE PLACES YOU'LL GO</h1>
			<SearchBar />
			<TrailRow />
		</div>
	);
}

export default App;
