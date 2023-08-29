import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import login from "../../assets/user.png";
import "./navBar.css";
import Logo from "../Logo/Logo.jsx";
import LinksPage from "../LinksPage/LinksPage";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar w-100 " variant="dark">
      <Container fluid>
        <Logo />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="flex-grow-0 justify-content-end "
        >
          <Nav
            className="me-auto my-2 my-lg-0 d-flex flex-row justify-content-center"
            navbarScroll
            variant="underline"
            defaultValue={"/"}
          >
            <LinksPage />

            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom`}>
                  <strong>Login</strong>
                </Tooltip>
              }
            >
              <Button variant="muted" className="btn">
                <img src={login} className="logo" alt="Login" />
              </Button>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
