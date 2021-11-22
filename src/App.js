import './App.css';
import React, { useState } from 'react';
import {Container, Col, Row} from 'reactstrap';
import OpenWeather from './components/OpenWeather';
import Ticket from './components/Ticketmaster';
import Nasa from './components/Nasa';
import Header from './components/Header';

function App() {
  {/* When opening the page, it grabs the users location and shows results from API's that are in components. */}
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  const getLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  return (
    <><Container>
      <Row>
        <Col>
          <h1>Welcome to the Weather App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={getLocation}>Get Location</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Latitude: {latitude}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Longitude: {longitude}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <OpenWeather latitude={latitude} longitude={longitude} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Ticket latitude={latitude} longitude={longitude} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Nasa latitude={latitude} longitude={longitude} />
        </Col>
      </Row>
    </Container><div className="App">
        <Header />

        <button className='btnSize1' onClick={getLocation}>Get Location</button>
        <Ticket />
      </div></>
  );
}

export default App;