import React from 'react'

const Button = (props) => {
  return (
    <div>
<a className={`btn ${props.class}`} href="">{props.text}</a>      
    </div>
  )
}

export default Button
