import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Row className="w-100">
                <Col xs={12} md={6} lg={4} className="mx-auto">
                    <div className="signup-box p-4 bg-dark rounded">
                        <h2 className="text-center mb-4">Log In</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mt-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-4 w-100 fw-bold">
                                Log In
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;