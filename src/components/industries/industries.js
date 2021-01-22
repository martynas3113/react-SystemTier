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
            title: "FINTECH",
            currentID: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const content = e.target.innerHTML;
        const data = e.target.id
        this.setState({
            title: content,
            currentID: data
            
        })
    }
    

    render() {
        console.log(this.state.currentID)
        return (
            <Container className="ind-container">
                
                <Row className="ind-wrap">
                    <Col lg={6} md={6} className="ind-left">
                        <h3 className="ind-title">Industries we cover</h3>
                        <ul className="ind-list">
                            {this.state.data.names.map((title ,idx) => <li key={idx}>
                             <a onClick={this.handleClick} id={idx} className={this.state.currentID == idx ? "ind-item active" : "ind-item"} href="##">{title}</a>   
                            </li>)}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="ind-right">
                       <div className="ind-sidebar">
                           <h3 className="sidebar-title">{this.state.title}</h3>
                           <p className="sidebar-text">{this.state.data.text[this.state.currentID]}</p>
                       </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Industries
