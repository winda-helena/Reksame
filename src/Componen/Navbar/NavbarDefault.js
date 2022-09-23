import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../../Assets/image/Rectangle 62.png'

function NavbarDefault() {
  return (
    <Navbar bg="dark">
        <Container>
            <Navbar.Brand href='/'>
                <img
                    src={Logo}
                    className='logo-Reksame'
                    alt='logo'
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default NavbarDefault