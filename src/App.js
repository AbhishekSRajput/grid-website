import React from 'react';

//import GridPlayground from './playground/grid-playground';
//import ChallengePlayground from './playground/Challenge.playground';
//import ImplicitVsExplicit from './playground/implicitvsexplicit';
//import MinMaxFunction from './playground/minmax-playground';

//style
import './App.scss';

const App = () => {
	return (
		<div className="app-container">
			<div className="sidebar">sidebar</div>
			<header className="header">header</header>
			<div className="realtors">top 3 realtors</div>
			<section className="features">features</section>
			<div className="story__pictures">story Pictures</div>
			<div className="story__content">story Content</div>
			<section className="homes">homes</section>
			<section className="gallery">gallery</section>
			<footer className="footer">footer</footer>
		</div>
	);
};

export default App;
