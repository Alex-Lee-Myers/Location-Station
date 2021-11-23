import "./App.css";
import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import OpenWeather from "./components/OpenWeather";
import Ticket from "./components/Ticketmaster";
import Nasa from "./components/Nasa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

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
        <MDBListGroup style={{ minWidth: "22rem" }}>
          <MDBRow>
            <MDBCol>
              <MDBListGroupItem>Latitude: {latitude}</MDBListGroupItem>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <MDBListGroupItem>Longitude: {longitude}</MDBListGroupItem>
            </MDBCol>
          </MDBRow>
        </MDBListGroup>

        <MDBRow>
          <MDBCol>
            <OpenWeather latitude={latitude} longitude={longitude} />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <h1>Welcome to the TicketMaster App</h1>
            <Ticket latitude={latitude} longitude={longitude} />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <h1>Welcome to the NASA App</h1>
            <Nasa latitude={latitude} longitude={longitude} />
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
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('../assets/weatherHeaderBackground.png')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Get Your Location To Get Started</h1>
                <h4 className="mb-3">
                  Gain access to your local weather, local events, and a
                  satellite image of your current place in the world.
                </h4>
                <a
                  className="btn btn-outline-light btn-lg"
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
