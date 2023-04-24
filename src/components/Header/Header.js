import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='desktop'>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='dash' href="/dashboard">OpenAI</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Item>
        <Nav.Link variant="success" href="/features"> <Button variant="success" size="lg"> ChatGPT  </Button></Nav.Link>
      </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <div >
      
      </div>
    </div>
    
  )
}

export default Header

