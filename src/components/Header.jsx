import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#f1be16' }} className="w-100">
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: 'white' }}>
            <i className="fa-solid fa-utensils"></i> Recipe-Hub
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
