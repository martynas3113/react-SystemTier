import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './header.scss';
import { FaBars } from 'react-icons/fa'

export class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            scroll:false,
            resize: false
        };
        this.backChange = this.backChange.bind(this);
        this.burgerMenu = this.burgerMenu.bind(this);
        window.addEventListener('scroll', this.backChange);
        window.addEventListener('resize', this.burgerMenu)

    }

    burgerMenu(){
        if(window.innerWidth <= 990){
            this.setState({
                resize: true
            });
        }
        else{
            this.setState({
                resize: false
            });
        }
    }

    backChange(){
        if(window.scrollY >=100){
            this.setState({
                scroll: true
            });
        }
        else{
            this.setState({
                scroll: false
            })
        }
    }
    
    render() {
        const scroll = this.state.scroll ? "header-container active" : "header-container";
        return (
            <Container fluid className={scroll}>
                <Row className="header-wrap">
                    <Col lg={{span: 10, offset:1}} className="header-content">
                        <p>System tier</p>
                        <FaBars style={this.state.resize ? {display: 'block'} : {display:'none'}} className="burger-menu" />
                        <nav style={this.state.resize ? {display: 'none'} : {display:'block'}} className="nav-wrap">
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a className="btn" href="#">Contact us</a>
                        </nav>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default Header
