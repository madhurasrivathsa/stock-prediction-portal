import {useContext} from 'react'
import Button from './Button'
import {Link,useNavigate} from "react-router-dom"
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleLogout=(e)=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate("/login")


  }
  return (
   
    <nav className="navbar container pt-3 pb-3 d-flex justify-content-between align-items-center">
    <Link className="navbar-brand text-light" to="/">Stock Prediction App</Link>       
    <div className="d-flex">
      {isLoggedIn?
      <button className="" onClick={handleLogout}>Logout</button>
      
      :<> <Button text="Login" url="/login" class="btn-outline-info" />
        &nbsp;
        <Button text="Register" url="/register"  class="btn-info" /></>}
       
    </div>
</nav>

        
      
   
  )
}

export default Header
