import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import SecondsCounter from './components/SecondsCounter';

let second = 0;

setInterval(() => {
	second++;
	ReactDOM.render(
		<React.StrictMode>
			<>
			<div className="counter">
				<div className="bg">
					<FontAwesomeIcon icon={faClock} />
				</div>
				<SecondsCounter seconds={second} />
			</div>
			</>
		</React.StrictMode>,
	  document.getElementById('root')
	);
}, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
