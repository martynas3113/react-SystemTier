import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./hero.scss"

export class Hero extends Component {
    render() {
        return (
            <div className="hero-bg">
                <Container  className="hero-container">
                    <Row className="hero-wrap">
                        <Col className="hero-content">
                            <h1>BESPOKE WEB AND MOBILE DEVELOPMENT SOLUTIONS FOR YOUR BUSINESS</h1>
                            <p>Reliable technical partner for more than 500 companies since 2006</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Hero
