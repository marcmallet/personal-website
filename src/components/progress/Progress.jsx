import styles from './Progress.module.scss';
import PropTypes from "prop-types";

export default function Progress({sections, activeSection, navigateSection}) {
  return (
    <nav className={styles.progress}>
      <ul>
        {sections.map((section, index) => {
          const isActive = activeSection === section.key;
          return <li key={index}>
            <a href={`/#${section.key}`} className={isActive ? styles.active : ''} onClick={navigateSection}></a>
          </li>;
        })}
      </ul>
    </nav>
  )
}

Progress.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  navigateSection: PropTypes.func.isRequired,
};
