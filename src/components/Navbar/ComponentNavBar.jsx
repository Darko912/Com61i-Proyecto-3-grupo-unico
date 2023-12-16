import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './ComponentNavBar.css'


const NavBar = () => {
  return (

    <Navbar expand="lg" className="Navbar bg-dark">
      <Container className='containerNav'>
        <Navbar.Brand href="/" className='LinksNav'>Curva Del Sabor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navToggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/register" className='LinksNav'>Registrarse</Nav.Link>
            <Nav.Link href="/login" className='LinksNav'>Login</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='LinksMas'>Menu Del Dia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='LinksMas'>Postres
              </NavDropdown.Item>
              <NavDropdown.Item href="/sobrenosotros" className='LinksMas'>SobreNosotros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar