import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { Avatar, Switch as MuiSwitch } from "@mui/material";
import "../App.css";

const Home = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Container fluid className="home-section">
      <Row className="align-items-center hero-section">
        <Col md={6} className="text-center">
          <Avatar
            src="/path-to-your-profile-picture.jpg"
            alt="Profile Picture"
            className="profile-pic"
            sx={{ width: 150, height: 150 }}
          />
          <h1>Hi, I'm Chandru</h1>
          <p>Full Stack Developer | MERN Stack Enthusiast</p>
          <Button variant="primary" className="cta-btn">
            View My Work
          </Button>
        </Col>
        <Col md={6} className="text-right">
          <MuiSwitch checked={darkMode} onChange={toggleDarkMode} />
        </Col>
      </Row>

      <Row className="project-section">
        <h2>My Projects</h2>
        <Carousel>
          <Carousel.Item>
            <Card className="project-card">
              <Card.Img variant="top" src="/path-to-project-image.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  A brief description of the project. Click to expand.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          {/* Add more carousel items for additional projects */}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Home;
