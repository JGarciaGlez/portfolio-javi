
import github from '../assets/img/github.svg';
import likendin from '../assets/img/likendin.svg';

export const Header = () => {
	return (
		<>
			<header className='app-header'>
				<div className='text'>
					<h2> Hola soy Javi García.</h2>
					<h2>
						Soy, <span className='frontend'>FrontEnd web Developer.</span>
					</h2>
				</div>
				<div className='links'>
					<li>
						<a
							href='https://www.linkedin.com/in/javiergarciagonzalez-full-stack-developer/'
							target='blank'
						>
							<img src={likendin} className='github' />
						</a>
					</li>
					<li>
						<a href='https://github.com/JGarciaGlez' target='blank'>
							<img src={github} className='github' />
						</a>
					</li>
				</div>
			</header>
		</>
	);
};
