import Props from "../types";
import styles from "./index.module.scss";
import moment from "moment";
import Image from "next/image";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Weather = ({ currentWeather, weatherForecast }: Props) => {
  // console.log("weatherForecast-jsx", weatherForecast);
  const weatherForecastList = weatherForecast.list;

  let date;
  let tempMax;
  let tempMin;

  return (
    <section className={styles.weather_section}>
      <h1>Seattle</h1>

      <div className={styles.weather_today}>
        <div>
          <p>{currentWeather?.weather[0].main}</p>
          <p className={styles.today_info}>
            {currentWeather?.main.temp}
            <span>˚c</span>
          </p>
        </div>
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon.slice(
              0,
              2
            )}d@2x.png`}
            alt="Seattle Icon"
            loading="eager"
            width={52}
            height={52}
            priority
          />
        </div>
      </div>
      <div>
        <ul className={styles.weatherList}>
          {weatherForecast.list.map((forecast, index) => {
            const time = new Date(forecast.dt * 1000);

            // console.log(time.getDate());

            if (date != time.getDate()) {
              date = time.getDate();
              tempMax = forecast.main.temp_max;
              tempMin = forecast.main.temp_min;
            } else {
              if (tempMax < forecast.main.temp_max) {
                tempMax = forecast.main.temp_max;
              }
              if (tempMin > forecast.main.temp_min) {
                tempMin = forecast.main.temp_min;
              }
            }
            // その日の最低気温と最高気温をカウント

            //翌日以降12時の時点の予報を表示
            if (12 <= time.getHours() && time.getHours() <= 14) {
              let dayStr = week[time.getDay()];
              const today = week[new Date().getDay()];
              if (dayStr == today) {
                dayStr = "Today";
              }

              return (
                <li key={index}>
                  <p>{dayStr}</p>
                  <Image
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    alt={`${forecast.weather[0].main} icon`}
                    loading="eager"
                    width={41}
                    height={41}
                    priority
                  />
                  <div>
                    <p>
                      {tempMax}
                      <span>˚c</span>
                    </p>
                    <p>
                      {tempMin}
                      <span>˚c</span>
                    </p>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};
