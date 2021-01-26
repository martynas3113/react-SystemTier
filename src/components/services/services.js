import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './services.scss';
import { cardsData } from './servicesData';

class Services extends Component {
    static defaultProps ={
        data: cardsData
    }
    render() {
        return (
            <Container fluid className="services-container">
                <Row className="services-wrap">
                    <Col xl={{span:2, offset:1}} lg={12} className="services-text">
                        <h2>Services we provide</h2>
                    </Col>
                    <Col xl={9} lg={12} s={12} xs={12} className="services-cards">
                        {this.props.data.data.map((item, idx) => 
                            <Card key={idx} className="card">
                            <Card.Header className="card-header">
                            <img src={item.img} alt="web"/>
                            <Card.Title className="card-title">{item.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Services
