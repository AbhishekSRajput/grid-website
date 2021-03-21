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
import galOne from './img/gal-1.jpeg';
import galTwo from './img/gal-2.jpeg';
import galThree from './img/gal-3.jpeg';
import galFour from './img/gal-4.jpeg';
import galFive from './img/gal-5.jpeg';
import galSix from './img/gal-6.jpeg';
import galSeven from './img/gal-7.jpeg';
import galEight from './img/gal-8.jpeg';
import galNine from './img/gal-9.jpeg';
import galTen from './img/gal-10.jpeg';
import galEleven from './img/gal-11.jpeg';
import galTwelve from './img/gal-12.jpeg';
import galThirteen from './img/gal-13.jpeg';
import galFourteen from './img/gal-14.jpeg';
import logo from './img/logo.png';
import logoBbc from './img/logo-bbc.png';
import logoBi from './img/logo-bi.png';
import logoForbes from './img/logo-forbes.png';
import logoTechCrunch from './img/logo-techcrunch.png';
import realtorOne from './img/realtor-1.jpeg';
import realtorTwo from './img/realtor-2.jpeg';
import realtorThree from './img/realtor-3.jpeg';

//style
import './App.scss';

const App = () => {
	return (
		<div className="app-container">
			<div className="sidebar">
				<button className="nav-btn"></button>
			</div>
			<header className="header">
				<img src={logo} alt="header logo" className="header__logo" />
				<h3 className="heading-3">Your own home</h3>
				<h1 className="heading-1">The ultimate personal freedom</h1>
				<button className="btn header__btn">View our properties</button>
				<div className="header__seenon-text">seen on</div>
				<div className="header__seenon-logos">
					<img src={logoBbc} alt="bbc" />
					<img src={logoBi} alt="bbc" />
					<img src={logoForbes} alt="bbc" />
					<img src={logoTechCrunch} alt="bbc" />
				</div>
			</header>
			<div className="realtors">
				<h3 className="heading-3">Top 3 Realtors</h3>
				<div className="realtors__list">
					<img src={realtorOne} alt="realtor" className="realtors__img" />
					<div className="realtors__details">
						<h4 className="heading-4 heading-4--light">Erik boyle</h4>
						<p className="realtors__sold">245 houses sold</p>
					</div>

					<img src={realtorTwo} alt="realtor" className="realtors__img" />
					<div className="realtors__details">
						<h4 className="heading-4 heading-4--light">james smith</h4>
						<p className="realtors__sold">340 houses sold</p>
					</div>

					<img src={realtorThree} alt="realtor" className="realtors__img" />
					<div className="realtors__details">
						<h4 className="heading-4 heading-4--light">Emma Watson</h4>
						<p className="realtors__sold">1000 houses sold</p>
					</div>
				</div>
			</div>
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
			<section className="gallery">
				<figure className="gallery__item gallery__item--1">
					<img src={galOne} alt="gallery 1" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--2">
					<img src={galTwo} alt="gallery 2" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--3">
					<img src={galThree} alt="gallery 3" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--4">
					<img src={galFour} alt="gallery 4" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--5">
					<img src={galFive} alt="gallery 5" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--6">
					<img src={galSix} alt="gallery 6" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--7">
					<img src={galSeven} alt="gallery 7" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--8">
					<img src={galEight} alt="gallery 8" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--9">
					<img src={galNine} alt="gallery 9" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--10">
					<img src={galTen} alt="gallery 10" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--11">
					<img src={galEleven} alt="gallery 11" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--12">
					<img src={galTwelve} alt="gallery 12" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--13">
					<img src={galThirteen} alt="gallery 13" className="gallery__img" />
				</figure>
				<figure className="gallery__item gallery__item--14">
					<img src={galFourteen} alt="gallery 14" className="gallery__img" />
				</figure>
			</section>
			<footer className="footer">
				<ul className="nav">
					<li className="nav__item">
						<a href="#" className="nav__link">
							Find your dream home
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Request proposal
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Download home planner
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Contact us
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Submit your property
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Come work with us!
						</a>
					</li>
				</ul>
				<p className="copyright">
					&copy; Copyright 2017 by Jonas schmedtmann. this project is done under
					instructions of the instructor. great course for learning modern css
					features like flexbox and grid
				</p>
			</footer>
		</div>
	);
};

export default App;
