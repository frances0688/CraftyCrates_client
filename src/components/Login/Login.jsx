import React from 'react'
import {MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';

const Login = () => {
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
                    label='Email address'
                    id='form1'
                    type='email'
                    name='email'/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    id='form2'
                    type='password'
                    name='password'/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                        name='flexCheck'
                        value=''
                        id='flexCheckDefault'
                        label='Remember me'/>
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" type='submit' onClick={handleSubmit}>Sign in</MDBBtn>
            </form>
            <p className="text-center">Not a member?
                <a href="#!">Register</a>
            </p>
        </React.Fragment>
    )
}

export default Login