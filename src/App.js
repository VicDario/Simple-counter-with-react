import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import SecondsCounter from './components/SecondsCounter';

function App() {
	return (
		<div className="clock">
			<FontAwesomeIcon icon={faClock} />
			<SecondsCounter />
		</div>
	);
}

export default App;
