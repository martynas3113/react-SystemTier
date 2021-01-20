import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./hero.scss"

export class Hero extends Component {
    render() {
        return (
            <Container className="hero-container">
                <Row className="hero-wrap">
                    <Col lg={8} md={12} className="hero-content">
                        <section className="hero-content-section">
                            <h3>Hero</h3>
                            <span>Date</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis libero laudantium sit vero incidunt maiores deleniti. Dicta, corporis quibusdam illo ad veniam perspiciatis impedit quod quidem laborum delectus deserunt dolor quos asperiores commodi ratione minus iste voluptatum autem, alias tenetur ipsum tempore optio. Vel itaque harum animi cumque quo at, illo, eum nostrum laborum ipsa temporibus. Dignissimos nobis maiores magni eveniet libero eum esse facere fugiat, quod quisquam delectus suscipit.</p>
                             <p className="read-more">Read more</p>
                            </section>
                            <section className="hero-content-section">
                            <h3>Hero</h3>
                            <span>Date</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis libero laudantium sit vero incidunt maiores deleniti. Dicta, corporis quibusdam illo ad veniam perspiciatis impedit quod quidem laborum delectus deserunt dolor quos asperiores commodi ratione minus iste voluptatum autem, alias tenetur ipsum tempore optio. Vel itaque harum animi cumque quo at, illo, eum nostrum laborum ipsa temporibus. Dignissimos nobis maiores magni eveniet libero eum esse facere fugiat, quod quisquam delectus suscipit.</p>
                             <p className="read-more">Read more</p>
                            </section>
                            <section className="hero-content-section">
                            <h3>Hero</h3>
                            <span>Date</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis libero laudantium sit vero incidunt maiores deleniti. Dicta, corporis quibusdam illo ad veniam perspiciatis impedit quod quidem laborum delectus deserunt dolor quos asperiores commodi ratione minus iste voluptatum autem, alias tenetur ipsum tempore optio. Vel itaque harum animi cumque quo at, illo, eum nostrum laborum ipsa temporibus. Dignissimos nobis maiores magni eveniet libero eum esse facere fugiat, quod quisquam delectus suscipit.</p>
                             <p className="read-more">Read more</p>
                            </section>
                            <section className="hero-content-section">
                            <h3>Hero</h3>
                            <span>Date</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis libero laudantium sit vero incidunt maiores deleniti. Dicta, corporis quibusdam illo ad veniam perspiciatis impedit quod quidem laborum delectus deserunt dolor quos asperiores commodi ratione minus iste voluptatum autem, alias tenetur ipsum tempore optio. Vel itaque harum animi cumque quo at, illo, eum nostrum laborum ipsa temporibus. Dignissimos nobis maiores magni eveniet libero eum esse facere fugiat, quod quisquam delectus suscipit.</p>
                             <p className="read-more">Read more</p>
                            </section>
                            <section className="hero-content-section">
                            <h3>Hero</h3>
                            <span>Date</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis libero laudantium sit vero incidunt maiores deleniti. Dicta, corporis quibusdam illo ad veniam perspiciatis impedit quod quidem laborum delectus deserunt dolor quos asperiores commodi ratione minus iste voluptatum autem, alias tenetur ipsum tempore optio. Vel itaque harum animi cumque quo at, illo, eum nostrum laborum ipsa temporibus. Dignissimos nobis maiores magni eveniet libero eum esse facere fugiat, quod quisquam delectus suscipit.</p>
                             <p className="read-more">Read more</p>
                            </section>
                    </Col>
                    <Col lg={4} md={12} className="hero-sidebar-wrap">
                        <div className="sidebar-item">
                            <p>RECENT POSTS</p>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <p>RECENT POSTS</p>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <p>RECENT POSTS</p>
                            <div className="sidebar-item-content">
                                BLABLABLABLA
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Hero
