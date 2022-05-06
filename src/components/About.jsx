import styles from './About.module.css';
import photo from '../images/photo.png';

export const About = () => {
	return (
		<>
			<section className={styles.appcontent}>
				<div className={styles.photo}>
					<img src={photo} />
				</div>
				<div>
					<div className={styles.aboutme}>
						<h3 className='who'>
							Who I am.<span className={styles.line}></span>
						</h3>
						<article>
							<h2 className={styles.title}>
								I'm Javier García, FrontEnd Web Developper.
							</h2>
							<p>My skills are: Html5,Css3(Bootstrap,Sass),React.</p>
							<p>I like develop websites.</p>
						</article>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
