import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './services.scss';

class Services extends Component {
    render() {
        return (
            <Container className="services-container">
                <Row className="services-wrap">
                    <Col className="services-text">
                        <h2>Services we provide</h2>
                    </Col>
                    <Col className="services-cards">
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Services
