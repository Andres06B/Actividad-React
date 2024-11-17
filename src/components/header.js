import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsHouseDoor, BsInfoCircle, BsPeople, BsBox, BsList } from 'react-icons/bs';

function Header() {
  const [showMenu, setShowMenu] = useState(false);


  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };


  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="header-wrapper">
      {/* Logo y título */}
      <div className="logo-container">
        <img
          src="/images/imagen1.png"
          alt="Logo"
          className="navbar-logo"
        />
        <h1 className="logo-title">CoreSys</h1>
      </div>

      { }
      <Container>
        <Navbar expand="lg" className="custom-navbar">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home" onClick={closeMenu}>
                <BsHouseDoor /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={closeMenu}>
                <BsInfoCircle /> About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/team" onClick={closeMenu}>
                <BsPeople /> Our Team
              </Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={closeMenu}>
                <BsBox /> Services & Products
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          { }
          <div className="menu-icon ml-auto" onClick={handleMenuToggle}>
            <BsList size={30} />
          </div>
        </Navbar>
      </Container>

      { }
      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="end" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/home" onClick={closeMenu}>
              <BsHouseDoor /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeMenu}>
              <BsInfoCircle /> About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/team" onClick={closeMenu}>
              <BsPeople /> Our Team
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={closeMenu}>
              <BsBox /> Services & Products
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;
