import React from "react";
import '../App.css'


const WeatherCard = (props) => {

  return (

    <div className='weather-card'>
      <h2><br></br>{props.item.applicable_date}</h2>
      <h3>{props.item.weather_state_name}</h3>
      <h2>{Math.round(props.item.the_temp * 1.8 + 32)}°</h2>
      <h3>H: {Math.round(props.item.max_temp * 1.8 + 32 )}°</h3>
      <h3>L: {Math.round(props.item.min_temp * 1.8 + 32)}°</h3>
    </div>
  );
};
export default WeatherCard;
