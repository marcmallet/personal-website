import styles from "./Contact.module.scss";

function Contact() {
  return (
      <div className={ `${styles.container} hidden` }>
          <div className={ styles.content }>
              <h2>Contact</h2>
              <p>
                  Whether you have a question, a potential collaboration, or just want to say hello, feel free to reach
                  out through your preferred method. You can send me an email directly at the link below or connect with
                  me on my social channels. I&apos;m always open to new opportunities and conversations.
              </p>
              <a href="mailto:marcmallet.sa@gmail.com" target="_blank" rel="noopener noreferrer" className={ styles.contact }>Wanna say hello?</a>
          </div>

          <ul>
              <li><a href="https://www.linkedin.com/in/marc-mallet-a1059815/" target="_blank" rel="noopener noreferrer" className={ styles.linkedin }></a></li>
              <li><a href="https://dribbble.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={ styles.dribbble }></a></li>
              <li><a href="https://www.instagram.com/marcmallet.ui/" target="_blank" rel="noopener noreferrer" className={ styles.instagram }></a></li>
              <li><a href="https://https://github.com/marcmallet/" target="_blank" rel="noopener noreferrer" className={ styles.github }></a></li>
          </ul>
      </div>
  )
}

export default Contact
