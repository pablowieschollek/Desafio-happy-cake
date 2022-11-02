import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";


function Navigate() {
  return (
    <Navbar bg="danger" expand="lg" className='navi'>
      <Container className="d-flex w-100 justify-content-between ">
          <Nav>
            <Link className="p-3 text-light" to="/">🏠Home</Link>
            <Link className="p-3 text-light" to="/Contacto">📒Contacto</Link>
          </Nav>
          <Nav>
            <p className='brand'>Happy Cake 🍰</p>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigate;