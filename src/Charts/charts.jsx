import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import './charts.css';

function Charts() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={4}>
                    <h1 style={{marginBottom: '20px'}}>top artists</h1>
                    <ListGroup as="ol" className={"fw-bold"} numbered>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={4}>
                    <h1 style={{marginBottom: '20px'}}>top albums</h1>
                    <ListGroup as="ol" className={"fw-bold"} numbered>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={4}>
                    <h1 style={{marginBottom: '20px'}}>top songs</h1>
                    <ListGroup as="ol" className={"fw-bold"} numbered>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                            <Image src="/assets/cryst.png" roundedCircle className="me-2"
                                   style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
                            Placeholder
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Charts;