import React from "react";
// import { NavLink } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
// import { Colxx } from "components/CustomBootstrap";
import "./style.css";


export default class SectionServices extends React.Component {
    render() {
        return(
            <div id="services" className="lbl-services">
                <Container>
                    <Row className="justify-center">
                        <Col md="8">
                            <div className="service-intro text-center">
                                <h1>Designed for startups to excel.</h1>
                                <p>
                                Best in class big data software and analytics services will render your huge chunks into meaningful
                                data. Try the demo now.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6" lg="4">
                            <div className="lbl-service-card">
                                <div className="card-icon">
                                    <div className="card-Media">
                                        <Media src="https://s3.amazonaws.com/garage-images-app/i1.png" width="50" alt="Feature"></Media>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h3>Built-in Camera</h3>
                                    <p>Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" lg="4">
                            <div className="lbl-service-card">
                                <div className="card-icon">
                                    <div className="card-Media">
                                        <Media src="https://s3.amazonaws.com/garage-images-app/i1.png" width="50" alt="Feature"></Media>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h3>Encrypted</h3>
                                    <p>Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" lg="4">
                            <div className="lbl-service-card">
                                <div className="card-icon">
                                    <div className="card-Media">
                                        <Media src="https://s3.amazonaws.com/garage-images-app/i1.png" width="50" alt="Feature"></Media>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <h3>Cross-Browser</h3>
                                    <p>Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
    }

}


                    