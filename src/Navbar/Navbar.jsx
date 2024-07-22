import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="custom-gradient align-items-start">
            <Container fluid>
                <Navbar.Brand className="text-white fw-bolder fs-2">
                    <LinkContainer to="/home">
                        <Nav.Link>
                            b-sider
                        </Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarText" />
                <Navbar.Collapse id="navbarText" className="justify-content-end">
                    <Nav className="align-items-center">
                        <NavDropdown title={<FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />} id="navbarDropdown">
                            <Form className="px-4 py-3">
                                <Form.Group className="mb-3">
                                    <FormControl
                                        type="text"
                                        placeholder="Search..."
                                        className="bg-dark-subtle"
                                        id="searchInput"
                                    />
                                </Form.Group>
                                <Button type="submit" className="bg-black btn-primary">
                                    Search
                                </Button>
                            </Form>
                        </NavDropdown>
                        <LinkContainer to="/charts">
                            <Nav.Link className="text-white text-center fw-bold">
                                Charts
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/explore">
                            <Nav.Link className="text-white text-center fw-bold">
                                Explore
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link className="text-white text-center fw-bold">
                                Log In
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link className="text-center">
                                <Button className="bg-white text-black btn-outline-light rounded-3 fw-bolder">
                                    <span style={{fontWeight: 'bold' }}>Sign Up</span>
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;