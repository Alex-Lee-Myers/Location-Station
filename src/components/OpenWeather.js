import { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBCollapse,
} from "mdb-react-ui-kit";

const OpenWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState({
        temp: 0,
        icon: "",
        description: "",
    });
    const getCurrentWeather = async () => {
        const owAPIKey = "2de6705d788ff0ce77cd693b4a3cf03d";
        const owAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${owAPIKey}`;
        await fetch(owAPI)
        .then((res) => {
            const response = res.json();
            return response;
        })
        .then((data) => {
            setCurrentWeather({
            temp: data.main.temp - 273.15, //default to Celsius
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            description: data.weather[0].description,
            });
        })
        .catch((err) => console.log(err));
    };

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const [isFahrenheit, setIsFahrenheit] = useState(false);
const toggleFahrenheit = () => {
    setIsFahrenheit(!isFahrenheit);
    setCurrentWeather((prevWeather) => ({
        ...prevWeather,
        temp: !isFahrenheit
        ? currentWeather.temp * (9 / 5) + 32
        : (currentWeather.temp - 32) * (5 / 9),
    }));
};

let showToggleFahrenheit = false;
if (currentWeather.temp !== 0) {
    showToggleFahrenheit = true;
}

let showToggleWeather = true;
if (currentWeather.temp !== 0) {
    showToggleWeather = false;
}

const [showShow, setShowShow] = useState(false);
const toggleShow = () => setShowShow(!showShow);

  // show weather and toggle between fahrenheit and celsius in return
return (
<MDBContainer className="text-center">

    <MDBRow>
        <MDBCol size="12">
            <img src={currentWeather.icon} alt={currentWeather.description}/>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol size="12" className="text-center">
            {showToggleWeather && (
            <MDBBtn
                className="text-center"
                onClick={(e) => {
                getCurrentWeather();
                toggleShow();
            }}
            >
            Get Weather
            </MDBBtn>
            )}
            {showToggleFahrenheit && (
            <MDBBtn
                className="text-center"
                color="secondary"
                    onClick={toggleFahrenheit}
            >
                {isFahrenheit ? "Change to Celsius" : "Change to Fahrenheit"}
            </MDBBtn>
            
            )}
        </MDBCol>
    </MDBRow>

        <br />

        <MDBListGroup style={{ 
            minWidth: "16rem",
            maxWidth: "16rem",
            margin: "auto",
            textAlign: "center",
        }}>
            <MDBCollapse show={showShow}>
                <MDBListGroupItem>
                    <b>Description</b>:{" "}
                    {capitalizeFirstLetter(currentWeather.description)}
                </MDBListGroupItem>
                <MDBListGroupItem>
                    <b>Temperature</b>: {currentWeather.temp.toFixed(1)}°
                    {isFahrenheit ? "F" : "C"}
                </MDBListGroupItem>
            </MDBCollapse>
        </MDBListGroup>

    </MDBContainer>
);
};

export default OpenWeather;
