import React from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';
import './Home.scss'

const Home = () => {
    return (
        <div
            className='p-5 text-center bg-image'
            style={{
            backgroundImage: "url('/images/CraftyCrates.png')",
            height: '60vh'
        }}>
            <div className='mask'>
                <div className='d-flex h-100'>
                    <div className='text-white'>
                        <MDBBtn id='homeBtn' tag="a" size="lg">
                            Order Now
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home