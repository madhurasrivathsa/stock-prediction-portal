import React from 'react'
import {Link} from "react-router-dom"

const Button = (props) => {
  return (
    <div>
<Link className={`btn ${props.class}`} to={props.url} > {props.text}</Link>      
    </div>
  )
}

export default Button
