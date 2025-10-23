import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { API_URL } from "../../utils/constant.js";
import "../Clases/ClasesComponent.css";

const ClasesComponent = ({ userInfo }) => {
  const [user, setUser] = useState(null);
  const [plan,setPlan] = useState(null)
  const [userPlan, setUserPlan] = useState([]);
  const [fecha, setFecha] = useState("");
  const [clases, setClases] = useState([]);
  const token = localStorage.getItem("token");

  const findUserPlan = async () => {
    try {
      const email = userInfo.email;
      const response = await fetch(`${API_URL}plan/user?email=${email}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (response.status === 200) {
        const userData = await response.json();
      //  console.log("user", userData.nombre);
      //  console.log("user", userData.plan);
        setPlan(userData.plan)
        setUser(userData);
      }
    } catch (error) {
      console.log("Usuario no encontrado" + error);
    }
  };
  
  const handleDateChange = async (event) => {
    const date = event.target.value;
    setFecha(date);
    getClases(date); 
  };

   const getClases = async (date) => { 
     try {
      // console.log(date); 
       const response = await fetch(`${API_URL}clase/${date}`, {
         method: "GET",
         headers: { Authorization: `Bearer ${token}` },
         credentials: "include",
       });
   
       if (response.status === 200) {
         const data = await response.json();
         setClases(data);
       //  console.log(data);
       }
     } catch (error) {
       console.log(error);
     }
   };
  const addAlumno = async (claseID) => {
    try {
      const { nombre, apellido } = user;
      if (user != null) {
        const response = await fetch(`${API_URL}clase/${claseID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            alumnos: [{ nombre: nombre, apellido: apellido }],
          }),
        });
        if (response.status === 200) {
          console.log("nice");
        }
      } else {
        console.log("el usuario es null");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findUserPlan();
  }, []);

  return (
    <>
      <Row className="g-0 mb-5 m-1 clasesContainer ">
        <Col className="d-flex justify-content-center m-1 mt-3">
          <div>
            <input type="date" value={fecha} onChange={handleDateChange} />
          </div>
        </Col>
        {plan && plan === 'clases' || plan ==='full' ?(
          <Col className="m-1 ">
            <div className="">
              <Button className="colorB m-1 ">Selecciona un Horario</Button>
              {clases.map((classItem) => (
                <Button
                  key={classItem._id}
                  className="colorB m-1 "
                  onClick={() => addAlumno(classItem._id)}
                >
                  {" "}
                  {classItem.nombre} <br /> {classItem.hora}hs
                </Button>
              ))}
            </div>
          </Col>
        ):(
          <div> 
            <h2 className="text-light text-center m-2">No tenes ningún Plan o sos plan #<span className="letraColor m-2">musculación</span>, no podes acceder a las Clases. </h2>
          </div>
        )
        }
      </Row>
    </>
  );
};

export default ClasesComponent;
