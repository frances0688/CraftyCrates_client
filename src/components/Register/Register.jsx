import React, {useContext} from 'react'
import {MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import {UserContext} from '../../context/UserContext/UserState';

const Register = () => {
    const {registerForm, setRegisterFormValue, register} = useContext(UserContext);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setRegisterFormValue(name, value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("success", registerForm)
        register();
    };

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
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
                <MDBInput
                    wrapperClass='mb-4'
                    label='Name'
                    type='text'
                    name='user_name'
                    value={registerForm.user_name}
                    onChange={handleInputChange}
                    required/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Address'
                    type='text'
                    name='shipping_address'
                    value={registerForm.shipping_address}
                    onChange={handleInputChange}
                    required/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Email'
                    type='email'
                    name='email'
                    value={registerForm.email}
                    onChange={handleInputChange}
                    required/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    type='password'
                    name='password'
                    value={registerForm.password}
                    onChange={handleInputChange}
                    required/>

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' label='I have read and agree to the terms'/>
                </div>

                <MDBBtn className="mb-4 w-100" type='submit'>Sign up</MDBBtn>
            </form>
        </React.Fragment>
    )
}

export default Register