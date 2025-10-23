import React, { useEffect, useState } from 'react'
import { PlanesPP } from '../../components/PlanesPP/PlanesPP'
import ImagenPrincipal from '../../components/ImagenPrincipal/ImagenPrincipal';
import "../Home/Home.css"
import ProductosP from '../../components/ProductosP/ProductosP';
import Clima from '../../components/Clima/Clima';
import DivInicio from '../../components/divInicio/DivInicio';

const Home = ({userInfo}) => {
  return (
    <div className='d-flex flex-column color'>
      <ImagenPrincipal/>
     {userInfo && userInfo.role === 'admin' && <DivInicio/>}
      <Clima/>
      <PlanesPP/>
      <ProductosP/>
    </div>
  )
}

export default Home