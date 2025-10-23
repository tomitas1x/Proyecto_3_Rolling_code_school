import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Table,
  Modal,
  Form,
  Row,
} from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";
import { API_URL } from "../../utils/constant.js";

const Grilla = ({ setUser , nombre}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem("token");

  let url = `${API_URL}user`
  
  if(nombre === 'clases'){
     url = `${API_URL}clase`
  }
  if(nombre === 'planes'){
     url = `${API_URL}plan`
  }
  
  const handleRowClick = (User) => {
    setSelectedUser(User);
    setShowModal(true); // Abrir el modal cuando se hace clic en una fila
  };
  
  const getUser = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });
  
    if (response.status !== 200) {
      const data = await response.json();
      //console.log(data);
      localStorage.clear();
      setUser({
        token: null,
        userInfo: null,
        isLogged: false,
  
      });
      return;
    }
  
    if (response.status === 200) {
      const data = await response.json();
      setUserList(data);
     // console.log(data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 className="text-light d-flex justify-content-center py-2">BIENVENIDOS AL PANEL DE ADMINISTRACIÓN</h1>
      <h2 className="text-center text-uppercase">{nombre}</h2>
      <div className="table-responsive small p-3">
        {nombre == 'usuarios' &&
        (
        <Table table striped bordered hover variant="dark" className="p-2">
          <thead className="table-light">
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((User) => (
              <tr key={User._id} onClick={() => handleRowClick(User)}>
                <td className="text-center">{User.nombre}</td>
                <td className="text-center">{User.apellido}</td>
                <td className="text-center">{User.email}</td>
                <td className="text-center">{User.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
        {nombre == 'clases' &&
        (
        <Table table striped bordered hover variant="dark" className="p-2">
          <thead className="table-light">
            <tr>
              <th className="text-center">Clase</th>
              <th className="text-center">Profesor</th>
              <th className="text-center">Hora</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((User) => (
              <tr key={User._id} onClick={() => handleRowClick(User)}>
                <td className="text-center">{User.nombre}</td>
                <td className="text-center">{User.profesor}</td>
                <td className="text-center">{User.hora}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
        {nombre == 'planes' &&
        (
        <Table striped bordered hover variant="dark" className="p-2">
          <thead className="table-light">
            <tr>
              <th className="text-center">Plan</th>
              <th className="text-center">Usuario</th>
              <th className="text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((User) => (
              <tr key={User._id} onClick={() => handleRowClick(User)}>
                <td className="text-center">{User.plan}</td>
                <td className="text-center">{User.nombre} {User.apellido}</td>
                <td className="text-center">{User.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
      </div>
  
      <ModalComponent
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedUser={selectedUser}
        token={token}
        nombre={nombre}
      />      
    </>
  );

}

export default Grilla