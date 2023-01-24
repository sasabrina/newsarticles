"use client";
import { useState } from "react";
import { Article as ArticleType } from "@/app/models";
import { Article, Button } from "@/app/components";
import styles from "./articles.module.scss";

type Props = {
  items: ArticleType[];
};

const Articles = ({ items }: Props) => {
  const [totalArticles, setTotalArticles] = useState<number>(10);
  const [articles, setArticles] = useState<ArticleType[]>(
    items.slice(0, totalArticles)
  );

  const handleLoadMore = () => {
    if (items.length > totalArticles && totalArticles < items.length) {
      setTotalArticles(totalArticles + 10);
      setArticles(items.slice(0, totalArticles));
    } else {
      setArticles(items);
    }
  };

  return (
    <div>
      <div className={styles.articlesWrapper}>
        <ul className={styles.articles}>
          {articles.map((article: ArticleType) => (
            <Article key={article._id} item={article} />
          ))}
        </ul>

        <div className={styles.transparent}></div>
      </div>

      {articles.length < 28 && (
        <div className={styles.loadMoreWrapper}>
          <Button
            type="loadMore"
            onclick={handleLoadMore}
            text="MAS NOTAS DE ACUMULADO GRILLA"
          />
        </div>
      )}
    </div>
  );
};

export default Articles;
