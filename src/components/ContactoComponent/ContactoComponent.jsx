import React from 'react'
import { Link } from 'react-router-dom'
import '../ContactoComponent/Contacto.css'
const ContactoComponent = () => {
  return (
    <div>
    <br />
    <div className="Contenedor">
      <div className="contenido">
        <div className="contenidoizquierdo">
          <h2>Contactanos</h2>
          <form id="formularioContacto">
            <p>
              <label >Nombre:</label>
              <input 
              type="text" 
              name="nombre" 
              pattern="[A-Za-z]+" 
              maxLength={30}
              minLength={3}
              title='Recorda ingresar solo letras'
              required />
            </p>
            <p>
            <label >Apellido:</label>
              <input 
              type="text" 
              name="apellido" 
              maxLength={30}
              pattern="[A-Za-z]+" 
              title='Recorda ingresar solo letras'
              required />
            </p>
            <p>
              <label >Telefono:</label>
              <input 
              type="tel" 
              name="telefono" 
              maxLength={12}
              required />
            </p>
            <p>
            <label >Email:</label>
              <input 
              type="email" 
              name="Email" 
              maxLength={100}
              minLength={11}
              required />
            </p>
            <p className="block">
              <label >Mensaje:</label>
              <textarea 
              name="mensaje" 
              rows="3" 
              maxLength={120}
              required></textarea>
            </p>
            <p className="block">
              <button type="submit"><Link to="/error404" className="text-white font-size-normal">Enviar</Link></button>
            </p>
          </form>
        </div>
        <div className="contenidoderecho">
          <h4>Más información</h4>
          <p>
            ¿Tenes alguna pregunta sobre nuestros servicios, horarios o programas de entrenamiento? ¡Estamos aquí para ayudarte! Completa el formulario a continuación y nos pondremos en contacto con vos.
          </p>
          <p>
            <Link to='/home'>gymage.netlify.app</Link>
            </p>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52306.52258057938!2d-67.76527255136718!3d-34.97771539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96781758e098a883%3A0x6ea3b1dc9e017a62!2sEvolution%20Gym!5e0!3m2!1ses-419!2sar!4v1705697876438!5m2!1ses-419!2sar"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
  )
}

export default ContactoComponent