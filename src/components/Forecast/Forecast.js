import "./Forecast.css";

const WEEK_DAYS = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);
  return (
    <div className="cont">
      {data.list.splice(0, 7).map((item, idx) => (
        <div className={`daily-items a${idx}`} key={idx}>
          <div className="first">
            <div>
            <p className={`day`}>{forecastDays[idx]}</p>
            <span className="descriptions">{item.weather[0].description}</span>
            </div>
            <p className="min-max">{Math.round(item.main.temp)}°C</p>
          </div>
          <div className="last">
            <img
              alt="weather"
              className="icon-small"
              src={`icons/${item.weather[0].icon}.png`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
