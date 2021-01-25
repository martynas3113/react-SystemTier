import React, { Component } from 'react';
import './casestudies.scss';
import { Col, Container, Row } from 'react-bootstrap';

export class CaseStudies extends Component {
    render() {
        return (
            <Container fluid className="studies-container">
                <h2 className="case-title">Case studies</h2>
                <Row className="studies-wrap">
                    <Col xl={{span:3 , offset:2 }} lg={{span:4 , offset:1}} md={{span:9 , offset:2}} sm={{span:9, offset:2}} xs={{span:9, offset:1}} className="case-left">
                        <h3 className="project-title"> FastCoinExchange</h3>
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt rem tenetur eum harum molestias eligendi sit autem perferendis ex?</p>
                        <p className="project-techn">Technologies used: Python(Django), Kafka, etc.</p>
                        <div className="case-stat">
                          <p className="stat-number">5 Minutes</p>
                          <p className="stat-text">Lorem ipsum dolor sit amet.</p>  
                        </div>
                        <div className="case-stat">
                          <p className="stat-number">5 Minutes</p>
                          <p className="stat-text">Lorem ipsum dolor sit amet.</p>  
                        </div>
                    </Col>
                    <Col xl={{span:4 , offset:1}} lg={{span:6 , offset:1}} md={{span:7 , offset:2}} sm={{span:6,offset:2}} xs={{span:10, offset:1}}  className="case-right">
                        <div className="img-holder">
                            <img src="./images/exchange.png" alt=""/>
                        </div>
                    </Col>
                   
                </Row>
                <Row className="bullet-wrap">
                    <Col xl={{offset:7}} lg={{offset:7}} md={12} xs={{span: 8,  offset:1}} className="bullet-points">
                    <div className="case-bullet">
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CaseStudies
