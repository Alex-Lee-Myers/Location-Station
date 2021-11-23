import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarLink,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBNavbarToggler,
} from 'mdb-react-ui-kit';

const Header = (props) => {
    const [showNavCentred, setShowNavCentred] = useState(false);

    return (

        <MDBNavbar 
            expand='lg' 
            dark bgColor='Primary'
            className='header'
            scrolling
            transparent
            style={{ 
                marginTop: "65px"
            }}
            >
            <MDBContainer fluid>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavCentred(!showNavCentred)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
                    <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href={`https://maps.google.com/maps?ll=${props.latitude},${props.longitude},&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3`} target='_blank'>
                                <text className='text-white'> Google Maps <MDBIcon icon='map-marker-alt' />
                                </text>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>

                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                <text><span>
                                    <b>Coordinates:</b> {' '}{' '}{props.latitude},{' '} {props.longitude}
                                </span></text>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>




                    <MDBNavbarNav fullWidth={false} className='flex-row'>
                        <MDBNavbarItem>
                            <MDBNavbarLink
                                className='nav-link ps-2'
                                href='https://github.com/Alex-Lee-Myers/teamGit'
                                rel='nofollow'
                                target='_blank'
                            >
                                <MDBIcon fab icon='github' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;