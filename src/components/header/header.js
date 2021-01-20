import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.scss'

export class Header extends Component {
    render() {
        return (
            <Container className="header-container">
                <Row className="header-wrap">
                    <Col className="header-content">
                        <p>System tier</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header
