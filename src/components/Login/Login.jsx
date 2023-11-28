import React, {useContext} from 'react'
import {MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import {UserContext} from '../../context/UserContext/UserState';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const {loginForm, setLoginFormValue, login} = useContext(UserContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLoginFormValue(name, value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login();
        setTimeout(() => {
            navigate("/profile");
        }, 1000);
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
                    label='Email address'
                    type='email'
                    name='email'
                    value={loginForm.email}
                    onChange={handleInputChange}
                    required/>
                <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    type='password'
                    name='password'
                    value={loginForm.password}
                    onChange={handleInputChange}
                    required/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                        name='flexCheck'
                        value=''
                        id='flexCheckDefault'
                        label='Remember me'/>
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" type='submit'>Sign in</MDBBtn>
            </form>
            <p className="text-center">Not a member?
                <a href="#!">Register</a>
            </p>
        </React.Fragment>
    )
}

export default Login