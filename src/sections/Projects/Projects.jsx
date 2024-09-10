import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
import software from '../../assets/software.png';

import devops from '../../assets/devops.png';
import sql from '../../assets/sql.png';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={software}
          link="https://github.com/mukulbarewar/Authentication-Authorisation-NodeJS_Project"
          h3="NodeJS Project"
          p="SignUp Page"
        />
        <ProjectCard
          src={software}
          link="https://github.com/mukulbarewar/unsplash_image_search"
          h3="React Project"
          p="Image Search API"
        />
        <ProjectCard
          src={devops}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="DevOps Project 1"
          p="Glasses Shop"
        />
        <ProjectCard
          src={devops}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="DevOps Project 2"
          p="Fitness App"
        /> <ProjectCard
        src={sql}
        link="https://github.com/Ade-mir/company-landing-page-2"
        h3="FitLift"
        p="Fitness App"
      />
      </div>
    </section>
  );
}

export default Projects;
