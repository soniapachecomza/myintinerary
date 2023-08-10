/* eslint-disable react/react-in-jsx-scope */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import './navBar.css';


function NavBar() {
  return (

    <Navbar expand="lg" className="bg-body-transparent w-75" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold display-4 "><img src={logo} className='logos' alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex-grow-0 justify-content-end ">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex flex-row justify-content-center"
            navbarScroll
            variant="underline"
            defaultActiveKey="/home"
          >
            <Nav.Link href="/home" className='text-warning fw-bolder'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-info'>Cities</Nav.Link>
            <Button variant="muted" className='btn'><img src={user} className='user' alt='logo' /></Button>
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;