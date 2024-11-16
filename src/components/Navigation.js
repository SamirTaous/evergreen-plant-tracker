import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#"><img src="./evergreen-logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation-bar" />
        <Navbar.Collapse id="navigation-bar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/myplants'}>My Plants</Nav.Link>
            <Nav.Link as={Link} to={'/addplant'}>Add Plant</Nav.Link>
            <Nav.Link as={Link} to={'/careschedule'}>Care Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
