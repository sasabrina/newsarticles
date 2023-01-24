import { Tag } from "@/app/models";
import { Button } from "@/app/components";
import styles from "./tagsNav.module.scss";

type Props = {
  tags: Tag[];
};

const TagsNav = ({ tags }: Props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.tagsContainer}>
        {tags.map((tag) => (
          <li key={tag.slug} className={styles.tag}>
            {/* TODO: replcace w}7 btn */}
            <Button type="link" text={tag.text} link={`/tema/${tag.slug}`} />
            {/* <Link href={`/tema/${tag.slug}`} className={styles.link}>
              {tag.text}
            </Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TagsNav;
