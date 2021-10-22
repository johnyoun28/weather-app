import React from "react";
import '../App.css'
import {connect} from 'react-redux'


const WeatherCard = ({woeid,item}) => {

  return (

    <div className='weather-card'>
      <h2><br></br>{item.applicable_date} <br/> {new Date(item.applicable_date).toLocaleString('en-us', {weekday:'long'})}</h2>
      <h3>{item.weather_state_name}</h3>
      <h2>{Math.round(item.the_temp * 1.8 + 32)}°  
      <br />
       <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} alt="icon of current weather"width='40px'/>   </h2>
      <h3>H: {Math.round(item.max_temp * 1.8 + 32 )}°</h3>
      <h3>L: {Math.round(item.min_temp * 1.8 + 32)}°</h3>
    </div>
    
  );

};

const mapStateToProps = state => {
  return {
    woeid: state.woeid
  }
}

export default connect(mapStateToProps, {})(WeatherCard);
