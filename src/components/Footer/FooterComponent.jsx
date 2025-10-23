import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Footer/FooterComponent.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaMobileAlt,
} from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "react-bootstrap/Image";
import logo from "../../images/LogoGymageCompleto.png";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <Navbar className="footer-navbar  w-100 " fixed="bottom">
        <Container id="footer-container" className="footer-container">
          <Row className="w-100 my-3 ">
            <Col sm={12} md={4} className="logo-col my-2">
              <Image
                src={logo}
                style={{ marginTop: "10px", marginBottom: "10px" }}
              />
            </Col>
            <Col sm={12} md={4} className="text-center my-2">
              <Nav className="d-flex flex-column gap-3">
                <Nav.Item className="text-white fw-bold font-size-large">
                  Redes Sociales
                </Nav.Item>
                <ul className="list-unstyled social-links">
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="text-white font-size-normal"
                    >
                      {" "}
                      <FaInstagram
                        href="https://www.instagram.com"
                        size={20}
                        color="white"
                      />{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      className="text-white font-size-normal"
                    >
                      {" "}
                      <FaLinkedin
                        href="https://www.linkedin.com"
                        size={20}
                        color="white"
                      />{" "}
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.facebook.com"
                      className="text-white font-size-normal"
                    >
                      <FaFacebook
                        href="https://web.facebook.com"
                        size={20}
                        color="white"
                      />{" "}
                      Facebook
                    </a>
                  </li>
                </ul>
              </Nav>
            </Col>
            <Col sm={12} md={4} className="text-center my-2">
              <Nav className="d-flex flex-column gap-3">
                <Nav.Item className="text-white fw-bold font-size-large">
                  Información
                </Nav.Item>
                <ul className="list-unstyled info-links">
                  <li>
                    <Link
                    to='/contacto'
                      className="text-white font-size-normal"
                    >
                      <FaMobileAlt
                        size={20}
                        color="white"
                        href="https://www.whatsapp.com"
                      />{" "}
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobrenosotros" className="text-white font-size-normal">
                      <FaPeopleGroup size={20} color="white" /> Nosotros
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-white font-size-normal"
                      href="https://www.google.com/maps/place/Gral.+Paz+552,+T4000+San+Miguel+de+Tucumán,+Tucumán/@-26.8363516,-65.2068447,17z/data=!3m1!4b1!4m6!3m5!1s0x94225c0ef25a4cff:0x14e127964c0c7667!8m2!3d-26.8363516!4d-65.2068447!16s%2Fg%2F11hfthhdh2?entry=ttu"
                    >
                      <MdOutlinePlace
                        href="https://www.google.com/maps/place/Gral.+Paz+552,+T4000+San+Miguel+de+Tucumán,+Tucumán/@-26.8363516,-65.2068447,17z/data=!3m1!4b1!4m6!3m5!1s0x94225c0ef25a4cff:0x14e127964c0c7667!8m2!3d-26.8363516!4d-65.2068447!16s%2Fg%2F11hfthhdh2?entry=ttu"
                        size={20}
                        color="white"
                      />{" "}
                      Gral Paz 552, San Miguel Tucuman
                    </a>
                  </li>
                </ul>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default FooterComponent;
