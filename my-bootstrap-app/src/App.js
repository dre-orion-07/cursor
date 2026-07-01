import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">

        {/* ───────────────── NAVBAR ───────────────── */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-4">
              🚀 MyApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto gap-2">
                <Nav.Link href="#home" active>Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ───────────────── HEADING ───────────────── */}
        <Container className="text-center my-5 py-4">
          <h1 className="display-4 fw-bold text-dark">
            Welcome to <span className="text-primary">MyApp</span>
          </h1>
          <p className="lead text-muted mt-3 mb-4">
            A beautiful React app powered by React-Bootstrap. Explore our amazing features below!
          </p>
          <Button variant="primary" size="lg" href="#features" className="me-3">
            Get Started
          </Button>
          <Button variant="outline-secondary" size="lg" href="#about">
            Learn More
          </Button>
        </Container>

        {/* ───────────────── 3 CARDS ───────────────── */}
        <Container id="features" className="mb-5 pb-4">
          <h2 className="text-center mb-4 fw-semibold text-dark">Our Features</h2>
          <Row xs={1} md={3} className="g-4">

            {/* Card 1 */}
            <Col>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <div className="fs-1 mb-3">⚡</div>
                  <Card.Title className="fw-bold">
                    Fast Performance{' '}
                    <Badge bg="success" pill>New</Badge>
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Built with React and optimized for speed. Our app delivers a lightning-fast
                    user experience with seamless transitions and minimal load times.
                  </Card.Text>
                  <Button variant="primary" className="mt-3 align-self-start">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <div className="fs-1 mb-3">🎨</div>
                  <Card.Title className="fw-bold">
                    Beautiful Design{' '}
                    <Badge bg="info" pill>Popular</Badge>
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Styled with React-Bootstrap for a clean, modern, and fully responsive layout.
                    Every component is crafted to look great on any device or screen size.
                  </Card.Text>
                  <Button variant="info" className="mt-3 align-self-start text-white">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <div className="fs-1 mb-3">🔒</div>
                  <Card.Title className="fw-bold">
                    Secure & Reliable{' '}
                    <Badge bg="warning" pill text="dark">Pro</Badge>
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Security is our top priority. With robust authentication and data protection
                    measures, your information stays safe and your app stays reliable 24/7.
                  </Card.Text>
                  <Button variant="warning" className="mt-3 align-self-start">
                    Get Protected
                  </Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        {/* ───────────────── FOOTER ───────────────── */}
        <footer className="bg-dark text-center text-light py-3">
          <p className="mb-0">© 2025 MyApp. Built with React & React-Bootstrap.</p>
        </footer>

      </div>
    </>
  );
}

export default App;
