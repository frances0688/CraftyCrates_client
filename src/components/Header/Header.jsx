import React, {useContext, useState} from 'react';
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
import {UserContext} from '../../context/UserContext/UserState';

const Header = () => {
    const [open,
        setOpen] = useState(false);

    const {user, logout} = useContext(UserContext);

    return (
        <React.Fragment>
            <MDBNavbar expand='lg'>
                <MDBContainer fluid="true">
                    <MDBNavbarBrand href='/'>
                        <img src='./images/CraftyCratesLogo.png' height='40' alt='logo'/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={() => setOpen(!open)}
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <MDBIcon fas icon='bars'/>
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={open}>
                        <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0 justify-content-end'>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/crates'>Pick a Crate</MDBNavbarLink>
                            </MDBNavbarItem>
                            {user
                                ? (
                                    <React.Fragment>
                                        <MDBNavbarItem>
                                            <MDBNavbarLink href='/profile'>{user.user_name}</MDBNavbarLink>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem>
                                            <MDBNavbarLink href='/login' onClick={logout}>Logout</MDBNavbarLink>
                                        </MDBNavbarItem>
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        <MDBNavbarItem>
                                            <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
                                        </MDBNavbarItem>
                                    </React.Fragment>
                                )}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </React.Fragment>
    );
}

export default Header