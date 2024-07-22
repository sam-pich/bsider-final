import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './explore.css';

function Explore() {
    return (
        <Container>
            <Row md={1} className="m-2">
                {/* header */}
                <h1>dive in, swim through <br />
                    <span style={{ color: '#5480C6', fontSize: '3rem' }}>layers of genres</span>
                </h1>
            </Row>
            <Row lg={2}>
                <Col>
                    {/* bottom left */}
                    <Link to="/placeholder">
                        <div className="square">
                            <Image className="dim" src="/assets/cryst.png" fluid />
                            <h2>electronic</h2>
                        </div>
                    </Link>
                </Col>
                <Col>
                    {/* bottom right */}
                    <div className="grid">
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/pinkfloyd.png" fluid />
                            <h2>rock</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/lana.jpeg" fluid />
                            <h2>pop</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/minor.jpg" fluid />
                            <h2>punk</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/trick.jpeg" fluid />
                            <h2>alternative</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/clairo.png" fluid />
                            <h2>indie</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/metallica.jpeg" fluid />
                            <h2>metal</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/denver.jpg" fluid />
                            <h2>country</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/lacy.jpeg" fluid />
                            <h2>r&b</h2>
                        </Link>
                        <Link to="/placeholder" className="grid-item">
                            <Image className="dim" src="/assets/tpab.png" fluid />
                            <h2>rap</h2>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Explore;