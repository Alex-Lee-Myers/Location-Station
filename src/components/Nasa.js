{/*// fetch NASA Api and return satellite image matching latitude and longitude, if no image is found, return default image, if error, return error message
import  React, {useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const Nasa = (props) => {
    const [error, setError] = useState(false);

    // fetch from NASA API
    // const getNasaImage = async () => {
        const [data, setData] = useState([]);
            
        const nasaKey = "ikkhQdcsxgyzwJGeXOKNvAhjidPDUtK1jKnzdxux"
        const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&date=2019-06-03&api_key=${nasaKey}`; 
        const fetchphoto = async () => {    
            const response = await fetch(url);
                const data= await response.json();
                setData(data);
            }

    useEffect(() => { 
            fetchphoto();
        }, []);
        
    return (
        <MDBContainer className="text-center">
        <MDBCol size="12">
            <MDBBtn onClick={() =>{fetchphoto()}}>Get NASA Image</MDBBtn>
            {data.media_type === "image" ? (
                    <img className="nasaPhoto" src={data.url} alt={"NASA Image"} style={{width: 400, height: 400}} />  ) : 
                ( <iframe
                    title="locationImg"
                    src={data.url}
                    frameBorder="0"
                   // gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />) }
            {/* {error ? <p>Error fetching NASA image</p> : null} */}
//         </MDBCol>
//         </MDBContainer> */}
//     );
// }


 import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


const [imgData, setImgData] = useState(null);

const Nasa=(() => {
    fetchImg();
            const nasaKey = "ikkhQdcsxgyzwJGeXOKNvAhjidPDUtK1jKnzdxux"
        const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.longitude}&lat=${props.latitude}&date=2019-06-03&api_key=${nasaKey}`;

    async function fetchImg() {
        const res = await fetch(url);
        const data = await res.json();
        setImgData(data);
    }
}, []);

    
return (
    

    <MDBContainer className="text-center">
        <MDBCol size="8">
            <MDBBtn onClick={() =>{fetchphoto()}}>Get NASA Image</MDBBtn>
    
    {imgData.media_type === "image" ? (
    <img className="showMe"src={imgData.url} alt={"NasaBroke"} style={{width: 400, height: 400}}  /> ) : (

        <iframe
         title="locationImg"
         src={data.url}
        frameBorder="0"
        // gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photos" />
    )}



      </MDBCol>
        </MDBContainer>
)


export default Nasa;