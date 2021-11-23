import { React, useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBCardImage } from 'mdb-react-ui-kit';

const Nasa = (props) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const nasaKey = "ikkhQdcsxgyzwJGeXOKNvAhjidPDUtK1jKnzdxux"
    const lonShort = Math.trunc(props.longitude);
    const latShort = Math.trunc(props.latitude);
    const mainUrl = 'https://api.nasa.gov/planetary/earth/imagery';//api.nasa.gov/planetary/earth/imagery'
    const url = `${mainUrl}?lon=${lonShort}&lat=${latShort}&date=2019-06-03&api_key=${nasaKey}`;

    // fetch from NASA API and set data after hitting button in return
    useEffect(() => {
        if (latitude === "") {
          const getLat = (pos) => setLatitude(pos.coords.latitude);
          const latitude = navigator.geolocation.getCurrentPosition(getLat);
        }
        if (longitude === "") {
          const getLng = (pos) => setLongitude(pos.coords.longitude);
          const longitude = navigator.geolocation.getCurrentPosition(getLng);
        }
      }, [latitude, longitude]);
    
      const fetchResults = () => {
        fetch(url)
          .then((res) => res)
          .then((res) => {
            console.log(res);
            setData(res.url);
          })
    
          .catch((err) => console.log(err));
      };
    
      useEffect(async () => {
        if (latitude !== "" && longitude !== "") {
          await fetchResults();
        }
        }, [data, latitude, longitude]);

    return (
        <MDBContainer className = "nasa-container">
            <MDBRow>
                <MDBCardImage
                    className="img-fluid"
                    src={data}
                    waves
                />
            </MDBRow>
        </MDBContainer>
    )
}

export default Nasa;