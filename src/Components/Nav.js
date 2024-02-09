// NavScrollExample.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Nav.css';

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search-results?q=${searchQuery}`);
  };

  return (
    <Navbar expand="lg" className="MainNav" style={{ borderRadius: '3%' }}>
      <Container fluid>
        <Navbar.Brand className='Brand'>Mekoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className='FontColor'>
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites" className='FontColor'>
              <FontAwesomeIcon icon={faHeart} /> Favorites
            </Nav.Link>
            <Nav.Link as={Link} to="/user" className='FontColor'>
              <FontAwesomeIcon icon={faUser} /> User
            </Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ml-lg-3"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="outline"
              className="FontColor"
              style={{ border: '1px solid beige', marginLeft: '10px' }}
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
            <Button variant="outline-secondary FontColor" style={{ marginLeft: '10px' }}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
            <NavDropdown
              title={<span style={{ color: 'beige' }}><FontAwesomeIcon icon={faUser} /></span>}
              id="navbarScrollingDropdown"
              className="Dropdown"
              style={{ marginRight: '100px', marginLeft: '50px', zIndex: '1000', fontSize: '150%' }}
            >
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">SignUp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action5">Settings</NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
