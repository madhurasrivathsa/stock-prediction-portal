import React,{useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Register = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[errors,setErrors]=useState({})
  const [success,setSuccess]=useState(false)
  const [loading,setLoading]=useState(false)
  const handleRegistration=async(e)=>{
    e.preventDefault()
    setLoading(true)
    console.log("test")
    const userData={
      username,email,password
    }
    console.log(userData)
    try{
      const response= await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log("The response is ",response.data)
      setErrors({})
      setSuccess(true)
      setEmail('')
      setPassword('')
      setUsername('')
      setSuccess('')
      

    }catch(error){
      setErrors(error.response.data)
      console.log("Registration Error ",errors)
      
    }finally{
      setLoading(false)
    }

  }
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 bg-light-dark p-5 rounded">
      <h3 className="text-light  text-center mb-4">Create an Account</h3>
      <form onSubmit={handleRegistration}>
        <div className="mb-3"> 
        <input type="text" className='form-control ' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value  )}/>
        <small>{errors.username?<div className='text-danger'>{errors.username}</div>:<div></div>}</small>
        </div>
        <div className="mb-3">
        <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value  )}/>
        <small>{errors.email?<div className='text-danger'>{errors.email}</div>:<div></div>}</small>
        </div>
        <div className="mb-3">
        <input type="password" className='form-control mb-3' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value  )}/>
        <small>{errors.password?<div className='text-danger'>{errors.password}</div>:<div></div>}</small>
        </div>
        {success===true?<div className="alert alert-success"> Registration Success</div>:<div></div>}
        
       
       
        <button type="submit"  className={`btn btn-info d-block mx-auto ${loading ? "disabled" : ""}`} >{loading?<div><FontAwesomeIcon icon={faSpinner} spin />"Please Wait"</div>:"Register"}</button>
      </form>
      </div>



     </div> 
        
      
    </div>
  )
}

export default Register
