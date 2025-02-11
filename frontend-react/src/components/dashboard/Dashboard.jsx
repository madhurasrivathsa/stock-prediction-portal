import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from '../../AxiosInstance';

const Dashboard = () => {
   
    //console.log("The access token is",accessToken)
    useEffect(()=>{
        const fetchProtectedData=async ()=>{
            try{
                const response=await axiosInstance.get('/protected-view/')
                console.log("Response is ", response.data)
    
    
            }catch(error){
                console.error("Error fetching data")
    
            }finally{
    
            }
        }
        fetchProtectedData();
    },[])
   
  return (
    <div className="text-light container ">
      
    </div>
  )
}

export default Dashboard
