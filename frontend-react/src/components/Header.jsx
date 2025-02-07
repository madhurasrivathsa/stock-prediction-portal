import React from 'react'
import Button from './Button'

const Header = () => {
  return (
   
    <nav className="navbar container pt-3 pb-3 d-flex justify-content-between align-items-center">
    <a className="navbar-brand text-light" href="#">Stock Prediction App</a>       
    <div className="d-flex">
        <Button text="Login" class="btn-outline-info" />
        &nbsp;
        <Button text="Register" class="btn-info" />
    </div>
</nav>

        
      
   
  )
}

export default Header
