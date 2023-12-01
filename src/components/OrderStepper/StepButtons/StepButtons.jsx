import {MDBContainer, MDBBtn, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router-dom';
import {StepContext} from '../../../context/StepContext/StepState';
import {useContext} from 'react';
import {OrderContext} from '../../../context/OrderContext/OrderState';
import './StepButtons.scss';

function StepButtons(props) {
    const {currentStep, previousStep, nextStep} = useContext(StepContext);
    const {createOrder} = useContext(OrderContext);
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');

    const handleBack = () => {
        props.previousStep()
        previousStep();
    };

    const handleNext = () => {
        const CombinationId = JSON.parse(localStorage.getItem('CombinationId'));
        if (currentStep === props.totalSteps && isAuthenticated) {
            const order = createOrder(CombinationId);
            if (order) {
                console.log('Order created!');
                localStorage.removeItem("selectedThemeId");
                localStorage.removeItem("selectedBoxId");
                localStorage.removeItem("CombinationId");
                navigate('/profile')
            }
        } else if (currentStep === props.totalSteps && !isAuthenticated) {
            navigate('/login');
        } else {
            nextStep();
            props.nextStep()
        }
    };

    return (
        <MDBContainer>
            <MDBRow className='py-3'>
                {currentStep > 1 && (
                    <MDBCol className='text-start'>
                        <MDBBtn onClick={handleBack} color='dark' outline>
                            Back
                        </MDBBtn>
                    </MDBCol>
                )}
                <MDBCol className='text-end'>
                    {currentStep < props.totalSteps && (
                        <MDBBtn onClick={handleNext} color='primary'>
                            {currentStep === props.totalSteps
                                ? 'Submit'
                                : 'Next'}
                        </MDBBtn>
                    )}
                    {currentStep === props.totalSteps && (
                        <MDBBtn
                            type='submit'
                            onClick={handleNext}
                            color={isAuthenticated
                            ? 'success'
                            : 'danger'}>
                            {isAuthenticated
                                ? 'Order Now'
                                : 'Login to Order'}
                        </MDBBtn>
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default StepButtons;
