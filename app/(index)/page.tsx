import { getTags } from "@/app/helpers";
import { Article as ArticleType, Tag } from "@/app/models";
import { Banner, Sidebar, TagsNav, Articles } from "@/app/components";
import styles from "./page.module.scss";

async function getData() {
  const res = await fetch(
    "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const articles: ArticleType[] = data.articles.filter(
    (article: ArticleType) => article.subtype === "7"
  );
  const tags: Tag[] = getTags(articles);

  return (
    <main className={styles.main}>
      <Banner />

      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Acumulado Grilla</h1>

          <TagsNav tags={tags} />

          <Articles items={articles} />
        </div>

        <Sidebar />
      </section>
    </main>
  );
}
