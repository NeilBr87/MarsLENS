import React from "react";
import { useState, useEffect } from "react";

function Weather(props) {
    const [currentWeather, setcurrentWeather] = useState({});

    useEffect(() => {
        fetch(
         `https://api.nasa.gov/insight_weather/?api_key=nE1H9YXrR3lc9x3u1cZ2ogsN2uZRdviCdPtHw2s8&feedtype=json&ver=1.0`
       )
         .then((response) => response.json())
         .then((data) => setcurrentWeather(data));
     }, []);

     return (
        <div>
            {/* {currentWeather.sol_keys && currentWeather.sol_keys.length > 0 && ( */}
                {/* <div>
                    <h2>Weather on Mars</h2>
                    <h3>Sol {currentWeather.sol_keys[props.currentIndex]}</h3>
                    <p>High: {currentWeather[currentWeather.sol_keys[props.currentIndex]].AT.mx}°F</p>
                    <p>Low: {currentWeather[currentWeather.sol_keys[props.currentIndex]].AT.mn}°F</p>
                    <p>Wind Speed: {currentWeather[currentWeather.sol_keys[props.currentIndex]].HWS.av} mph</p>
                    <p>Wind Direction: {currentWeather[currentWeather.sol_keys[props.currentIndex]].WD.most_common.compass_point}</p>
                </div> */}
                <div>
                    <h2>Weather on Mars</h2>
                </div>
        </div>
      );
    }
    
export default Weather;
