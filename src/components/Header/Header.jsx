import React, {useState} from 'react';
import "./Header.scss"
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

const Header = () => {
    const [openBasic,
        setOpenBasic] = useState(false);

    return (
        <React.Fragment>
            <MDBNavbar expand='lg'>
                <MDBContainer fluid="true">
                    <MDBNavbarBrand href='/'>
                        <img src='/images/CraftyCratesLogo.png' height='40' alt='logo' loading='lazy'/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={() => setOpenBasic(!openBasic)}
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <MDBIcon fas icon='bars'/>
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openBasic}>
                        <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/themes'>Hobbies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/profile'>Profile</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/contact'>Contact Us</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </React.Fragment>
    );
}

export default Header