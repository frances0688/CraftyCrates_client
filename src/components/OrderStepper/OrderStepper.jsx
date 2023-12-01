import React, {useEffect, useContext} from 'react';
import {MDBContainer, MDBCol} from 'mdb-react-ui-kit';
import StepWizard from 'react-step-wizard';
import {Stepper, Step} from 'react-form-stepper';
import Theme from './Theme/Theme';
import Box from './Box/Box';
import Product from './Product/Product';
import StepButtons from './StepButtons';
import {StepContext} from '../../context/StepContext/StepState';
import './OrderStepper.scss'

const OrderStepper = () => {

    const {currentStep} = useContext(StepContext);

    useEffect(() => {
        console.log('Current Step:', currentStep);
    }, [currentStep]);

    return (
        <React.Fragment>
            <MDBContainer className='py-5 h-100'>
                <MDBCol className='p-5'>
                    <h1>Pick Your Crate</h1>
                    <Stepper activeStep={currentStep - 1}>
                        <Step label='Themes'/>
                        <Step label='Crate Size'/>
                        <Step label='Products'/>
                    </Stepper>

                    <StepWizard
                        className='d-flex wizard'
                        activeStep={currentStep - 1}
                        nav={< StepButtons totalSteps = {
                        3
                    } />}>
                        <Theme/>
                        <Box/>
                        <Product/>
                    </StepWizard>
                </MDBCol>
            </MDBContainer>
        </React.Fragment>
    );
};

export default OrderStepper;
