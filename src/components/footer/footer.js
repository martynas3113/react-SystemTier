import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.scss';
import { IoLogoFacebook,IoLogoLinkedin } from 'react-icons/io'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-bg">
                <Container className="footer-container">
                    <Row className="footer-wrap">
                        <Col lg={12} className="footer">
                           <div className="footer-str">Peremohy St, 70B,<span> Zaporizhzhia, Ukraine</span>
                            </div>
                            <div className="footer-numbers">
                                <div className="number"><span>GBR</span>+44 208 089 9049</div>
                                <div className="number"><span>GBR</span>+44 208 089 9049</div>
                                <div className="number"><span>GBR</span>+44 208 089 9049</div>
                            </div>
                            <div className="footer-socials">
                                <a href="#"><IoLogoFacebook/></a>
                                <a href="#"><IoLogoLinkedin/></a>
                                <a href="#"><IoLogoLinkedin/></a>
                                <a href="#"><IoLogoLinkedin/></a>
                                <a href="#"><IoLogoLinkedin/></a>
                            </div>
                            <div className="footer-copy">
                                <p>Copyright ©{new Date().getFullYear()} all rights reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer
