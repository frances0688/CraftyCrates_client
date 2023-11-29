import {useContext, useEffect} from 'react'
import './User.scss'
import {UserContext} from '../../context/UserContext/UserState';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBIcon,
    MDBCardBody,
    MDBCardImage,
    MDBCardSubTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

const User = () => {
    const {user, getUser} = useContext(UserContext);
    useEffect(() => {
        getUser();
    }, []);
    return (
        <MDBContainer className='vh100'>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol className="col-lg-6 mb-4 mb-lg-0">
                        <MDBCard
                            className="mb-3"
                            style={{
                            borderRadius: ".5rem"
                        }}>

                            <MDBRow className="g-0">
                                <div
                                    className="col-md-4 gradient-custom text-center text-white p-3 d-flex flex-column align-items-center"
                                    style={{
                                    borderTopLeftRadius: ".5rem",
                                    borderBottomLeftRadius: ".5rem;"
                                }}>
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar"
                                        className="img-fluid m-3"
                                        style={{
                                        width: "65%"
                                    }}/>
                                    <h1 className='py-2'>{user.user_name}</h1>
                                    <a href="/edit">
                                        <MDBIcon className="far fa-pen-to-square" size='lg'></MDBIcon>
                                    </a>
                                </div>
                                <MDBCol className="col-md-8">
                                    <MDBCardBody className="p-4">
                                        <MDBCardSubTitle>Information</MDBCardSubTitle>
                                        <hr className="mt-0 mb-3"></hr>
                                        <MDBRow className="pt-1">
                                            <MDBCol className="col-12 mb-3">
                                                <MDBCardText>Email</MDBCardText>
                                                <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol className="col-12 mb-3">
                                                <MDBCardText>Phone</MDBCardText>
                                                <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="pt-1">
                                            <MDBCol className="col-6 mb-3">
                                                <MDBCardText className='pt-3'>Shipping Address</MDBCardText>
                                                <MDBCardText className="text-muted">{user.shipping_address}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBContainer className="d-flex justify-content-start ps-0">
                                            <MDBBtn href="/orders">
                                                <MDBIcon fas icon="box" className='me-2' size='lg'/>View My Orders
                                            </MDBBtn>
                                        </MDBContainer>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    )
}

export default User