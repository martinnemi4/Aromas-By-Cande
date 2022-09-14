import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from "../CartWidget/CartWidget"
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../img/logo.jpg'
import './NavBar.css'
import {Link} from "react-router-dom";


function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <a href='../ItemListContainer/ItemListContainer.js' className='logo'>
            <img src={logo} alt='Logo' width="30"></img>
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link to="/">Inicio</Link>
            <Link to="/category/chocolates">Chocolates</Link>
            <Link to="/category/frutillas">Frutillas</Link>
            <NavDropdown title="Sobre Nosotros" id="navbarScrollingDropdown">
                <NavDropdown.Item href="../ItemListContainer/ItemListContainer.js">Quienes Somos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Contactanos!
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
            <button className='btn-carrito'>
            <ShoppingCartIcon></ShoppingCartIcon>
            </button>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">
                <SearchIcon></SearchIcon>
            </Button>
            </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;