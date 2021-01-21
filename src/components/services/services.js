import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import './services.scss';

class Services extends Component {
    render() {
        return (
            <Container fluid className="services-container">
                <Row className="services-wrap">
                    <Col xl={{span:2, offset:2}} lg={12} className="services-text">
                        <h2>Services we provide</h2>
                    </Col>
                    <Col xl={8} lg={12} className="services-cards">
                        <Card className="card">
                            <Card.Header className="card-header">
                            <img src="./images/webdev.svg" alt="web"/>
                            <Card.Title className="card-title">Web development</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Header className="card-header">
                            <img src="./images/mobile.svg" alt="web"/>
                            <Card.Title className="card-title">Mobile development</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Header className="card-header">
                            <img src="./images/consulting.svg" alt="web"/>
                            <Card.Title className="card-title">It consulting</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Header className="card-header">
                            <img src="./images/quality.svg" alt="web"/>
                            <Card.Title className="card-title">Quality assurance</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body">
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Header className="card-header">
                            <img src="./images/design.svg" alt="web"/>
                            <Card.Title className="card-title">Design solutions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Services
