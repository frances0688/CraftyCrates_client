import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import {useNavigate} from 'react-router-dom';
import {MDBInput, MDBBtn, MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';

function Contact() {

    const form = useRef();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const navigate = useNavigate();

    const sendEmail = async(e) => {

        try {
            e.preventDefault();
            const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            console.log(res.text);
        } catch (error) {
            console.error(error.text);
        }
    };

    return (
        <MDBContainer className="my-lg-5 my-sm-0">
            <MDBCol className="text-center">
                <MDBRow id='contact-row' className='justify-content-center align-items-center'>
                    <MDBCol>
                        <div className="px-3 py-4 p-md-5 mx-md-4">
                            <h3
                                className="mb-4"
                                style={{
                                textDecoration: 'underline'
                            }}>Contact Us</h3>
                            <p
                                className="small mb-0"
                                style={{
                                fontSize: '1em'
                            }}>

                                If you have any special requests, questions or concerns regarding our products,
                                please send us a message by filling out the form below.
                                <br></br>
                                We will respond within 24 hours.

                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <form
                        className='px-3 py-4 p-md-10'
                        ref={form}
                        onSubmit={sendEmail}
                        style={{
                        border: "none"
                    }}>
                        <MDBInput
                            required
                            type="text"
                            name="user_name"
                            wrapperClass='mb-4'
                            label='Full Name'/>
                        <MDBInput
                            required
                            type='email'
                            name="user_email"
                            wrapperClass='mb-4'
                            label='Email Address'/>
                        <MDBInput
                            required
                            textarea='true'
                            rows={4}
                            name="message"
                            wrapperClass='mb-4'
                            label='Message'/>

                        <MDBBtn type='submit' value="Send" className='mb-4'>
                            Send Email
                        </MDBBtn>
                    </form>
                </MDBRow>
            </MDBCol>
        </MDBContainer>
    );
};

export default Contact