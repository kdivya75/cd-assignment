import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from "../../logo.png";
import "./Header.css";

function Header() {
    return  <>
    <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="/" className="d-flex">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Users logo"
        />{'  '}
        <h1 className="bandName h4 ml-1">Users App</h1>
      </Navbar.Brand>
    </Container>
    </Navbar>
    </> 
}

export default Header;