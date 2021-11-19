import './App.css';
import React from 'react';
import Reactstrap from 'reactstrap';
import OpenWeather from './components/OpenWeather';
import Ticket from './components/Ticketmaster';
import Nasa from './components/Nasa';

function App() {
  // function showLocation to grab and store a location from the user
  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapLink = `https://www.google.com/maps/search/${latitude},${longitude}`;
    console.log(mapLink);
    console.log(latitude)
    console.log(longitude)
  }

  // function showError to display an error message
  function showError(error) {
    console.warn(error.message);
  }

  // function getLocation to call the showLocation function and the showError function
  function getLocation() {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  }

  return (
    <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <Ticket />
    </div>
  );
}

export default App;
