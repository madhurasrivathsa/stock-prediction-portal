import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"

const Header = () => {
  return (
   
    <nav className="navbar container pt-3 pb-3 d-flex justify-content-between align-items-center">
    <Link className="navbar-brand text-light" to="/">Stock Prediction App</Link>       
    <div className="d-flex">
        <Button text="Login" url="/login" class="btn-outline-info" />
        &nbsp;
        <Button text="Register" url="/register"  class="btn-info" />
    </div>
</nav>

        
      
   
  )
}

export default Header
