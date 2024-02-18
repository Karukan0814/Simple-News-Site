import Props from "../types";
import styles from "./index.module.scss";
import moment from "moment";

export const Article = ({ articles, title }: Props) => {
  return (
    <section className={styles.articles}>
      <div className={styles.articles_title}>
        <h1>{title}</h1>
      </div>

      {articles?.map((article, index) => {
        const time = moment(article.publishedAt || moment.now()).fromNow();

        return (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <article className={styles.article}>
              <div>
                <p>{article.title}</p>
                <p>{time}</p>
              </div>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={`${article.title} image`} />
              )}
            </article>
          </a>
        );
      })}
    </section>
  );
};
