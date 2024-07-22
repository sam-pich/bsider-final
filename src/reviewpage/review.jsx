import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Rating from 'react-rating-stars-component';
import './review.css';

function Review() {
    const [show, setShow] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleClose = () => {
        setShow(false);
        setAlertVisible(false);
    };
    const handleShow = () => setShow(true);
    const handleSubmit = () => setAlertVisible(true);

    return (
        <>
            {alertVisible && (
                <Alert variant="danger" className="custom-alert" onClose={() => setAlertVisible(false)} dismissible>
                    Please log in or sign up!
                </Alert>
            )}
            <Container fluid>
                <Row className="mt-4">
                    <Col md={5} className="outlines" style={{ marginLeft: '80px' }}>
                        <div className="d-flex flex-column align-items-start">
                            <Image
                                src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`}
                                className="scaled-image"
                                fluid
                            />
                            <h1 className="mt-2 pb-0">Saturday Night Wrist</h1>
                            <h2 className="text-white fw-bold p-0">Deftones</h2>
                            <Button variant="primary" className="mt-2 w-75 fw-bold fs-4" onClick={handleShow}>
                                Review
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="outlines">
                        <Row className="border-bottom">
                            <h3 className="text-white fw-bold p-0">recent reviews</h3>
                        </Row>
                        <Row className="mt-3">
                            <Col md="4" className="outlines pfp-container d-flex align-items-start">
                                <Image src={`${process.env.PUBLIC_URL}/assets/pfp.png`} className="pfp" />
                            </Col>
                            <Col md="8" className="outlines" style={{ marginLeft: '10px' }}>
                                <p style={{ color: "white", fontSize: "larger" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non porttitor nunc. Integer eu orci ligula. Pellentesque at ultricies velit. In eu vulputate lacus. Aenean molestie, justo nec interdum tincidunt, mi tellus volutpat nisi, sit amet feugiat nibh quam ac eros. Integer consectetur, dui ut elementum vulputate, sapien augue scelerisque massa, ut suscipit risus tellus vitae nisl. Fusce tincidunt pharetra pretium. Nulla facilisi. Ut vestibulum rutrum suscipit. In id nisi elit. Morbi ultricies ullamcorper urna id tempor. Nunc hendrerit tellus et risus dapibus accumsan. Donec lacus lectus, tristique non augue ut, imperdiet maximus augue. Quisque semper interdum dui, eu ultricies nulla fringilla non.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md="4" className="outlines pfp-container d-flex align-items-start">
                                <Image src={`${process.env.PUBLIC_URL}/assets/pfp.png`} className="pfp" />
                            </Col>
                            <Col md="8" className="outlines" style={{ marginLeft: '10px' }}>
                                <p style={{ color: "white", fontSize: "larger" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non porttitor nunc. Integer eu orci ligula. Pellentesque at ultricies velit. In eu vulputate lacus. Aenean molestie, justo nec interdum tincidunt, mi tellus volutpat nisi, sit amet feugiat nibh quam ac eros. Integer consectetur, dui ut elementum vulputate, sapien augue scelerisque massa, ut suscipit risus tellus vitae nisl. Fusce tincidunt pharetra pretium. Nulla facilisi. Ut vestibulum rutrum suscipit. In id nisi elit. Morbi ultricies ullamcorper urna id tempor. Nunc hendrerit tellus et risus dapibus accumsan. Donec lacus lectus, tristique non augue ut, imperdiet maximus augue. Quisque semper interdum dui, eu ultricies nulla fringilla non.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md="4" className="outlines pfp-container d-flex align-items-start">
                                <Image src={`${process.env.PUBLIC_URL}/assets/pfp.png`} className="pfp" />
                            </Col>
                            <Col md="8" className="outlines" style={{ marginLeft: '10px' }}>
                                <p style={{ color: "white", fontSize: "larger" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non porttitor nunc. Integer eu orci ligula. Pellentesque at ultricies velit. In eu vulputate lacus. Aenean molestie, justo nec interdum tincidunt, mi tellus volutpat nisi, sit amet feugiat nibh quam ac eros. Integer consectetur, dui ut elementum vulputate, sapien augue scelerisque massa, ut suscipit risus tellus vitae nisl. Fusce tincidunt pharetra pretium. Nulla facilisi. Ut vestibulum rutrum suscipit. In id nisi elit. Morbi ultricies ullamcorper urna id tempor. Nunc hendrerit tellus et risus dapibus accumsan. Donec lacus lectus, tristique non augue ut, imperdiet maximus augue. Quisque semper interdum dui, eu ultricies nulla fringilla non.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">submit your review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={4} className="modal-image-container">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} className="modal-image" fluid />
                            </Col>
                            <Col md={8} style={{fontWeight:"bold"}}>
                                <Form>
                                    <Form.Group controlId="formReviewText">
                                        <Form.Label>review</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mt-2 w-100">
                                        <Col md={6} style={{fontWeight:"bold"}}>
                                            <Form.Label>genre</Form.Label>
                                            <Form.Control as="textarea" rows={1} />
                                        </Col>
                                        <Col md={6} style={{ marginLeft: '10px', fontWeight:"bold" }}>
                                            <Form.Label>rating</Form.Label>
                                            <Rating
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} className={"fw-bold"}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit} className={"fw-bold"}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default Review;