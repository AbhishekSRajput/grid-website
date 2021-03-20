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
import { ReactComponent as Home } from './img/home.svg';
import storyOne from './img/story-1.jpeg';
import storyTwo from './img/story-2.jpeg';
import houseOne from './img/house-1.jpeg';
import houseTwo from './img/house-2.jpeg';
import houseThree from './img/house-3.jpeg';
import houseFour from './img/house-4.jpeg';
import houseFive from './img/house-5.jpeg';
import houseSix from './img/house-6.jpeg';
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
			<div className="story__pictures">
				<img
					src={storyOne}
					alt="Couple with new house"
					className="story__img--1"
				/>
				<img src={storyTwo} alt="New house" className="story__img--2" />
			</div>
			<div className="story__content">
				<h3 className="heading-3 mb-sm">Happy Customers</h3>
				<h2 className="heading-2 heading-2--dark mb-md">
					&ldquo;The best decision of our lives&rdquo;
				</h2>
				<p className="story__text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
					harum volupta!
				</p>
				<button className="btn home__btn">Find your own home</button>
			</div>
			<section className="homes">
				<div className="home">
					<img src={houseOne} alt="house 1" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Beautiful Family House</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">USA</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">5 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							325 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$1.200,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
				<div className="home">
					<img src={houseTwo} alt="house 2" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Modern Glass Villa</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">Canada</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">6 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							460 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$3.200,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
				<div className="home">
					<img src={houseThree} alt="house 3" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Cozy Country House</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">UK</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">4 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							250 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$850,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
				<div className="home">
					<img src={houseFour} alt="house 4" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Large Rustical Villa</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">Portugal</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">4 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							480 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$1.945,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
				<div className="home">
					<img src={houseFive} alt="house 5" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Majestic Palace House</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">Germany</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">18 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							4230 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$9,200,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
				<div className="home">
					<img src={houseSix} alt="house 6" className="home__img" />
					<Star className="home__like" alt="like" />
					<h5 className="home__name">Modern Family Apartment</h5>
					<div className="home__location">
						<Location className="home__location--svg" />
						<p className="home__location--name">Italy</p>
					</div>
					<div className="home__rooms">
						<Global className="home__rooms--svg" />
						<p className="home__rooms--name">3 rooms</p>
					</div>
					<div className="home__area">
						<Home className="home__area--svg" />
						<p className="home__area--name">
							180 m<span>2</span>
						</p>
					</div>
					<div className="home__price">
						<Key className="home__price--svg" />
						<p className="home__price--name">$620,000</p>
					</div>
					<button className="btn home__btn">Contact Realtors</button>
				</div>
			</section>
			<section className="gallery">gallery</section>
			<footer className="footer">footer</footer>
		</div>
	);
};

export default App;
