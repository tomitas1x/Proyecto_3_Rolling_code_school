import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import { API_URL } from "../../utils/constant.js";
import { Col, Row } from "react-bootstrap";
import "../ModalComponent/ModalComponent.css";

const ModalComponent = ({ show, handleClose, selectedUser, token, nombre }) => {
  const [userData, setUserData] = useState({});
  const [originalUserData, setOriginalUserData] = useState({});

  let url = `${API_URL}user`;

  if (nombre === "clases") {
    url = `${API_URL}clase`;
  }
  if (nombre === "planes") {
    url = `${API_URL}plan`;
  }
  // CRUD - UPDATE - DELETE
  const updateUser = async (userData) => {
  //  console.log("El dato es:", userData, url);
    if (nombre === "clases") {
      url = `${API_URL}clase/modificar`;
    }
    try {
      const response = await fetch(`${url}/${userData._id}`, {
        method: "PUT", // Utiliza el método PUT para actualizar los datos
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(userData), // Convierte userData a formato JSON antes de enviarlo
      });

      if (!response.ok) {
        const data = await response.json();
      //  console.log(data);
        return;
      }
      console.log("Usuario actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      swal({
        title: "¿Estas seguro?",
        text: "No podrás volver atrás una vez que selecciones 'Ok'.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          // Si el usuario confirma la eliminación, se realiza la solicitud DELETE
          const response = await fetch(`${url}/${userData._id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
            credentials: "include",
          });

          if (!response.ok) {
            const data = await response.json();
            // console.log(data);
            return;
          }

          console.log("Usuario eliminado exitosamente");
          swal("El usuario fue eliminado", {
            icon: "success",
          }).then(() => {
            // Refrescar la página
            window.location.reload();
          });
        } else {
          swal("La operacion fue cancelada");
        }
      });
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData);
    handleClose();
  };

  const handleCancel = () => {
    setUserData(originalUserData); // Restaura los datos originales al cancelar
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserData(selectedUser); // Actualiza userData con el nuevo selectedUser
    setOriginalUserData(selectedUser); // Guarda una copia de seguridad de los datos originales
  }, [selectedUser]); // Se ejecuta cuando selectedUser cambie

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="d-flex justify-content-center align-items-center  "
    >
      <Modal.Header closeButton className="colorFondo">
        <Modal.Title>
          {" "}
          <span className="colorLetra text-uppercase">{nombre}</span>
        </Modal.Title>
      </Modal.Header>
      {nombre == "usuarios" && (
        <Modal.Body className="colorFondo">
          <Row>
            <Col>
              <Form.Group className="py-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData?.nombre || ""}
                  onChange={handleChange}
                  className="colorFondo"

                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="py-2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={userData?.apellido || ""}
                  onChange={handleChange}
                  className="colorFondo"

                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="py-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData?.email || ""}
              onChange={handleChange}
              className="colorFondo"
            />
          </Form.Group>
          <Form.Group className="py-2">
          <Form.Label>Role</Form.Label>
          <Form.Select
            name="role"
            value={userData?.role || ""}
            onChange={handleChange}
            className="colorFondo"
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
            {/* Agrega más opciones según sea necesario */}
          </Form.Select>
        </Form.Group>
        </Modal.Body>
      )}
      {nombre == "clases" && (
        <Modal.Body className="colorFondo">
          <Row>
            <Col>
              <Form.Group controlId="formBasicNombre" className="py-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData?.nombre || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicProfesor" className="py-2">
                <Form.Label>Profesor</Form.Label>
                <Form.Control
                  type="text"
                  name="profesor"
                  value={userData?.profesor || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicFecha" className="py-2">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  name="fecha"
                  value={userData?.fecha || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicHora" className="py-2">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="number"
                  name="hora"
                  value={userData?.hora || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
            <Form.Group controlId="formBasicApellido" className="py-2">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={userData?.descripcion || ""}
                onChange={handleChange}
                className="colorFondo"
              />
            </Form.Group>
          </Row>
          <Form.Group className="py-2">
            <Form.Label>Alumnos</Form.Label>
            <Form.Control
              type="text"
              name="alumnos"
              value={
                userData?.alumnos && Array.isArray(userData.alumnos)
                  ? userData.alumnos
                      .map((alumno) => `${alumno.nombre}`)
                      .join(", ")
                  : ""
              }
              onChange={handleChange}
              className="colorFondo"
            />
          </Form.Group>
        </Modal.Body>
      )}
      {nombre == "planes" && (
        <Modal.Body className="colorFondo">
          <Row>
            <Col>
            <Form.Group className="py-2">
            <Form.Label>Plan</Form.Label>
            <Form.Select
              name="plan"
              value={userData?.plan || ""}
              onChange={handleChange}
              className="colorFondo"
            >
              <option value="musculacion">musculacion</option>
              <option value="clases">clases</option>
              <option value="full">full</option>
              {/* Agrega más opciones según sea necesario */}
            </Form.Select>
            </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail" className="py-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData?.email || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicNombre" className="py-2">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData?.nombre || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicApellido" className="py-2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={userData?.apellido || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="py-2">
                <Form.Label>¿Cómo nos conociste?</Form.Label>
                <Form.Control
                  type="text"
                  name="infoUno"
                  value={userData?.infoUno || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="py-2">
                <Form.Label>¿Estas asistiendo a algun gimnasio?</Form.Label>
                <Form.Control
                  type="text"
                  name="infoDos"
                  value={userData?.infoDos || ""}
                  onChange={handleChange}
                  className="colorFondo"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="py-2">
            <Form.Label>¿Cómo te encuentras fisicamente?</Form.Label>
            <Form.Control
              type="text"
              name="infoTres"
              value={userData?.infoTres || ""}
              onChange={handleChange}
              className="colorFondo"
            />
          </Form.Group>
        </Modal.Body>
      )}
      <Modal.Footer className="d-flex justify-content-center colorFondoDos">
        <Button variant="primary" type="submit" onClick={handleSubmit} className="botonModal">
          Guardar
        </Button>
        <Button variant="danger" onClick={() => deleteUser(selectedUser._id)} className="botonModal">
          Eliminar
        </Button>
        <Button variant="secondary" onClick={handleCancel} className="botonModal">
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
