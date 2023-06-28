// import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

function Hero() {
  return (
      <div className={ styles.container }>
          <div className={ styles.content }>
              <hgroup>
                  <h1>Marc Mallet</h1>
                  <h2>UI Designer <span>&bull;</span> Developer</h2>
              </hgroup>
              <p>
                  I&apos;m a UI Designer and Full-stack Developer with a profound love for crafting immersive digital experiences.
                  With a unique blend of creativity and technical expertise, I strive to deliver user-centric designs that
                  not only captivate users but also align with the business goals.
              </p>
              <ul>
                  <li><a href="https://www.linkedin.com/in/marc-mallet-a1059815/" target="_blank" rel="noopener noreferrer" className={ styles.linkedin }></a></li>
                  <li><a href="https://dribbble.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={ styles.dribbble }></a></li>
                  <li><a href="https://www.instagram.com/marcmallet.ui/" target="_blank" rel="noopener noreferrer" className={ styles.instagram }></a></li>
                  <li><a href="https://https://github.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={ styles.github }></a></li>
              </ul>
          </div>
          <div className={ styles.mouse }></div>
      </div>
  )
}

export default Hero
