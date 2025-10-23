import React from 'react'
import { Button, Image } from 'react-bootstrap'
import imagen from '../../images/imagenPPP.png'
import '../ImagenPrincipal/ImagenPrincipal.css'
const ImagenPrincipal = () => {
  return (
    <div className='container-fluid d-flex justify-content-center estirar-imagen'>
      <Image src={imagen} fluid className="img-fluid estirar-imagen" />
    </div>
  );
}  

export default ImagenPrincipal