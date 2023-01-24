import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/models";
import styles from "./article.module.scss";

type Props = {
  item: Article;
};

const Article = ({ item }: Props) => {
  const date = new Date(item.display_date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className={styles.article}>
      <Link href={item.website_url}>
        <figure className={styles.imgContainer}>
          <Image
            src={item.promo_items.basic.url}
            alt="article image"
            width={266}
            height={177}
          />
        </figure>

        <div>
          <h2 className={styles.headline}>{item.headlines.basic}</h2>
          <h4 className={styles.date}>{date}</h4>
        </div>
      </Link>
    </article>
  );
};

export default Article;
