import React from 'react';

//style
import './Challenge.playground.scss';
const ChallengePlayground = () => {
	return (
		<div className="challenge-container">
			<div className="challenge__header">Header</div>
			<div className="challenge__smallbox">small box 1</div>
			<div className="challenge__smallbox">small box 2</div>
			<div className="challenge__smallbox">small box 3</div>
			<div className="challenge__sidebar">SideBar</div>
			<div className="challenge__main">Main Content</div>
			<div className="challenge__footer">Footer</div>
		</div>
	);
};

export default ChallengePlayground;
