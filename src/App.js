import "./App.css";
import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import OpenWeather from "./components/OpenWeather";
import Ticket from "./components/Ticketmaster";
import Nasa from "./components/Nasa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";

function App() {
  {
    /* When opening the page, it grabs the users location and shows results from API's that are in components. */
  }
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  if (latitude !== "" && longitude !== "") {
    return (
      <MDBContainer className="App">
        <div className="d-flex">
        <br />
        {/* MDB background image that covers whole page and keeps it scrollable */}
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://i.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100vw",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)"
            }}
          >
            <br />
            <Header latitude={latitude} longitude={longitude} />
            <br />
            
            <MDBRow>
              <MDBCol size="2">
              </MDBCol>
              <MDBCol size="8">
              <div className='d-flex justify-content-center align-items-stretch'>
            <MDBCardGroup className="overflow-auto" width="99%" height="auto">

              <MDBCard>
                <MDBCardHeader className="text-center">
                  <h3>Weather</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="text-center"> Check your local weather here. </p>
                  <MDBCardTitle className="text-center">
                  </MDBCardTitle>
                  <OpenWeather latitude={latitude} longitude={longitude} />
                </MDBCardBody>
              </MDBCard>



              <MDBCard>
                <MDBCardHeader className="text-center">
                  <h3>Events Nearby</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="text-center"> View upcoming local events in your area. </p>
                  <MDBCardTitle className="text-center">
                    <Ticket latitude={latitude} longitude={longitude} />
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>



              <MDBCard>
                <MDBCardHeader className="text-center">
                  <h3>Sky View</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="text-center"> A satellite image of your location is available here. </p>
                  <MDBCardTitle className="text-center">
                    <Nasa latitude={latitude} longitude={longitude} />
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>

            </MDBCardGroup>
            </div>
            </MDBCol>
            <MDBCol size="2">
            </MDBCol>

            </MDBRow>
            

            <MDBRow>
              <MDBCol>
                <Footer />
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        </div>
      </MDBContainer>
    );
  } else {

    return (
      <MDBContainer>
        <div
          className="text-center bg-image"
          style={{
            backgroundImage:
              "url('https://w.wallhaven.cc/full/2k/wallhaven-2kol9m.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <div
            className="mask hover-overlay"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100% ",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Get Your Location To Get Started</h1>
                <h4 className="mb-3 p-3">
                  Gain access to your local weather, events, and an image of
                  your current place in the world.
                </h4>
                <a
                  className="btn btn-lg text-dark btn-warning"
                  onClick={getLocation}
                  role="button"
                >
                  Get Location Here!
                </a>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default App;
