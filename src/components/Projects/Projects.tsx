import ProjectList from "@/components/ProjectList/ProjectList";

import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles["projects"]}>
      <h2 className={styles["projects__heading"]}>Projects</h2>

      <ProjectList />
    </section>
  );
}
