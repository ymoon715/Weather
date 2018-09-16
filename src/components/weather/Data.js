import React, {Component} from 'react';
import axios from 'axios'
import './Data.css'
import dayline from './dayline.png'
import nightline from './nightline.png'
import sunny from './sunny.png'
import clearnight from './clearnight.png'
import fewcloudday from './fewcloudday.png'
import fewcloudnight from './fewcloudnight.png'
import scatteredclouds from './scatteredclouds.png'
import brokenclouds from './brokenclouds.png'
import rain from './rain.png'
import thunderstorm from './thunderstorm.png'
import snow from './snow.png'


class Datas extends Component {
 state = {
     zipData: null
 }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.zip){ 
            if (prevProps.zip !== this.props.zip) {
                axios.get('https://api.openweathermap.org/data/2.5/weather?zip='+ this.props.zip +',us&APPID=2086f7f4573c4e1ab37cc901480c73de')
                .then(response => this.setState({zipData: response.data}))
            } 
        }
    }

    cToFToggle=()=>{
        const celsius = document.getElementById("celsius");
        const fahrenheit = document.getElementById("fahrenheit");
        celsius.style.display = 'none';
        fahrenheit.style.display = 'grid';
    }

    fToCToggle=()=>{
        const celsius = document.getElementById("celsius");
        const fahrenheit = document.getElementById("fahrenheit");
        celsius.style.display = 'grid';
        fahrenheit.style.display = 'none';
    }
  
    render () {
        let image;
        let geoWeather = this.props.icon;
        if (geoWeather === "01d"){
            image = sunny
        } else if (geoWeather === "01n"){
            image = clearnight
        } else if (geoWeather === "02d"){
            image = fewcloudday
        } else if (geoWeather === "02n"){
            image = fewcloudnight
        } else if (geoWeather === "03d" || geoWeather === "03n"){
            image = scatteredclouds
        } else if (geoWeather === "04d"|| geoWeather === "04n"){
            image = brokenclouds
        } else if (geoWeather === "09d" || geoWeather === "09n"  || geoWeather === "10d" || geoWeather === "10n"){
            image = rain
        } else if (geoWeather === "11d"||geoWeather === "11n"){
            image = thunderstorm
        } else if (geoWeather === "13d" || geoWeather === "13n"){
            image = snow
        } else if (geoWeather === "50d"){
            image = dayline
        } else if (geoWeather === "50n") {
            image = nightline
        }

        

        if (this.state.zipData) {
            let zipWeather = this.state.zipData.weather[0].icon
            let images;
        if (zipWeather === "01d"){
            images = sunny
        } else if (zipWeather === "01n"){
            images = clearnight
        } else if (zipWeather === "02d"){
            images = fewcloudday
        } else if (zipWeather === "02n"){
            images = fewcloudnight
        } else if (zipWeather === "03d" || zipWeather === "03n"){
            images = scatteredclouds
        } else if (zipWeather === "04d"|| zipWeather === "04n"){
            images = brokenclouds
        } else if (zipWeather === "09d" || zipWeather === "09n"  || zipWeather === "10d" || zipWeather === "10n"){
            images = rain
        } else if (zipWeather === "11d"||zipWeather === "11n"){
            images = thunderstorm
        } else if (zipWeather === "13d" || zipWeather === "13n"){
            images = snow
        } else if (zipWeather === "50d"){
            images = dayline
        } else if (zipWeather === "50n") {
            images = nightline
        }
            return (
                <div className="weather-container">
                <h1>{this.state.zipData.name}</h1>
                <div className="icon">
                    <img src={images}  />
                </div>
                <div className="description">
                    <p>{this.state.zipData.weather[0].description.toUpperCase()}</p>
                </div>
                <div id="celsius" onClick={this.cToFToggle}>
                    <p>{(this.state.zipData.main.temp - 273).toFixed(1)} &#176;C</p>
                </div>
                <div id="fahrenheit" onClick={this.fToCToggle}>
                    <p>{(this.state.zipData.main.temp * 9/5 - 459.67).toFixed(1)} &#176;F</p>
                </div>
            </div>
        )
        } else {
        return (
            <div className="weather-container">
                <h1>{this.props.city}</h1>
                <div className="icon">
                    <img src={image}  />
                </div>
                <div className="description">
                    <p>{this.props.description.toUpperCase()}</p>
                </div>
                <div  id="celsius"  onClick={this.cToFToggle}>
                    <p>{(this.props.temp - 273).toFixed(1)} &#176;C</p>
                </div>
                <div id="fahrenheit"  onClick={this.fToCToggle}>
                    <p>{(this.props.temp * 9/5 - 459.67).toFixed(1)} &#176;F</p>
                </div>
            </div>
        )}
    }
} 

export default Datas;