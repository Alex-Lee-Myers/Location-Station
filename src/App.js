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
      <MDBContainer>
        <MDBRow>
          <h1 className="text-center p-3">Geographical Location</h1>
          <MDBCol size="3">
            <h3 className="latClass">Latitude: </h3>
          </MDBCol>

          <MDBCol size="3">
            <h4 className="latCompClass">{latitude}</h4>
          </MDBCol>

          <MDBCol size="3">
            <h3 className="lonClass">Longitude: </h3>
          </MDBCol>

          <MDBCol size="3">
            <h4 className="lonCompClass">{longitude}</h4>
          </MDBCol>
        </MDBRow>

        <br />

        <MDBRow>
          <MDBCol size="4">
            <MDBCard>
              <MDBCardHeader className="text-center">
                <h3>OpenWeather API</h3>
              </MDBCardHeader>
              <MDBCardBody>
              <p className="text-center"> Check your local weather here. </p>
                <MDBCardTitle className="text-center">
                </MDBCardTitle>
                <OpenWeather latitude={latitude} longitude={longitude} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="4">
            <MDBCard>
              <MDBCardHeader className="text-center">
                <h3>TicketMaster API</h3>
              </MDBCardHeader>
              <MDBCardBody>
              <p className="text-center"> View upcoming local events in your area. </p>
                <MDBCardTitle className="text-center">
                  <Ticket latitude={latitude} longitude={longitude} />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="4">
            <MDBCard>
              <MDBCardHeader className="text-center">
                <h3>NASA API</h3>
              </MDBCardHeader>
              <MDBCardBody>
              <p className="text-center"> A sattelite image of your location is available here. </p>
                <MDBCardTitle className="text-center">
                  <Nasa latitude={latitude} longitude={longitude} />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <Footer />
          </MDBCol>
        </MDBRow>

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
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100% ",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
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
