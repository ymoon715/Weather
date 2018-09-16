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
        if (this.props.icon === "01d"){
            image = sunny
        } else if (this.props.icon === "01n"){
            image = clearnight
        } else if (this.props.icon === "02d"){
            image = fewcloudday
        } else if (this.props.icon === "02n"){
            image = fewcloudnight
        } else if (this.props.icon === "03d" || this.props.icon === "03n"){
            image = scatteredclouds
        } else if (this.props.icon === "04d"|| this.props.icon === "04n"){
            image = brokenclouds
        } else if (this.props.icon === "09d" || this.props.icon === "09n"  || this.props.icon === "10d" || this.props.icon === "10n"){
            image = rain
        } else if (this.props.icon === "11d"||this.props.icon === "11n"){
            image = thunderstorm
        } else if (this.props.icon === "13d" || this.props.icon === "13n"){
            image = snow
        } else if (this.props.icon === "50d"){
            image = dayline
        } else if (this.props.icon === "50n") {
            image = nightline
        }

        

        if (this.state.zipData) {
            let images;
        if (this.state.zipData.weather[0].icon === "01d"){
            images = sunny
        } else if (this.state.zipData.weather[0].icon === "01n"){
            images = clearnight
        } else if (this.state.zipData.weather[0].icon === "02d"){
            images = fewcloudday
        } else if (this.state.zipData.weather[0].icon === "02n"){
            images = fewcloudnight
        } else if (this.state.zipData.weather[0].icon === "03d" || this.state.zipData.weather[0].icon === "03n"){
            images = scatteredclouds
        } else if (this.state.zipData.weather[0].icon === "04d"|| this.state.zipData.weather[0].icon === "04n"){
            images = brokenclouds
        } else if (this.state.zipData.weather[0].icon === "09d" || this.state.zipData.weather[0].icon === "09n"  || this.state.zipData.weather[0].icon === "10d" || this.state.zipData.weather[0].icon === "10n"){
            images = rain
        } else if (this.state.zipData.weather[0].icon === "11d"||this.state.zipData.weather[0].icon === "11n"){
            images = thunderstorm
        } else if (this.state.zipData.weather[0].icon === "13d" || this.state.zipData.weather[0].icon === "13n"){
            images = snow
        } else if (this.state.zipData.weather[0].icon === "50d"){
            images = dayline
        } else if (this.state.zipData.weather[0].icon === "50n") {
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