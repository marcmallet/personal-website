import styles from './Header.module.scss';
import PropTypes from 'prop-types';

export default function Header({ sections, activeSection, navigateSection }) {
  return (
      <header>
          <div className={styles.logo}><a href={`/#${sections[0].key}`} onClick={ navigateSection }></a></div>
          <nav className={styles.menu}>
              <ul>
                  {sections.map((section, index) => {
                      const isActive = activeSection === section.key;
                      return section.label !== null &&
                          <li key={ index } >
                              <a href={`/#${section.key}`} className={ isActive ? styles.active : '' } onClick={ navigateSection }>{section.label}</a>
                          </li>;
                  })}
              </ul>
          </nav>
      </header>
  )
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            key: PropTypes.string.isRequired,
        })
    ).isRequired,
    activeSection: PropTypes.string.isRequired,
    navigateSection: PropTypes.func.isRequired,
};