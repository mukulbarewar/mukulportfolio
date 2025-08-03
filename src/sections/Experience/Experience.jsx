// import React from "react";
import styles from "./ExperienceStyles.module.css";

const Experience = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>Work Experience</h1>
        <h2>Full Stack MERN Developer With DevOps : 2 Yr</h2>
        <div>
          <p className={styles.description}>
            As a Full Stack Developer at Octrans Technologies Pvt. Ltd. since
            March 2023, I have developed and maintained multiple scalable web
            applications using the MERN stack. I implemented CI/CD pipelines
            with Jenkins and containerized deployments using Docker and
            Kubernetes, which reduced deployment time by 40% and ensured 99.9%
            system uptime. Additionally, I migrated monolithic applications to a
            microservices architecture, significantly improving system
            scalability. By optimizing AWS infrastructure, I also helped reduce
            operational costs by 25%. Working within Agile teams, I consistently
            contributed to the delivery of high-performance, reliable, and
            user-centric solutions.
          </p>
          <br />
          <div style={{ border: "1px", color: "white" }}>
            <h3>Company</h3>
            <br />
            <p>Octrans Technologie Private Limited, Pune</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
