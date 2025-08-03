import styles from "./AboutStyles.module.css";
// import { useTheme } from "../../common/ThemeContext";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>About Me</h1>
        <h2>Full Stack Web Developer MERN With DevOps</h2>
        <div>
          <p className={styles.description}>
            I’m Mukul Barewar, a Full Stack MERN Developer and DevOps Engineer
            with over 2 years of experience in building high-performance web
            applications and automating cloud deployments. I specialize in the
            MERN stack (MongoDB, Express.js, React.js, Node.js) and DevOps tools
            like Docker, Kubernetes, Jenkins, and AWS. My work focuses on
            performance, scalability, and clean architecture—resulting in 40%
            faster deployments and 99.9% uptime. I’m passionate about delivering
            reliable, secure, and user-friendly solutions using modern
            development practices.
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
