import styles from "./AboutStyles.module.css";
// import { useTheme } from "../../common/ThemeContext";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>About Me</h1>
        <h2>Full Stack Web Developer MERN</h2>
        <div>
          <p className={styles.description}>
            I am Mukul Barewar, a passionate Full Stack Web Developer with
            expertise in MERN stack and DevOps. With a strong background in
            creative problem-solving and a proven ability to deliver
            high-quality software products, I am dedicated to building innovative
            solutions. I am a continuous learner, always looking to improve my
            skills and knowledge. Let&apos;s connect and build something amazing
            together!
          </p>
          <br />
          <div style={{ border: "1px", color: "white" }}>
            <h3>Education</h3>
            <br />
            <p>Bachelor Of Engineer - Electronic Communication Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
