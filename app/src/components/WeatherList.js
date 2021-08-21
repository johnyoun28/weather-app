import React from 'react'
import WeatherCard from './WeatherCard'

const WeatherList = (props) => {
    return (
        <div>
            {
                props.weathers.consolidated_weather.map((item, index) => {
                    return <WeatherCard item={item} key={index} />
                })
            }      
        </div>
    )
}
export default WeatherList
