import Tag from "@/components/Tag/Tag";

import styles from "./TagList.module.scss";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className={styles["tag-list"]}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </ul>
  );
}
