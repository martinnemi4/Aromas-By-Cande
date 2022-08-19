import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from "./CartWidget"


function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">Aromas By Cande</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Tienda</Nav.Link>
            <NavDropdown title="Sobre Nosotros" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Quienes Somos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Contactanos!
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Something else here
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
                Link
            </Nav.Link>
            </Nav>
            <button className='btn-carrito'>
            <ShoppingCartIcon></ShoppingCartIcon>
            </button>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;