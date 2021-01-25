import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.scss';

class Contact extends Component {
    render() {
        return (
            <div className="contact-bg">
                <div className="contact-image-bg"></div>
                <Container className="contact-container">
                    <Row className="contact-title-wrap">
                        <Col className="contact-title-holder">
                            <h2 className="contact-title">TURN YOUR IDEA INTO A SUCCESSFUL PRODUCT!</h2>
                        </Col>
                    </Row>
                    <Row className="button-wrap">
                        <Col className="button-holder">
                            <a className="contact-button" href="#">Contact</a>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Contact
