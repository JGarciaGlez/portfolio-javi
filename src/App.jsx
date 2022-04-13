import './assets/styles/App.css';
import About from './components/About';
import { Header } from './components/Header';
import Projects from './components/projects';

function App() {
	return (
		<>
			<Header />
			<About />

			<Projects />

			<footer className='app-footer'>
				&copy; Javier García- Todos los derechos reservados
			</footer>
		</>
	);
}

export default App;
