import styles from "./Contact.module.scss";
import PropTypes from 'prop-types';

export default function Contact({ id }) {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
        <h2>Contact</h2>
        <p>
          Whether you have a question, a potential collaboration, or just want to say hello, feel free to reach
          out through your preferred method. You can send me an email directly at the link below or connect with
          me on my social channels. I&apos;m always open to new opportunities and conversations.
        </p>
        <a href="mailto:marcmallet.sa@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contact}>Wanna say hello?</a>
      </div>
    </section>
  )
}

Contact.propTypes = {
  id: PropTypes.string.isRequired
};
