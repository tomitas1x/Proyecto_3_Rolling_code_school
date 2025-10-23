import React from 'react'

import './AboutUs.css'
import CardsComponent from '../Card/CardsComponent'
import FooterComponent from '../Footer/FooterComponent'


const AboutUs = () => {
  return (
    <>
         <div className="container-all">
            <h1 className='frase'>"El trabajo en equipo es la clave para desbloquear el potencial infinito de nuestra creatividad y habilidades"</h1>
           <CardsComponent/>   
                
         </div>
         
 
  
    </>
  )
}

export default AboutUs