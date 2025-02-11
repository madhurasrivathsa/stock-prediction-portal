import axios from 'axios'
const baseURL=import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance=axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json',
    }
})

//Request INterceptor 
axiosInstance.interceptors.request.use(
    function (config) {
    console.log("request without the Authorization  header",config)
    const accessToken=localStorage.getItem('accessToken')
    if(accessToken){
        config.headers['Authorization']=`Bearer ${accessToken}`

    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  //Response Interceptor

  axios.interceptors.response.use(
    function (response) {3.00000000000
    
    return response;
  }, async function (error) {
    const originalRequest=error.config;
    if(error.response.status===401 && !originalRequest.retry){
        originalRequest.retry=true;
        const refreshToken=localStorage.getItem('refreshToken')
        try{
        const response=await axiosInstance.post('/token/refresh/',{refresh:refreshToken});
        console.log("The resposne.data is ",response.data);     
        localStorage.setItem('accessToken',response.data.access)  
        originalRequest.headers['Autorization']=`Bearer ${response.data.access}`
        return axiosInstance(originalRequest)
        }catch(error){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return false;
        }   
    }
   
    return Promise.reject(error);
  });



export default axiosInstance;
