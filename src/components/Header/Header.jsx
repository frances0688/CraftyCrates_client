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
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

const Header = () => {
    const [openBasic,
        setOpenBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand='lg'>
                <MDBContainer fluid="true">
                    <MDBNavbarBrand href='#'>
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
                                <MDBNavbarLink href='#'>Hobbies</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>My Profile</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div
                className='p-5 text-center bg-image'
                style={{
                backgroundImage: "url('../../../public/images/CraftyCrates.png')",
                height: '60vh'
            }}>
                <div className='mask'>
                    <div className='d-flex h-100'>
                        <div className='text-white'>
                            <MDBBtn btn tag="a" size="lg">
                                Order Now
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header