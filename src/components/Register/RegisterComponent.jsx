import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row,Col, Form,Button,Card, Image,} from "react-bootstrap";
import "../Register/RegisterComponent.css";
import logo from "../../images/LogoGymageCompleto.png";
import { API_URL } from "../../utils/constant.js";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const RegisterComponents = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const onSubmit = async (data) => {
    
    if (!aceptoTerminos) {
      // Si el usuario no ha aceptado los términos y condiciones, puedes mostrar un mensaje de error
      Swal.fire({
        title: "Error",
        text: "Debes aceptar los términos y condiciones para registrarte.",
        icon: "error",
      });
      return; // Detiene el envío del formulario
    }
    try {
        const fullData = {...data, role:'user'}
        const response = await fetch(`${API_URL}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(fullData),
      });
      
      Swal.fire({
        title: "Felicidades!",
        text: "Su cuenta fue enviado con exito.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "¡Hubo un error Inesperado!",
        icon: "error",
      });
    }
    reset();
  };
  const handleAceptoTerminosChange = () => {
    setAceptoTerminos(!aceptoTerminos);
  };

  return (
    <div className="d-flex justify-content-center ">
      <Card className="styleCard m-2">
        <Row>
          <Col className="d-flex justify-content-center flex-column">
            <h1 className="text-center text-light">REGISTRATE</h1>
            <div className="d-flex justify-content-center">
              <Image src={logo} className="p-3 img  " />
            </div>
          </Col>
          <Col className="m-2">
            <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Nombre</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="text"
                  placeholder="Ingrese su nombre.."
                  minLength={3}
                  maxLength={50}
                  pattern="[A-Za-z]+"
                  title="Recorda ingresar solo letras"
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Apellido</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="text"
                  placeholder="Ingrese su apellido.."
                  minLength={3}
                  maxLength={60}
                  pattern="[A-Za-z]+"
                  title="Recorda ingresar solo letras"
                  {...register("apellido", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.apellido}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="email"
                  placeholder="Ingrese su email.."
                  minLength={12}
                  maxLength={46}
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Contraseña</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="password"
                  placeholder="Ingrese su contraseña.."
                  minLength={8}
                  maxLength={30}
                  {...register("clave", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.clave}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form className="d-flex justify-content-center m-2">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Acepto términos y condiciones"
                  className="text-light text-center mt-2"
                  checked={aceptoTerminos}
                  onChange={handleAceptoTerminosChange}
                />
              </Form>
              <div className="d-flex  flex-column m-2 ">
                <Button className=" buttonStyle text-center text-dark" type="submit">
                  Registrarse
                </Button>
                <h4 className="text-light text-center"><Link to='/login' className="text-decoration-none text-light">¿Ya tenes cuenta?</Link></h4>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default RegisterComponents;
