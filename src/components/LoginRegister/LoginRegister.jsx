import {useState} from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

function LoginRegister() {

    const [justifyActive,
        setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick('tab1')}
                        active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick('tab2')}
                        active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
                <MDBTabsPane open={justifyActive === 'tab1'}>
                    <Login/>
                </MDBTabsPane>
                <MDBTabsPane open={justifyActive === 'tab2'}>
                    <Register/>
                </MDBTabsPane>
            </MDBTabsContent>
        </MDBContainer>
    );
}

export default LoginRegister;