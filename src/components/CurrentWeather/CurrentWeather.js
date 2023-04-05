import './CurrentWeather.css'

const CurrentWeather = ({ weatherData }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{weatherData.city}</p>
                    <p className="weather-description">{weatherData.weather[0].description}</p>
                </div>
                <img alt='weather' className="weather-icon" src={`icons/${weatherData.weather[0].icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(weatherData.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter'>
                        <span className='parameter-label'>Detaylar</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Hissedilen Sıcaklık</span>
                        <span className='parameter-value'>{Math.round(weatherData.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Nem</span>
                        <span className='parameter-value'>{weatherData.main.humidity}%rh</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Basınç</span>
                        <span className='parameter-value'>{weatherData.main.pressure}hPa</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Maksimum Sıcaklık</span>
                        <span className='parameter-value'>{Math.round(weatherData.main.temp_max)}°C</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter-label'>Minimum Sıcaklık</span>
                        <span className='parameter-value'>{Math.round(weatherData.main.temp_min)}°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;