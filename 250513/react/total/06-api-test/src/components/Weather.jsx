import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Weather = () => {
  const { weather, setWeather, selectCountry, setSelectCountry, countries } =
    useContext(WeatherContext);

  console.log(weather);
  return (
    <div className="weather-wrap">
      <h2>국가별 날씨</h2>
      <select
        value={selectCountry}
        onChange={(e) => setSelectCountry(e.target.value)}
      >
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {weather ? (
        <div>
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </p>
          <div>
            <p>온도 {weather.main.temp}ºC</p>
            <p>도시 {weather.name}</p>
            <p>설명 {weather.weather[0].description}</p>
            <p>풍속 {weather.wind.speed}m/s</p>
          </div>
        </div>
      ) : (
        <p>날씨 정보를 불러오는 중</p>
      )}
    </div>
  );
};

export default Weather;
