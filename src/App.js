import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import trails from './FakeJson';

const App = () => {
	return (
		<div className="App">
			<h1>OH, THE PLACES YOU'LL GO</h1>
			<SearchBar />
			<ul>
				{trails.map((trail) => (
					<li key={trail.id}>{trail.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
