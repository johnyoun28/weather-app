import React, {useEffect } from "react";
import { connect } from 'react-redux';
import './App.css';
import WeatherForm from './components/WeatherForm';
import {fetchWeather} from './actions'

import WeatherList from './components/WeatherList'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'


const App = ({fetchWeather, woeid, weather, isLoading}) => {

  useEffect(() => {
    fetchWeather(woeid)
  },[fetchWeather, woeid])

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={115}
          timeout={3000} //3 secs
        />
      </>
    );
  };


  return (
    <div className="App">
      <h1>{weather.title}</h1>
      <WeatherForm />

      {
        isLoading ? (renderLoader()) :
        <WeatherList weathers={weather}/>
      }

    </div>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
    woeid: state.woeid,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {fetchWeather}) (App);
