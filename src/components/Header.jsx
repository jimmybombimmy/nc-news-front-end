import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import navProfilePic from '../img/Circle-icons-profile.png'

const Header = ({scrollToTop}) => {

  return (
    <section>
    <Navbar ref={scrollToTop} bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="nc-newsNav">nc-news</Navbar.Brand>
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
              <Nav.Link href="#">
              <img className='navProfilePic' src={navProfilePic}/> - User123 
              </Nav.Link>

            </Nav>
          </Nav>

          <NavLink>
                
              </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr className="navHR"/>
    </section>
  );
};

export default Header;
