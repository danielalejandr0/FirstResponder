import React from "react";
import { Button, Card, Carousel, Container, Col, Image, Form, FormControl, Jumbotron, Media, Nav, Row, } from "react-bootstrap";
import image1 from "../iStock-914789708.jpg";
import styles from "../App.css"


function landingPage() {
    return ( 
        <container>
            <div>
                <Row >
                    <Col md={12} >
                        <Nav fill variant="tabs" defaultActiveKey="/home" className="fixed-top" style={{ backgroundColor: "#2d4059" }} >
                            <Nav.Item >
                                <Nav.Link style={{ color: "#ea5455", fontWeight: "bold"}} href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: "#ea5455", fontWeight: "bold" }} eventKey="link-1">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: "#ea5455", fontWeight: "bold" }} eventKey="link-2">FAQ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ color: "#ea5455", fontWeight: "bold" }}eventKey="link-3">Register</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Carousel style={{position:"static"}}>
                            <Carousel.Item interval={1000}>
                                {/* turned off interval property interval={5000} */}
                                <div className="carousel-image" >
                                    <Image src={image1} fluid />
                                </div>
                                <Carousel.Caption>
                                    <div className="caption">
                                        <h1 >FIRST RESOURCE</h1>
                                        <h3>Emergency Information</h3>
                                        <h3> Transfer System</h3>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className="carousel-image" >
                                    <Image src={image1} fluid />
                                </div>
                                <Carousel.Caption>
                                    <div className="caption">
                                        <h1 >TRUST</h1>
                                        <h3>Industry Standard Security</h3>
                                        <p style={{ color: "#ea5455", fontWeight: "bold"}} >Learn More</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <div id="form" style={{ backgroundColor: "#2d4059", color: "white" }}>
                <div>
                        <h3 style={{textAlign:"center", margin:"4%"}}> 
                            Medical Emergency? Start Sharing Your Health Infomation With Your Future Care-Team </h3>
                      
                </div>
                 
                                
                    <Form >
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox" className="mx-auto">
                            <Form.Check type="checkbox" label="I consent to send my health history securely and ONLY to my care-team" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    </Form>

                </div>
                                
                   
                          
            </div>
        </container>
    )
}

export default landingPage;

