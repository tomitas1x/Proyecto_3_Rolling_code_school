import FooterComponent from '../../components/Footer/FooterComponent'
import LoginComponent from '../../components/Login/LoginComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import '../Login/Login.css'
const Login = ({User}) => {
  return (
    <div >
      <LoginComponent user={User} />
    </div>
  )
}

export default Login