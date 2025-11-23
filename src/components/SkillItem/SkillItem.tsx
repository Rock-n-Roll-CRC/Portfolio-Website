import type { FC, SVGProps } from "react";

import styles from "./SkillItem.module.scss";

export default function SkillItem({
  skill,
}: {
  skill: { icon: FC<SVGProps<SVGElement>>; label: string };
}) {
  const Icon = skill.icon;

  return (
    <li className={styles["skill-item"]}>
      <Icon className={styles["skill-item__icon"]} />

      <p className={styles["skill-item__label"]}>{skill.label}</p>
    </li>
  );
}
