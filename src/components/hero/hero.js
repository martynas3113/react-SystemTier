import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./hero.scss"

export class Hero extends Component {
    render() {
        return (
            <Container fluid className="hero-container">
                <Row className="hero-wrap">
                    <Col className="hero-content">
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Hero
