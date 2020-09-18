import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from "react-bootstrap/Button"; 
// or 
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="enter your first name" />
                                    <Form.Text>
                                        example: John
                </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="enter your last name" />
                                    <Form.Text>
                                        example: Doe
                </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Form.Group>
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="enter your last name" />
                            <Form.Text>
                                example:  Wont be needed here
            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="text" placeholder="enter your date of birth" />
                            <Form.Text>
                                example: January, 23, 1974; will be replaced by calendar
            </Form.Text>
                        </Form.Group>
                    </Form>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="../public/medunit.jpg" />
                        <Card.Body>
                            <Card.Title>
                                Start Your Care With Correct Information
            </Card.Title>
                            <Card.Text>
                                Fill out form below
            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                    <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                    <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                    <Alert variant="primary">This is a Button</Alert>
                    <Button>Test Button</Button>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                </Container>
            </header>
        </div>
    );
}

export default App;
