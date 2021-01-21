import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './industries.scss';

class Industries extends Component {
    render() {
        return (
            <Container className="ind-container">
                <Row className="ind-wrap">
                    <Col lg={6} className="ind-left">
                        <h3 className="ind-title">Industries we cover</h3>
                        <ul className="ind-list">
                            <li>
                             <a class="ind-item" href="#">Fintech</a>   
                            </li>
                            <li>
                             <a class="ind-item" href="#">Fintech</a>   
                            </li>
                            <li>
                             <a class="ind-item" href="#">Fintech</a>   
                            </li>
                            <li>
                             <a class="ind-item" href="#">Fintech</a>   
                            </li>
                            <li>
                             <a class="ind-item " href="#">Fintech</a>   
                            </li>
                            <li>
                             <a class="ind-item" href="#">Fintech</a>   
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} className="ind-right">
                       <div className="ind-sidebar">
                           <h3>Industry Name</h3>
                           <p>Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Industries
