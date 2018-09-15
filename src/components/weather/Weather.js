import React, {Component} from 'react';
import axios from 'axios'
import Datas from './Data'
import './Weather.css'


class Weather extends Component {

    state = {
        zip: null,
        data: null
    }

    componentDidMount() {
        this.locationHandler();
        }
        
    locationHandler=()=>{
        let th = this
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
              let lat = position.coords.latitude
              let lng = position.coords.longitude;
              axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat + '&lon=' +lng + '&APPID=2086f7f4573c4e1ab37cc901480c73de')
                    .then(response => th.setState({data: response.data}))
            });
          }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ zip: this.zipcode.value })
    }


  

    render() {
        let showWeather;
        if (this.state.data) {
            showWeather = <Datas 
                                city={  this.state.data.name} 
                                icon={this.state.data.weather[0].icon} 
                                description={this.state.data.weather[0].description}
                                temp={this.state.data.main.temp}
                                zip={this.state.zip}
                                location={this.state}
                                />
        } else {
            showWeather = <div className="weather-container">Loading...</div>
        }
        return (
            <div className="weather">
                {showWeather}
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <input id="input-area" type="text"  ref={el=>this.zipcode = el} maxLength="5" pattern="[0-9]{5}" title="5 digit US zip code"/>
                    </label>
                        <input id="submit-box" type="submit" value="By Zip Code"  />
                </form>
            </div>


        )
    }
}

export default Weather;