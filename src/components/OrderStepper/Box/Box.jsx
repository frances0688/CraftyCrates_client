import React, {useContext, useEffect} from 'react'
import {BoxContext} from '../../../context/BoxContext/BoxState';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBRipple,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText
} from 'mdb-react-ui-kit';

const Box = () => {
    const {boxes, getBoxes} = useContext(BoxContext);
    useEffect(() => {
        getBoxes();
    }, []);

    const onClick = (boxId) => {
        localStorage.setItem('selectedBoxId', boxId);
        console.log(`Theme ${boxId} selected!`);
    };

    return (
        <React.Fragment>
            <MDBContainer className="container">
                <MDBRow className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {boxes.map((box) => (
                        <MDBCard key={box.id} onClick={() => onClick(box.id)}>
                            <MDBCardBody>
                                <MDBCardTitle>{box.size}</MDBCardTitle>
                                <MDBRipple
                                    rippleColor='light'
                                    rippleTag='div'
                                    className='bg-image hover-overlay'>
                                    <MDBCardImage src={box.image} fluid alt='...'/>
                                    <a>
                                        <div
                                            className='mask'
                                            style={{
                                            backgroundColor: 'rgba(251, 251, 251, 0.15)'
                                        }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardText>{box.description}</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

export default Box