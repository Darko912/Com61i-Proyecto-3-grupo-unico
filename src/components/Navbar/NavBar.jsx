import React, {useContext, useEffect, useRef, useState} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Button} from 'react-bootstrap';
import './styles/navBar.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Login from '../../users/Login';
import { useAuth } from '../../hooks/useAuth'; 
import UserPanel from '../../users/UserPanel';
import { Tooltip } from "react-tooltip";
import { AuthContext } from '../../context/AuthContext';
import ShoppingModal from '../shoppingcartModal/shoppingmodal';




const NavBar = () => {

  
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleScroll = () => {
    const nav = navRef.current;
    if (window.scrollY > 500) {
      nav.classList.add("opacity-75");  
    } else {
      nav.classList.remove("opacity-75"); 
    }
  };



  const { userId, actualUser } = useAuth();

  const {state, logOut} = useContext(AuthContext)

  const isLogged = state?.isLogged

  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModalOpen = () => setShowCartModal(true);
  const handleCartModalClose = () => setShowCartModal(false);

  const [loginMod, setLoginMod] = useState(false);

  const handleOpenL = () => setLoginMod(true);
  const handleCloseL = () => setLoginMod(false);

  const [profile, setProfile] = useState(false);

  const handleProfile = () => setProfile(true);
  const handleCloseProfile = () => setProfile(false);

  return (
    <>
      <Navbar
        expand="lg"
        className="navContainer sticky-top "
        ref={navRef}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className='text-white'>Curva del Sabor</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav d-flex" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="navbarNav">
                <Link className="underline nav-link " to="/aboutUs">
                  Nosotros
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="underline nav-link " to="/contact">
                  Contacto
                </Link>
              </Nav.Link>
              {!isLogged && (
               <Nav.Link>
               <Link className="underline nav-link" to="/register">
                Registrarse
               </Link>
               </Nav.Link>
              )}

              {isLogged && actualUser?.role === "admin" && (
               <Nav.Link>
               <Link className="underline nav-link" to="/admin">
               Admin Panel
               </Link>
               </Nav.Link>
              )}
              {isLogged ? (
              <Nav className="d-flex align-items-center">
                <Nav.Link>
                  <Link className="underline nav-link" to="/carta">
                    Menu
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={handleCartModalOpen}>
                  <span className="underline nav-link">Carrito</span>
                </Nav.Link>
                <Nav.Link>
                  <Link className="underline nav-link" to="/" onClick={() => logOut()}>
                    LogOut
                  </Link>
                </Nav.Link>
              </Nav>
              ) : (
                <Nav.Link>
                  <Link className="underline nav-link" onClick={handleOpenL}>
                    LogIn
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <div className="user-column">
            {actualUser && (
              <div className="user">
                <Tooltip id="userTooltip" />
                <div>
                  <Button
                    className="profileButton"
                    onClick={handleProfile}
                    data-tooltip-id="userTooltip"
                    data-tooltip-content="Mi perfil"
                  >
                    {actualUser.avatar ? (
                      <img
                        src={actualUser.avatar}
                        alt={actualUser.avatar}
                        className="navAvatar"
                      />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                      </svg>
                    )}
                  </Button>
                </div>
                <strong>{actualUser.name}</strong>
              </div>
            )}
          </div>
        </Container>
      </Navbar>

      <Modal show={showCartModal} onHide={handleCartModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='shopping-cart-tittle'>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShoppingModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCartModalClose}>
            Cerrar
          </Button>
          {/* Additional actions like Checkout */}
        </Modal.Footer>
      </Modal>

      <Modal show={loginMod} onHide={handleCloseL}>
        <Login />
      </Modal>
      <Offcanvas
        show={profile}
        onHide={handleCloseProfile}
        placement="end"
        className="offcanvaProfile"
      >
        <Button
          className="ms-auto mx-3 my-3 closeButton"
          onClick={handleCloseProfile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
        <Offcanvas.Title className="text-center my-2">
          Perfil de usuario
        </Offcanvas.Title>
        <UserPanel user={actualUser} userId={userId} />
      </Offcanvas>
    </>
  );
}


export default NavBar
