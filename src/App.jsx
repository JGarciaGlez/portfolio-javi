import './assets/styles/App.css';
import About from './components/About';
import { Header } from './components/Header';
import Projects from './components/Projects';

function App() {
	return (
		<>
			<Header />
			<div>
			<About />

			<Projects />
			</div>
		</>
	);
}

export default App;
