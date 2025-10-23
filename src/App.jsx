
import { useEffect, useState } from 'react'
import PrivateRoute from './Routes/PrivateRoute'
import { BrowserRouter } from 'react-router-dom'
import PublicRouter  from './Routes/PublicRouter'
import { jwtDecode } from 'jwt-decode'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/Footer/FooterComponent'
import './App.css'

function App() {

  const [loading,setLoading] = useState(true)
  const [user , setUser] = useState({ token:null, userInfo:null, isLogged:false})
  const isUserLogged = localStorage.getItem('isUserLogged')

  const checkIfUserLogged = () => {
    if(isUserLogged){
      const token = localStorage.getItem('token')
      const decoded = jwtDecode(token)
      setUser({
        token: token,
        userInfo:decoded,
        isLogged:true
      })
      setLoading(false)
    }else{
      setLoading(false)
      return
    }
  }
  useEffect(()=>{
    checkIfUserLogged()
  },[])
  
  return (
    <>
    {
      loading ?
      <div>Cargando</div>
      :
          !user.isLogged ?
          <PublicRouter isLogged={user.isLogged} setUser={setUser}/>
          :
          <BrowserRouter>
            <NavbarComponent isLogged={user.isLogged} setUser={setUser}/>
              <PrivateRoute setUser={setUser} isLogged={user.isLogged} userInfo={user.userInfo} />
            <FooterComponent/>
          </BrowserRouter>
        
    }
    
  </>
  )
}

export default App
