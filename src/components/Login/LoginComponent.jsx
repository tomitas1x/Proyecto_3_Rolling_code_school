import React from 'react'
import "../Login/LoginComponent.css"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { API_URL } from "../../utils/constant.js";
import {jwtDecode} from 'jwt-decode'
import Swal from "sweetalert2";

const LoginComponent = ({setUser}) => {
  const {register, handleSubmit,formState: { errors },reset} = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(`${API_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data)
    })
    
  if (response.status === 400) {
    Swal.fire({
      title: "El usuario no es correcto!",
      icon: "error",
    });
    return;
  }

  if (response.status === 401) {
    Swal.fire({
      title: "La contraseña no es correcta!",
      icon: "error",
    });
    return;
  }

    if(response.status === 200){
      const responseData = await response.json()
      
      const decoded = jwtDecode(responseData.accessToken)
      localStorage.setItem('token',responseData.accessToken)
      localStorage.setItem('isUserLogged',true)
      window.location.reload()
    }
    reset()
  }

  return (
  <>
    <div className="d-flex justify-content-center  align-items-center  backColor ">
    <Card className="p-3 ConteinerCard m-5 ">
      <Row>
        <Col>
          <h1 className="text-center letter fw-bold">GYMAGE</h1>
          <h2 className='fst-italic fw-bolder letter'>WELCOME BACK!!</h2>
          <Form className="text-center" onSubmit={handleSubmit((data) => onSubmit(data))}>
            <Form.Group>
              <Form.Label className="mt-2 letter">E-MAIL</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Ingrese su e-mail.."
              className='colorForm'
              maxLength={60} 
              minLength={8}
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              isInvalid={!!errors.email}/>
              <Form.Label className="mt-2 letter">CONTRASEÑA</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña.."
                className='colorForm'
                maxLength={60}
                minLength={8}
                {...register("clave", {
                  required: "Este campo es obligatorio",
                })}
                isInvalid={!!errors.clave}
              />
            </Form.Group>
            <Button type="submit" className="text-center m-2 buttonStyle text-dark">
              INGRESAR
            </Button>
          </Form>
          <h5 className='fst-italic text-center letter'>¿Olviaste tu contraseña?</h5>
          <h4 className='text-center letter'>INICIAR SESIÓN CON:</h4>
        </Col>
      </Row>
    </Card>
  </div>
  </>
  )
}

export default LoginComponent