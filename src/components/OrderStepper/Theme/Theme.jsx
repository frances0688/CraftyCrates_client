import React, {useContext, useEffect} from 'react'
import {ThemeContext} from '../../../context/ThemeContext/ThemeState';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBRipple,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage
} from 'mdb-react-ui-kit';

const Theme = () => {
    const {themes, getThemes} = useContext(ThemeContext);
    useEffect(() => {
        getThemes();
    }, []);

    const onClick = (themeId) => {
        localStorage.setItem('selectedThemeId', themeId);
        console.log(`Theme ${themeId} selected!`);
    };

    return (
        <React.Fragment>
            <MDBContainer className="container">
                <MDBRow className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {themes.map((theme) => (
                        <MDBCard key={theme.id} onClick={() => onClick(theme.id)}>
                            <MDBCardBody>
                                <MDBCardTitle>{theme.theme_name}</MDBCardTitle>
                                <MDBRipple
                                    rippleColor='light'
                                    rippleTag='div'
                                    className='bg-image hover-overlay'>
                                    <MDBCardImage src={theme.image} fluid alt='...'/>
                                    <a>
                                        <div
                                            className='mask'
                                            style={{
                                            backgroundColor: 'rgba(251, 251, 251, 0.15)'
                                        }}></div>
                                    </a>
                                </MDBRipple>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

export default Theme