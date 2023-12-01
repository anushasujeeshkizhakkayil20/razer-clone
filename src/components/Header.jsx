import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
  
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home"><img width={'100px'}src="./logo1-removebg-preview.png" alt="no image" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">PC</Nav.Link>
            <Nav.Link href="#features">console</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#home">LifeStyle</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#home">Support</Nav.Link>
            <Nav.Link href="#features"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link href="#pricing"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>



          </Nav>
        </Container>
      </Navbar>
   
      
     
  )
}

export default Header