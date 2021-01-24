import React, { Component } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './burgermenu.scss';
import { AiOutlineClose } from 'react-icons/ai'

export class Burgermenu extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const toggle = this.props.isOpen;
        const menuOpacity = toggle ? 1 : 0;
        const menuSlide = toggle ? 0 : -100;
        return (
            <Container fluid style={{opacity: menuOpacity}, {top:`${menuSlide}%`}} className="b-menu-container">
                <Row>
                    <Col  lg={12} className="b-menu">
                        <AiOutlineClose onClick={this.props.click} className="b-close" />
                        <nav className="b-menu-content">
                            <a href="">Hello</a>
                            <a href="">Hello</a>
                            <a href="">Hello</a>
                            <a href="">Hello</a>
                        </nav>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Burgermenu
