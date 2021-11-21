import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

const Ticket = () => {
    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");

    let ticketMaster = () => {
        //const latitude = position.coords.latitude;
        //const longitude = position.coords.longitude;
        fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=US&apikey=mLcjBvp47aw1ldczDmzEw7AwDtfRWYAs&latlong=39.666385,86.202591`
        )
        .then((res) => res.json())
        .then((data) => {
            setInfo(data._embedded.events[0].name);
            setInfo2(data._embedded.events[1].name);
            setInfo3(data._embedded.events[2].name);
            setInfo4(data._embedded.events[3].name);
            setInfo5(data._embedded.events[4].name);
        });
    };

    return (
        <Container className='nasa'>
            <Row>
                <Col md='6'>
                    <Button className='btnSize' color='primary' onClick={ticketMaster}>Nearby Events</Button>
                    <ul>
                        <li className='item'>{info}</li>
                        <li className='item'>{info2}</li>
                        <li className='item'>{info3}</li>
                        <li className='item'>{info4}</li>
                        <li className='item'>{info5}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Ticket