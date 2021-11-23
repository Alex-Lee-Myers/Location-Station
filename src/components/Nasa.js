import { React, useState, useEffect } from 'react';

const Nasa = (props) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const nasaKey = "ikkhQdcsxgyzwJGeXOKNvAhjidPDUtK1jKnzdxux"
    const lonShort = Math.trunc(props.longitude);
    const latShort = Math.trunc(props.latitude);
    const mainUrl = 'https://api.nasa.gov/planetary/earth/imagery';//api.nasa.gov/planetary/earth/imagery'
    const url = `${mainUrl}?lon=${lonShort}&lat=${latShort}&date=2019-06-03&api_key=${nasaKey}`;
    console.log(url);

    // fetch from NASA API
    const getNasaImage = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    const runNasa = () => {
        useEffect(() => {
            if(props.longitude && props.latitude) {
                getNasaImage();
            }
        }, [props.longitude, props.latitude]);
    };

    return (
        <div>
            <button onClick={(e) => {runNasa();}}>Get NASA Image </button>
            {data ? <img src={data} alt="NASA Image" /> : null}
            {error ? <p>Error fetching NASA image</p> : null}
    
        </div>
    )
}

export default Nasa;