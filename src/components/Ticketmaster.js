import React, {useState} from 'react';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBCollapse } from 'mdb-react-ui-kit';

const Ticket = (props) => {
    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");

    let ticketMaster = () => {
        fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=US&apikey=mLcjBvp47aw1ldczDmzEw7AwDtfRWYAs&latlong=${props.latitude},${props.longitude}`
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

    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    return (

        <MDBContainer className='ticketMaster'>
            <MDBRow>
            <MDBCol size='12'>
                <MDBBtn className='btnSize' color='primary' onClick={(e) => {ticketMaster(); toggleShow();}}>Nearby Events</MDBBtn>
            </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='12'>
                <MDBCollapse show={showShow}>
                <MDBListGroup className='list-group-flush' style={{ 
                    margin: 'auto',
                    textAlign: 'center'
            }}>
                    <br />
                        <MDBListGroupItem className='item'>{info}</MDBListGroupItem>
                        <MDBListGroupItem className='item'>{info2}</MDBListGroupItem>
                        <MDBListGroupItem className='item'>{info3}</MDBListGroupItem>
                        <MDBListGroupItem className='item'>{info4}</MDBListGroupItem>
                        <MDBListGroupItem className='item'>{info5}</MDBListGroupItem>
                </MDBListGroup>
                <br />
                </MDBCollapse>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Ticket
