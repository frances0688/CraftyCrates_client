import React from 'react'
import {MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';

const Register = () => {
    const handleSubmit = (e, values) => {
        e.preventDefault()
        console.log("success:", values);
    }
    return (
        <React.Fragment>
            <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                    className='d-flex justify-content-between mx-auto'
                    style={{
                    width: '40%'
                }}>
                    <MDBBtn
                        tag='a'
                        color='none'
                        className='m-1'
                        style={{
                        color: '#1266f1'
                    }}>
                        <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn
                        tag='a'
                        color='none'
                        className='m-1'
                        style={{
                        color: '#1266f1'
                    }}>
                        <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn
                        tag='a'
                        color='none'
                        className='m-1'
                        style={{
                        color: '#1266f1'
                    }}>
                        <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn
                        tag='a'
                        color='none'
                        className='m-1'
                        style={{
                        color: '#1266f1'
                    }}>
                        <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
            </div>
            <form>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Name'
                    id='user_name'
                    type='text'
                    name='user_name'
                    defaultValue=""
                    onChange=""/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Address'
                    id='address'
                    type='text'
                    name='address'
                    defaultValue=""
                    onChange=""/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Email'
                    id='email'
                    type='email'
                    name='email'
                    defaultValue=""
                    onChange=""/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    id='password'
                    type='password'
                    name='password'
                    defaultValue=""
                    onChange=""/>

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox
                        name='flexCheck'
                        id='flexCheckDefault'
                        label='I have read and agree to the terms'/>
                </div>

                <MDBBtn className="mb-4 w-100" type='submit' onClick={handleSubmit}>Sign up</MDBBtn>
            </form>
        </React.Fragment>
    )
}

export default Register