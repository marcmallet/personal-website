import styles from "./Experience.module.scss";
import PropTypes from 'prop-types';

const DEFAULT_EXPERIENCE = [
  {
    position: "UI Developer (Ruby on Rails)",
    company: "Sustainalytics, Toronto, Ontario, Canada",
    date: "Mar 2022",
    tags: ["Ruby on Rails", "JavaScript", "UI Design"]
  },
  {
    position: "Senior Software/UI Developer",
    company: "Fundhouse, Cape Town, South Africa",
    date: "Jul 2019",
    tags: ["PHP", "React", "JavaScript", "UI Design"]
  },
  {
    position: "Frontend UI Developer",
    company: "aYo Holdings (MTN & MMI JV), Cape Town, South Africa",
    date: "Nov 2018",
    tags: ["Angular", "UI Design"]
  },
  {
    position: "Software/UI Developer",
    company: "Fundhouse, Cape Town, South Africa",
    date: "Sep 2015",
    tags: ["PHP", "JavaScript", "UI Design"]
  },
];

export default function Experience({ id }) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {DEFAULT_EXPERIENCE.map((item, index) => {
            const tags = item.tags
            return (
              <div key={index} className={styles.item}>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.company}>
                  <h5>{item.position}</h5>
                  <h6>{item.company}</h6>

                  <div key={index} className={styles.tags}>
                    {tags.map((tag, index) => {
                      return <div key={index} className={styles.tag}>{tag}</div>
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <a href="https://www.linkedin.com/in/marc-mallet-a1059815/" target="_blank" rel="noopener noreferrer"
           className={styles.linkedin}>View on LinkedIn</a>
      </div>
    </section>
  )
}

Experience.propTypes = {
  id: PropTypes.string.isRequired
};
