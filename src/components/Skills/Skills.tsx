import SkillList from "@/components/SkillList/SkillList";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles["skills"]}>
      <h2 className={styles["skills__heading"]}>Skills</h2>

      <SkillList />
    </section>
  );
}
