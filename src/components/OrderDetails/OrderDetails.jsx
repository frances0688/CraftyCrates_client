import React, {useContext, useEffect} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText
} from 'mdb-react-ui-kit';
import {OrderContext} from '../../context/OrderContext/OrderState';

const OrderDetails = () => {
    const {orders, getOrders} = useContext(OrderContext);
    useEffect(() => {
        getOrders();
    }, []);

    return (
        <React.Fragment>
            <MDBContainer className="container">
                <MDBRow className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {orders.map((order) => (
                        <MDBCard key={order.id}>
                            <MDBCardBody>
                                <MDBCardTitle>{order.Combination.Theme.theme_name}</MDBCardTitle>
                                <MDBCardSubTitle>{order.Combination.Box.size}</MDBCardSubTitle>
                                <MDBCardSubTitle>{order.Combination.Box.price}</MDBCardSubTitle>
                                <MDBCardText>Order Created: {order.createdAt}</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

export default OrderDetails