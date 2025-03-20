import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import humidity_icon from '../assets/humidity.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {

    const [WeatherData, setWeatherData] = useState(false);
    const inputRef = useRef();

    const allIcons = {
        "01d" : clear_icon,
        "01n" : clear_icon,
        "02d" : cloud_icon,
        "02n" : cloud_icon,
        "03d" : cloud_icon,
        "03n" : cloud_icon,
        "04d" : drizzle_icon,
        "04n" : drizzle_icon,
        "09d" : rain_icon,
        "09n" : rain_icon,
        "10d" : rain_icon,
        "10n" : rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,

    }
    const search = async(city) =>{
        try{
            if(city === ""){
                alert("Please enter a city");
                return;
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}`
        
            const res = await fetch(url);
            const data = await res.json();
            const icon = allIcons[data.weather[0].icon] || allIcons['01d'];
            setWeatherData({
                temp: Math.floor(data.main.temp),
                city: data.name,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                icon: icon
            });
        
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        search('Gondal')
    },[])

  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search'/>
            <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        <img src={WeatherData.icon} className='weather-img' alt="" />
        <p className='temp'>{WeatherData.temp} °C</p>
        <p className='location'>{WeatherData.city}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                <p>{WeatherData.humidity} %</p>
                <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                <p>{WeatherData.wind} Km/h</p>
                <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather