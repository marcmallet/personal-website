import styles from "./About.module.scss";

export default function About() {
    return (
        <div className={`${styles.container} hidden`}>
            <div className={styles.content}>
                <h2>About</h2>
                <p>
                    Throughout my career, I have acquired experience working with a wide range of Front-end and Back-end
                    languages and frameworks, which has equipped me with a diverse and well-rounded skill set. Some of
                    the my favourite technologies are listed below.
                </p>

                <div className={styles.grid}>

                    <div className={styles.column}>
                        <h3 className={styles.design}>UI/UX Design</h3>
                        <ul>
                            <li className={`${styles.icon} ${styles.icon_sqaure}`}>Figma</li>
                            <li className={`${styles.icon} ${styles.icon_sqaure}`}>Adobe XD</li>
                            <li className={`${styles.icon} ${styles.icon_drop}`}>Adobe Photoshop</li>
                            <li className={`${styles.icon} ${styles.icon_drop}`}>Adobe Illustrator</li>
                            <li className={`${styles.icon} ${styles.icon_video}`}>Adobe Premier</li>
                            <li className={`${styles.icon} ${styles.icon_video}`}>Adobe After Effects</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.frontend}>Front-end</h3>
                        <ul>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>JavaScript (ES6)</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>ReactJS</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>Angular</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>HTML5</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>CSS3</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>SASS/SCSS</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.backend}>Back-end</h3>
                        <ul>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>Ruby on Rails</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>PHP</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>ExpressJS</li>
                            <li className={`${styles.icon} ${styles.icon_braces}`}>NestJs</li>
                            <li className={`${styles.icon} ${styles.icon_database}`}>MySQL</li>
                            <li className={`${styles.icon} ${styles.icon_database}`}>PostgreSQL</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}
