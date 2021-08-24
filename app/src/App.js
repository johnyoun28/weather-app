import React, {useEffect } from "react";
import { connect } from 'react-redux';
import './App.css';
import WeatherForm from './components/WeatherForm';
import {fetchWeather} from './actions'

import WeatherList from './components/WeatherList'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'


function App(props) {
  const { fetchWeather } = props;

  useEffect(() => {
    fetchWeather(props.woeid)
  },[fetchWeather, props.woeid])

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
      <h1>{props.weather.title}</h1>
      <WeatherForm />

      {
        props.isLoading ? (renderLoader()) :
        <WeatherList weathers={props.weather}/>
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
