import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">nc-news</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav className="me-auto d-flex ">
              <Nav.Link href="/">Homepage</Nav.Link>
              <Nav.Link href="#" className="disabled">
                Link 1
              </Nav.Link>
              <Nav.Link href="#" className="disabled">
                Link 2
              </Nav.Link>
              <Nav.Link href="#" className="disabled">
                Link 3
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
