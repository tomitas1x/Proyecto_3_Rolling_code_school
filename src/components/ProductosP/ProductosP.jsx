import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import { CardProducto } from "../CardProducto/CardProducto";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { API_URL } from "../../utils/constant.js";

const ProductosP = () => {
  const [productos,setProductos] = useState([])

  const getProductos = async() => {
    try {
      const response = await fetch(`${API_URL}productos`,{
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        credentials: 'include' // Corrección aquí
      })
      if(response.status === 200){
        const data = await response.json()
        setProductos(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  getProductos()
},[])

  return (
    
      <div className="row d-flex justify-content-center g-0" >
        {productos.map((producto) => (
          <Col
            key={producto._id}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            className="d-flex align-items-center justify-content-center m-2"
          >
            <CardProducto className='p-0 m-2'
              nombre={producto.nombre}
              image={producto.imagen}
              precio={producto.precio}
            />
          </Col>
        ))}
      </div>
    
  );
};

export default ProductosP;
