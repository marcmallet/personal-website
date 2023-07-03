// import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';

export default function Hero({ id }) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
          <hgroup>
            <h1>Marc Mallet</h1>
            <h2>Software<span>/</span>UI Developer</h2>
          </hgroup>
          <p>
            I&apos;m a Software Developer with over 15 years experience creating Full-stack applications. I have a deep interest
            in creating visually appealing applications that are intuitive for end users. My skill set is a blend of creativity
            and technical expertise, with an end goal of delivering user-centric designs and features that align with business goals.
          </p>
          <ul>
            <li><a href="https://www.linkedin.com/in/marc-mallet-a1059815/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}></a></li>
            <li><a href="https://dribbble.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={styles.dribbble}></a></li>
            <li><a href="https://www.instagram.com/marcmallet.ui/" target="_blank" rel="noopener noreferrer" className={styles.instagram}></a></li>
            <li><a href="https://github.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={styles.github}></a></li>
          </ul>
        <div className={styles.mouse}></div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  id: PropTypes.string.isRequired
};
