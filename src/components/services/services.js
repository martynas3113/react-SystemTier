import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './services.scss';

class Services extends Component {
    render() {
        return (
            <Container fluid className="services-container">
                <Row className="services-wrap">
                    <Col lg={{span:3, offset:1}} className="services-text">
                        <h2>Services we provide</h2>
                    </Col>
                    <Col lg={8} className="services-cards">
                       <a className="card" href="">
                           <div className="header">
                               <img src="./images/webdev.svg" style={{width: '50px'}} alt=""/>
                               <h3>Title</h3>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veniam.</p>
                       </a>
                       <a className="card" href="">
                           <div className="header">
                               <img src="./images/webdev.svg" style={{width: '50px'}} alt=""/>
                               <h3>Title</h3>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veniam.</p>
                       </a>
                       <a className="card" href="">
                           <div className="header">
                               <img src="./images/webdev.svg" style={{width: '50px'}} alt=""/>
                               <h3>Title</h3>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veniam.</p>
                       </a>
                       <a className="card" href="">
                           <div className="header">
                               <div className="icon">
                               <img src="./images/webdev.svg" style={{width: '50px'}} alt=""/>
                               </div>
                               <h3>Title</h3>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veniam.</p>
                       </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Services
