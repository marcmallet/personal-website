import styles from "./About.module.scss";

const DEFAULT_WORK = {
  ui: [
    {
      tech: "Figma",
      icon: styles.icon_sqaure
    },
    {
      tech: "Adobe XD",
      icon: styles.icon_sqaure
    },
    {
      tech: "Adobe Photoshop",
      icon: styles.icon_drop
    },
    {
      tech: "Adobe Illustrator",
      icon: styles.icon_drop
    },
    {
      tech: "Adobe Premier",
      icon: styles.icon_video
    },
    {
      tech: "Adobe After Effects",
      icon: styles.icon_video
    },
  ],
  frontend: [
      {
          tech: "JavaScript (ES6)",
          icon: styles.icon_braces
      },
      {
          tech: "React",
          icon: styles.icon_braces
      },
      {
          tech: "Angular",
          icon: styles.icon_braces
      },
      {
          tech: "HTML5",
          icon: styles.icon_braces
      },
      {
          tech: "CSS3",
          icon: styles.icon_braces
      },
      {
          tech: "SASS/SCSS",
          icon: styles.icon_braces
      },
  ],
  backend: [
    {
      tech: "Ruby on Rails",
      icon: styles.icon_braces
    },
    {
      tech: "PHP",
      icon: styles.icon_braces
    },
    {
      tech: "ExpressJS",
      icon: styles.icon_braces
    },
    {
      tech: "NestJs",
      icon: styles.icon_braces
    },
    {
      tech: "MySQL",
      icon: styles.icon_database
    },
    {
      tech: "PostgreSQL",
      icon: styles.icon_database
    },
  ],
};

export default function About() {
  return (
    <div className={`${styles.container} hidden`}>
      <div className={styles.content}>
        <h2>About</h2>
        <p>
          Throughout my career, I have gained experience working with a wide range of Front-end and Back-end
          languages and frameworks, which has equipped me with a diverse and well-rounded skill set. Some of
          the my favourite technologies are listed below.
        </p>

        <div className={styles.grid}>

          <div className={styles.column}>
            <h3 className={styles.design}>UI/UX Design</h3>
            <ul>
              {DEFAULT_WORK.ui.map((work, index) => {
                return <li key={index} className={`${styles.icon} ${work.icon}`}>{work.tech}</li>
              })}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.frontend}>Front-end</h3>
            <ul>
              {DEFAULT_WORK.frontend.map((work, index) => {
                return <li key={index} className={`${styles.icon} ${work.icon}`}>{work.tech}</li>
              })}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.backend}>Back-end</h3>
            <ul>
              {DEFAULT_WORK.backend.map((work, index) => {
                return <li key={index} className={`${styles.icon} ${work.icon}`}>{work.tech}</li>
              })}
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}
