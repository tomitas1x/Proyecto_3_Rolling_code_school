import {BrowserRouter,
Routes,Route,Navigate} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import LoginComponent from '../components/Login/LoginComponent'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros'

const PublicRouter = ({isLogged ,setUser}) => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent isLogged={isLogged }/>
          <Routes>
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<Home setUSer={setUser}/>} />
            <Route path='/plan/full' element={<Plan isLogged={isLogged} nombre="full"/>} />
            <Route path='/plan/musculacion' element={<Plan isLogged={isLogged} nombre="musculacion" />} />
            <Route path='/plan/clases' element={<Plan isLogged={isLogged} nombre="clases"/>} />

            <Route path='/registro' element={<Registro/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
            <Route path='/error404' element={<Error404/>}/>
            <Route path='/login' element={<LoginComponent setUser={setUser}/>}/>
            <Route path='*' element={<Navigate to={'/error404'}/>}/>
          </Routes>
          <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default PublicRouter