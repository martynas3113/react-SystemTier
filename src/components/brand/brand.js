import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particles from 'react-particles-js'
import './brand.scss'

class Brand extends Component {
    render() {
        return (
           <Container fluid className="brand-container">
               <Row className="brand-wrap">
                   <Col lg={{span:5 , offset: 1}} className="brand-particles">
                       <Particles/>
                   </Col>
                   <Col lg={{span:4, offset:1}} className="brand-text">
                       
                       <p className="brand-badge">More than software</p>
                       <h2>The future</h2>
                       <p className="brand-content">To help our clients fulfill their business goals, our software development process can include consulting, market research, design services, product viability analysis, and a lot more.</p>
                       <p className="brand-time">Top-Quality Solutions Since 2006</p>
                   </Col>
               </Row>
           </Container>
        )
    }
}

export default Brand
