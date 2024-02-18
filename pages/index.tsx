import Head from "next/head";
import MainLayout from "../src/layouts";
import styles from "../styles/Home.module.scss";
import { Article } from "../src/components/article";
import { Weather } from "../src/components/weather";
import { Nav } from "../src/components/nav";
import Image from "next/image";

export default function Home(props: {
  topArticles;
  currentWeather;
  weatherForecast;
}) {
  // 記事を取得できているか確認
  // console.log("Home", props.weatherForecast);

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
          <Article title="Headlines" articles={props.topArticles} />
        </div>
        <div>
          <Weather
            currentWeather={props.currentWeather}
            weatherForecast={props.weatherForecast}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 10; // 取得したい記事の数
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  //WeatherAPI

  const lat = 47.626353;
  const lon = -122.333144;
  // const exclude = "hourly,minutely";

  const currentWeatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );

  const currentWeatherJson = await currentWeatherRes.json();
  const currentWeather = currentWeatherJson;

  const weatherForecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );

  const weatherForecastJson = await weatherForecastRes.json();
  const weatherForecast = weatherForecastJson;

  // console.log("index.ts", currentWeather);

  // console.log("list", weatherNews);
  // Geolocation.getCurrentPosition(
  //   (position) => {
  //     console.log(position);
  //   },
  //   (err) => alert(err)
  // );

  return {
    props: {
      topArticles,
      currentWeather,
      weatherForecast,
    },
    revalidate: 60 * 10,
  };
};
