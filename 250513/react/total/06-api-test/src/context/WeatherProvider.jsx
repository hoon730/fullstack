import { useState, useEffect } from "react";
import axios from "axios";
import WeatherContext from "./WeatherContext";

//선택할 국가
const countries = {
  Korea: "Seoul",
  USA: "New York",
  Japan: "Tokyo",
  France: "Paris",
  Germany: "Berlin",
};

// 날씨api
const API_KEY = "015a25236f43f65695302da75b5ead5f";

const WeatherProvider = ({ children }) => {
  //나라선택
  const [selectCountry, setSelectCountry] = useState("Korea");
  //날씨
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const axiosWeather = async () => {
      const city = countries[selectCountry];
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          { params: { appid: API_KEY, units: "metric", lang: "kr", q: city } }
        );
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosWeather();
  }, [selectCountry]);
  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        selectCountry,
        setSelectCountry,
        countries,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
