import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="https://www.linkedin.com/in/marc-mallet-a1059815/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}></a></li>
        <li><a href="https://dribbble.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={styles.dribbble}></a></li>
        <li><a href="https://github.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={styles.github}></a></li>
      </ul>
    </footer>
  )
}