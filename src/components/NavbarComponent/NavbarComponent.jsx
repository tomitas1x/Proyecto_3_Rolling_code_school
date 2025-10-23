import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../NavbarComponent/NavbarComponent.css";
import { useState } from "react";
import { API_URL } from "../../utils/constant.js";
import logoLetras from '../../images/LogoGymageLetras.png'
import logoImagen from '../../images/LogoGymage.png'

const NavbarComponent = ({ isLogged }) => {
  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}logout`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar expand="lg" className="navbarStyle ">
      <Container fluid>
        <Link to="/Home">
          <Navbar.Brand>
            <Image
              src={logoLetras}
              className="gymmageStyle  mt-4"
            />
          </Navbar.Brand>
        </Link>
        <Link to="/home">
          <Image
            src={logoImagen}
            className="logoStyle mt-3 "
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/contacto"
              className="text-black mx-2 fs-8 buttonStyle mt-2"
            >
              Contactanos
            </Nav.Link>
            <Nav.Link
              href="/sobrenosotros"
              className="text-black mx-2 fs-8 buttonStyle mt-2"
            >
              Sobre Nosotros
            </Nav.Link>
            {isLogged && (
              <Nav.Link
                href="/clases"
                className="text-black mx-2 fs-8 buttonStyle mt-2"
              >
                Clases
              </Nav.Link>
            )}
          </Nav>
          {isLogged ? (
            <Button className="mt-3 mx-1 buttonStyle" onClick={handleLogout}>
              <Link to="/home" className="text-decoration-none text-dark">
                Cerrar Sesión
              </Link>
            </Button>
          ) : (
            <Form className="d-flex justify-content-center">
              <Button className="mt-3 mx-1 buttonStyle ">
                <Link to="/login" className="text-decoration-none text-dark">
                  Iniciar Sesión
                </Link>
              </Button>
              <Button className="mt-3 mx-1 buttonStyle">
                <Link to="/Registro" className="text-decoration-none text-dark">
                  Registrarse
                </Link>
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
