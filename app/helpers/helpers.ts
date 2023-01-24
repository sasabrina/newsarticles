import { Article, Tag } from "@/app/models";

export const getTags = (articles: Article[]): Tag[] => {
  // gets all tags from every article
  const tags = articles.map((article: Article) => article.taxonomy.tags).flat(); // 74

  // returns an array of tags adding the count value
  const tagsWithCount: Tag[] = tags.reduce((acc: Tag[], cur) => {
    const count = tags.filter((tag) => tag.slug === cur.slug).length;

    acc.push({ ...cur, count });

    return acc;
  }, []);

  // and finally returns a sorted array of ten tags
  return Array.from(new Set(tagsWithCount.map((tag) => tag.slug)))
    .map((slug) => tagsWithCount.find((tag) => tag.slug === slug))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
};
