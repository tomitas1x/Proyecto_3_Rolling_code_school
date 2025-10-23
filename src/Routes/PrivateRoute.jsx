import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import CrudClases from '../pages/CrudClases/CrudClases'
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros'
import Clases from '../pages/Clases/Clases'

const PrivateRoute = ({setUser, isLogged,userInfo}) => {
  return (
    <>
   <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home setUSer={setUser} userInfo={userInfo} />} />
      {userInfo && userInfo.role === 'admin' && (
        <>
          <Route path='/crud/planes' element={<CrudClases setUSer={setUser} nombre="planes"/>} />
         <Route path='/crud/usuarios' element={<CrudClases setUSer={setUser} nombre="usuarios"/>}/>
          <Route path='/crud/clases' element={<CrudClases setUSer={setUser} nombre="clases"/>}/>
        </>
      )}  
      <Route path='/clases' element={<Clases userInfo={userInfo}/>} />
      <Route path='/plan/full' element={<Plan isLogged={isLogged} nombre="full"/>} />
      <Route path='/plan/musculacion' element={<Plan isLogged={isLogged} nombre="musculacion" />} />
      <Route path='/plan/clases' element={<Plan isLogged={isLogged} nombre="clases"/>} />
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
      <Route path='/error404' element={<Error404/>}/>
      <Route exact path='/error404' element={<Error404 />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default PrivateRoute