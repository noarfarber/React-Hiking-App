// import React, {Component} from 'react'
import './App.css';
import SearchBar from './components/searchBar'
import fakeTrails from './FakeJson';

const App = () => {
	return (
		<div className="App">
			<h1>OH, THE PLACES YOU'LL GO</h1>
			<SearchBar />
			<ul>
				{fakeTrails.map((trail) => (
					<li key={trail.trailName}>{trail.trailName}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
