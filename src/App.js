import React from 'react';

//import GridPlayground from './playground/grid-playground';
//import ChallengePlayground from './playground/Challenge.playground';
//import ImplicitVsExplicit from './playground/implicitvsexplicit';
//import MinMaxFunction from './playground/minmax-playground';

//images
import { ReactComponent as Global } from './img/map.svg';
import { ReactComponent as Location } from './img/location-pin.svg';
import { ReactComponent as Star } from './img/star.svg';
import { ReactComponent as Key } from './img/key.svg';
import { ReactComponent as Chat } from './img/chat.svg';
import { ReactComponent as Bookmark } from './img/bookmark.svg';
//style
import './App.scss';

const App = () => {
	return (
		<div className="app-container">
			<div className="sidebar">sidebar</div>
			<header className="header">header</header>
			<div className="realtors">top 3 realtors</div>
			<section className="features">
				<div className="feature">
					<Global className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">
						Worlds best luxury homes
					</h4>
					<p className="feature__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
						distinctio necessitatibus pariatur voluptatibus.
					</p>
				</div>

				<div className="feature">
					<Location className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">Only best properties</h4>
					<p className="feature__text">
						Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
						rerum sed a eligendi aut quia.
					</p>
				</div>
				<div className="feature">
					<Star className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">
						All homes in top locations
					</h4>
					<p className="feature__text">
						Tenetur distinctio necessitatibus pariatur voluptatibus quidem
						consequatur harum.
					</p>
				</div>
				<div className="feature">
					<Key className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">New home in one week </h4>
					<p className="feature__text">
						Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
						sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className="feature">
					<Chat className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
					<p className="feature__text">
						Quidem consequatur harum, voluptatum mollitia quae. Tenetur
						distinctio necessitatibus pariatur voluptatibus.
					</p>
				</div>
				<div className="feature">
					<Bookmark className="feature__icon" alt="feature icon" />
					<h4 className="heading-4 heading-4--dark">
						Secure payment on nexter
					</h4>
					<p className="feature__text">
						P ariatur voluptatibus quidem consequatur harum, voluptatum mollitia
						quae.
					</p>
				</div>
			</section>
			<div className="story__pictures">story Pictures</div>
			<div className="story__content">story Content</div>
			<section className="homes">homes</section>
			<section className="gallery">gallery</section>
			<footer className="footer">footer</footer>
		</div>
	);
};

export default App;
