import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar className="" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=' ms-3' href="/">BookingForm</Nav.Link>
            <Nav.Link className=' ms-3' href="/HotelList">HotelList</Nav.Link>
            <Nav.Link className=' ms-3' href="/FlightList">FlightList</Nav.Link>
          </Nav>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link className='ms-3' href="/Register">Register</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
