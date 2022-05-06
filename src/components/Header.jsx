import github from '../assets/img/github.svg';
import likendin from '../assets/img/likendin.svg';

import styles from './Header.module.css';

export const Header = () => {
	return (
		<>
			<header className={styles.appheader}>
				<div className='text'>
					<h2>Hi,I'm Javier García.</h2>
					<h2>
						I´m,
						<span className={styles.frontend}> a FrontEnd web Developer.</span>
					</h2>
				</div>
				<div className={styles.links}>
					<li>
						<a
							href='https://www.linkedin.com/in/javiergarciagonzalez-full-stack-developer/'
							target='blank'
						>
							<img src={likendin} className={styles.github} />
						</a>
					</li>
					<li>
						<a href='https://github.com/JGarciaGlez' target='blank'>
							<img src={github} className={styles.github} />
						</a>
					</li>
				</div>
			</header>
		</>
	);
};
