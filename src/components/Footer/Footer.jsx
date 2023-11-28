import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import {MDBFooter, MDBIcon} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter light className='text-center fixed-bottom' bgColor='light'>

            <section
                className='d-sm-flex  justify-content-lg-between text-md-center text-sm-center p-4'>
                <div
                    className='me-5 d-none d-lg-block d-sm-block justify-content-center text-muted'>
                    Special Requests or Questions? {' '}
                    <Link
                        className='text-dark'
                        to='/contact-us'
                        style={{
                        textDecoration: 'underline'
                    }}>
                        Contact Us!
                    </Link>
                </div>
                <div className='me-4 d-none d-lg-block d-sm-block justify-content-center'>
                    <span className="me-4 text-muted">Connect with us:</span>
                    <a href='#' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon='facebook-f'/>
                    </a>
                    <a href='#' target="_blank" rel="noreferrer" className='me-4 text-reset'>
                        <MDBIcon fab icon='instagram'/>
                    </a>
                    <a href='#' target="_blank" className='me-4 text-reset'>
                        <MDBIcon fab icon='linkedin'/>
                    </a>
                </div>
            </section>

            <div id='heartDiv' className='text-center p-3 text-muted'>
                Developed with {' '}
                <span id='heart'>&hearts;</span>
                {' '}
                by:{' '}
                <a
                    className='text-dark'
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/frances-morales/'
                    style={{
                    textDecoration: 'underline'
                }}>
                    Frances Morales
                </a>

            </div>
        </MDBFooter>
    )
}

export default Footer