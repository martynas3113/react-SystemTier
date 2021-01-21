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
                        <Particles id="particles-js" height="441px"  width="100%" params={{ 
                            particles: {
                                number:{
                                    value: 200,
                                    density:{
                                        enable: true,
                                        value_area: 1000
                                    }
                                },
                                color: {
                                    value: '#0f0f49'
                                },
                                opacity: {
                                    value: 5
                                },
                                size: {
                                    value: 3,

                                },
                                line_linked: {
                                    color: {
                                        value: '#0f0f49'
                                    },
                                    width: 2
                                }
                            }
                            }}/>
                   </Col>
                   <Col lg={{span:5, offset:0}} className="brand-text">
                       
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
