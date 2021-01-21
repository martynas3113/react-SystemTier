import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.scss'

export class Header extends Component {
    render() {
        return (
            <div className="hero-bg">
            <Container fluid className="header-container">
                <Row className="header-wrap">
                    <Col lg={6} className="header-content">
                        <p>System tier</p>
                    </Col>
                    <Col lg={6} className="header-nav">
                        <nav className="nav-wrap">
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            
                            
                        </nav>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Header
