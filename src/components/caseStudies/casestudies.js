import React, { Component } from 'react';
import './casestudies.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { caseData1,caseData2,caseData3 } from './caseData';




export class CaseStudies extends Component {
    constructor(props){
        super(props);
        this.state=
        {
            data: [caseData1,caseData2,caseData3,],
            currentID : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const id = e.target.id;
        this.setState({
            currentID: id
        })
    }
    render() {
        return (
            <Container fluid className="studies-container">
                <h2 className="case-title">Case studies</h2>
                <Row className="studies-wrap">
                    <Col xl={{span:3 , offset:2 }} lg={{span:4 , offset:1}} md={{span:9 , offset:2}} sm={{span:9, offset:2}} xs={{span:10, offset:1}} className="case-left">
                        <h3 className="project-title"> {this.state.data[this.state.currentID].title}</h3>
                        <p className="project-text">{this.state.data[this.state.currentID].text}</p>
                        <p className="project-techn">{this.state.data[this.state.currentID].technologies}</p>
                        <div className="case-stat">
                          <p className="stat-number">{this.state.data[this.state.currentID].number1}</p>
                          <p className="stat-text">{this.state.data[this.state.currentID].number1Text}</p>  
                        </div>
                        <div className="case-stat">
                          <p className="stat-number">{this.state.data[this.state.currentID].number2}</p>
                          <p className="stat-text">{this.state.data[this.state.currentID].number2Text}</p>  
                        </div>
                    </Col>
                    
                    <Col xl={{span:4 , offset:1}} lg={{span:6 , offset:1}} md={{span:7 , offset:2}} sm={{span:6,offset:2}} xs={{span:10, offset:1}}  className="case-right">
                        <div className="img-holder">
                            <img src={this.state.data[this.state.currentID].img} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row className="bullet-wrap">
                    <Col xl={{offset:7}} lg={{offset:7}} md={10} xs={{span: 10,  offset:1}} className="bullet-points">
                    <div className="case-bullet">
                        {this.state.data.map((item, idx) => 
                        <div onClick={this.handleClick} id={idx} key={idx} className={this.state.currentID == idx ? "bullet active" : "bullet"}></div>)}
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


{/* <div className="case-bullet">
<div className="bullet"></div>
<div className="bullet"></div>
<div className="bullet"></div>
</div> */}
export default CaseStudies
