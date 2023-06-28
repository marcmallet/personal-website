import styles from "./Experience.module.scss";

const DEFAULT_EXPERIENCE = [
  {
    position: "UI Developer",
    company: "Sustainalytics, Toronto, Ontario, Canada",
    date: "Mar 2022",
    tags: ["UI/UX", "Ruby on Rails", "Javascript"]
  },
  {
    position: "Senior Software Developer & UI/UX Designer",
    company: "Fundhouse, Cape Town, South Africa",
    date: "Jul 2019",
    tags: ["UI/UX", "PHP", "JavaScript", "ReactJS", "Figma", "AWS"]
  },
  {
    position: "Front-end Developer",
    company: "aYo Holdings (MTN & MMI JV), Cape Town, South Africa",
    date: "Nov 2018",
    tags: ["UI/UX", "Angular", "Javascript", "Azure"]
  },
  {
    position: "Software Developer & UI/UX Designer",
    company: "Fundhouse, Cape Town, South Africa",
    date: "Sep 2015",
    tags: ["UI/UX", "PHP", "JavaScript", "Figma", "AWS", "UI/UX"]
  },
];

function Experience() {
  return (
    <div className={`${styles.container} hidden`}>
      <div className={styles.content}>
        <h2>Worked Experience</h2>
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
    </div>
  )
}

export default Experience
