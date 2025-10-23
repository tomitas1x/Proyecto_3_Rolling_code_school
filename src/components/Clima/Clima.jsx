import "../Clima/clima.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Swal from "sweetalert2";

import React, { useEffect, useState } from "react";

const Clima = () => {
  const [climaData, setClimaData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "f35fbee7016ebf01be550a19df80e230";
    const city = "tucuman";

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?q=${city}&lat=-26.80&lon=-65.21&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setClimaData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
        // Puedes manejar el error aquí si es necesario
      }
    };

    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez, similar a componentDidMount

  return (
    <div className="m-0">
      <Row className="p-0 g-0">
      <Col className="loco">
          <h1 className='m-1 text-center text-white'> <br/> Horarios</h1>
          <Row className='text-center g-0 p-0'>
            <Col className='text-white'>
              <h2>LUN-VIE</h2>
              <h3>8:00 a 23:00</h3>
            </Col>
            <Col className='text-white'>
              <h2>SÁBADOS</h2>
              <h3>9:00 a 18:00</h3>
            </Col>
          </Row>
        </Col>
        <Col className="p-0 text-white loco2">
        <h3 className="text-center m-3">Clima en {climaData?.name}</h3>
        {climaData && (
          <div className="d-flex justify-content-center">
            <Image
              src={`https://openweathermap.org/img/wn/${climaData.weather[0].icon}@2x.png`}
            />
          </div>
        )}
        {climaData && (
          <>
            <h3 className="text-center">{(climaData.main.temp - 273.15).toFixed(2)}°C</h3>
           
          </>
        )}
        </Col>
      </Row>
    </div>
  );
};

export default Clima;
