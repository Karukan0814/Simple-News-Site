import { useRouter } from "next/router";
import Props from "../../src/components/types";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import MainLayout from "../../src/layouts";
import styles from "../../styles/Home.module.scss";
import { Article } from "../../src/components/article";
import { Nav } from "../../src/components/nav";

function Topic(props: Props) {
  // console.log(props);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.main}>
          <Article title="Headlines" articles={props.articles} />
        </div>
      </div>
    </MainLayout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  // console.log(id);
  const pageSize = 10; // 取得したい記事の数
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&category=${id}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const topicJson = await topicRes.json();
  const articles = topicJson?.articles;

  return {
    props: {
      articles,
    },
    revalidate: 60 * 10,
  };
};
export default Topic;
