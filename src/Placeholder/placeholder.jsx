import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './placeholder.css';

function Placeholder() {
    return (
        <Container fluid>
            <Row className="outline"
                 style={{ marginTop: '-20px' }}>
                <Col md={"auto"} className="outline"
                     style={{ paddingRight: '10px', border: '4px solid white'}} >
                    <h1 className={'m-3'} style={{textAlign: 'left'}}>rock</h1>
                </Col>
                <Col className="outline subgenres">
                    <p className={"definition"}>defined by its energy, rebellion and catchy hooks, but as the genre aged, it began to shed those very characteristics, placing equal emphasis on craftmanship and pushing the boundaries of the music.</p>
                </Col>
            </Row>
            <Row  className="outline" >
                <Col md={"auto"} className={"outline mt-2"}>
                        <Row style={{
                            borderBottom: "2px solid grey"
                        }}>
                            <h4 style={{fontWeight: "bold", color:"white", paddingBottom: "10px", }}>subgenres</h4>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>acid rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>alt rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>art rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>blues rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>celtic rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>country rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>electronic rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>folk rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>garage rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>goth rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>hard rock</h5>
                        </Row>
                        <Row>
                            <h5 style={{color:"white", padding: "10px", borderBottom: "1px solid grey"}}>indie rock</h5>
                        </Row>
                    </Col>
                <Col className="outline">
                    <Row><h2>albums for you</h2></Row>
                    <Row>
                        <div className="image-grid-container">
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                            <Link to="/review" className="image-grid-item">
                                <Image src={`${process.env.PUBLIC_URL}/assets/saturday.jpeg`} fluid />
                            </Link>
                        </div>
                    </Row>

                </Col>
                <Col className="outline">
                    <Row><h2>artists for you</h2></Row>
                    <Row>
                        <div className="image-grid-container">
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                            <Image className="image-grid-item" src={`${process.env.PUBLIC_URL}/assets/jimi.jpg`} fluid roundedCircle />
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Placeholder;