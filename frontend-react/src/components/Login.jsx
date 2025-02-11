import React,{useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../AuthProvider'

const Login = () => {
     const [username,setUsername]=useState('')     
      const [password,setPassword]=useState('')
      const [loading,setLoading]=useState(false)
      const navigate =useNavigate()
    const[errors,setErrors]=useState('')
    const{isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

      const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
        const Userdata={username,password}
        console.log(Userdata)
        try{
            const response=await axios.post('http://127.0.0.1:8000/api/v1/token/',Userdata)
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)
            console.log(response.data)
            console.log("Loggin Successful")
            setIsLoggedIn(true)
            navigate('/')

        }catch(error){
            console.error("Invalid Credentials", error.response ? error.response.data : error.message);
            setErrors("Invalid Credentials")
        }finally{
            setLoading(false)

        }
    }



  return (
    <div className="container">
       <div className="row justify-content-center">
         <div className="col-md-6 bg-light-dark p-5 rounded">
         <h3 className="text-light  text-center mb-4">Login</h3>
         <form onSubmit={handleLogin}>
           <div className="mb-3"> 
           <input type="text" className='form-control ' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value  )}/>
          
           </div>
        
           <div className="mb-3">
           <input type="password" className='form-control mb-3' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value  )}/>
           
           </div>
          
           
          
          {errors?<div classNam="text-danger text-light">{errors}</div>:<div></div>}
           <button type="submit"  className={`btn btn-info d-block mx-auto ${loading ? "disabled" : ""}`} >{loading?<div><FontAwesomeIcon icon={faSpinner} spin />"Logging In"</div>:"Login"}</button>
         </form>
         </div>
   
   
   
        </div> 
           
         
       </div>
  )
}

export default Login
