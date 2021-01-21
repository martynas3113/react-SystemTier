import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './industries.scss';
import { titles } from './industriesData'

class Industries extends Component {
    constructor(props){
        super(props)
        this.state =
        {
            data: titles,
        }
    }
    render() {
        console.log(this.state.data.names)
        return (
            <Container className="ind-container">
                
                <Row className="ind-wrap">
                    <Col lg={6} md={6} className="ind-left">
                        <h3 className="ind-title">Industries we cover</h3>
                        <ul className="ind-list">
                            {this.state.data.names.map((title ,idx) => <li key={idx}>
                             <a className="ind-item" href="#">{title}</a>   
                            </li>)}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="ind-right">
                       <div className="ind-sidebar">
                           <h3 className="sidebar-title">Industry Name</h3>
                           <p className="sidebar-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nam!</p>
                       </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Industries
