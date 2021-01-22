import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './header.scss';
import { FaBars } from 'react-icons/fa'
import Burgermenu from '../burgerMenu/burgermenu';

export class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            scroll:false,
            resize: false,
            isActive: false
        };
        this.backChange = this.backChange.bind(this);
        this.burgerMenu = this.burgerMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(){
        this.setState((curstate) => ({
            isActive: !curstate.isActive
        }))
    }
    
    render() {
        const scroll = this.state.scroll ? "header-container active" : "header-container";
        return (
            <Container fluid className={scroll}>
                <Row className="header-wrap">
                    <Col lg={{span: 10, offset:1}} className="header-content">
                    <Burgermenu click={this.state.isActive}/>
                        <p>System tier</p>
                        <div className="nav-links" >
                        <nav style={this.state.resize ? {display: 'none'} : {display:'block'}} className="nav-wrap">
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                        </nav>
                        <div className="header-contact">
                        <div style={this.state.resize ? {display: 'flex'} : {display:'none'}} className="burger-icon-wrap" onClick={this.handleClick}>
                            <p>Menu</p>
                            <FaBars className="burger-icon"  className="burger-menu" />
                            </div>
                        <a className="btn" href="#">Contact us</a>
                        </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default Header
