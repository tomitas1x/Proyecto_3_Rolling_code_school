import React from "react";

import "./SobreNosotros.css";
import CardComponent from "../../components/Card/CardComponent";
import { Col, Row } from "react-bootstrap";
import imagen1 from '../../images/avatarc.png'
import imagen2 from '../../images/avatarf.png'
import imagen3 from '../../images/avatarml.png'

const SobreNosotros = () => {
  
  return (
    <>
      <div className="container-all">
        <h1 className="frase">
          "El trabajo en equipo es la clave para desbloquear el potencial
          infinito de nuestra creatividad y habilidades"
        </h1>
        <Row className=" g-0">
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Camila Brahim'} imagen={imagen1}/>
          </Col>
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Rafael Ortega'} imagen={imagen2}/>
          </Col>
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Melisa Albornoz'} imagen={imagen3}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SobreNosotros;
