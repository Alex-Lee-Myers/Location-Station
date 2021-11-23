import { useState } from 'react';
import { Row } from 'reactstrap';

const OpenWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState({ temp: 0,icon: '',description: ''});
    const getCurrentWeather = async () => {
        const owAPIKey = '2de6705d788ff0ce77cd693b4a3cf03d';
        const owAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${owAPIKey}`
        await fetch(owAPI)
            .then((res) => {
                const response = res.json();
                return response;
            })
            .then((data) => {
                setCurrentWeather({
                    temp: data.main.temp - 273.15, //default to Celsius
                    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                    description: data.weather[0].description
                })
            })
            .catch(err => console.log(err));
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [isFahrenheit, setIsFahrenheit] = useState(false);
    const toggleFahrenheit = () => {
        setIsFahrenheit(!isFahrenheit)
            setCurrentWeather(prevWeather => ({
                ...prevWeather,
                temp: !isFahrenheit ? (currentWeather.temp * (9 / 5)) + 32 : (currentWeather.temp - 32) * (5 / 9)
            }))
    }

    // show toggleFahrenheight button only if getCurrentWeather has been called
    let showToggleFahrenheit = false;
    if (currentWeather.temp !== 0) {
        showToggleFahrenheit = true;
    }

    return (
        <Row>
            <h3>Current Weather</h3>
            <button onClick={getCurrentWeather}>Get Weather</button>
            {showToggleFahrenheit && <button className="btn btn-info" onClick={toggleFahrenheit}>{isFahrenheit ? 'Celsius' : 'Fahrenheit'}</button>}
            
            <img src={currentWeather.icon} alt={currentWeather.description} />
            <p>Description: {capitalizeFirstLetter(currentWeather.description)}</p>
            <p>{currentWeather.temp.toFixed(1)}°{isFahrenheit ? 'F' : 'C'}</p>
        </Row>
    )
}

{/*    return (
        <div>
            <Row>
                <h3>Current Weather:</h3>
                
                <h1>Temperature: {Math.round(currentWeather.temp)}°{isFahrenheit ? "F":"C"}</h1>
                <button onClick={toggleFahrenheit}>Convert to {isFahrenheit ? "Celsius" : "Fahrenheit"}</button>
            </Row>
            <Row>
                
                <p>Icon: <img src={currentWeather.icon}></img></p>
                
            </Row>
        </div>
    )
}*/}

export default OpenWeather;