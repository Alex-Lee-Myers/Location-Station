import {useState} from 'react';
import {Row} from 'reactstrap';

const OpenWeather = (props) => {
    const apikey = "64bfb013b2e8badaa4709707c0aa580b";
    console.log("props.latitude:", props.latitude)
    console.log("props.longitude:", props.longitude)
    const owAPI = `api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apikey}`
    console.log("owAPI:", owAPI)

    const [isFahrenheit, setIsFahrenheit] = useState(false);
    const toggleFahrenheit = () => {
        setIsFahrenheit(!isFahrenheit);
    }

    const [currentWeather, setCurrentWeather] = useState({temp: ''});
    const getCurrentWeather = () => {
        fetch(owAPI)
        .then(response => response.json())
        .then(data => {
            setCurrentWeather({
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].description
            })
        })
    }
    getCurrentWeather();

    // show weather and toggle between fahrenheit and celsius in return
    return (
        <div>
            <Row>
                <h3>Current Weather:</h3>
                <h1>{Math.round(currentWeather.temp)}°</h1>
                <button onClick={toggleFahrenheit}>{isFahrenheit ? "Celsius" : "Fahrenheit"}</button>
            </Row>
            <Row>
                <p>{currentWeather.description}</p>
            </Row>
        </div>
    )
}

export default OpenWeather;