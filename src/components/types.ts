type Props = {
  articles?: [
    {
      author: string;
      title: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
    }
  ];
  title?: string;
  currentWeather?: {
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    main: {
      temp: number;
    };
    clouds: { all: number };
  };
  weatherForecast?: {
    list: [
      forecast: {
        dt: number;
        main: {
          temp: number;
          temp_min: number;
          temp_max: number;
        };
        weather: [
          {
            main: string;
            icon: string;
          }
        ];
      }
    ];
  };
};

export default Props;
