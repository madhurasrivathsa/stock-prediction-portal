import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>

   
    <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
            <h1 className="text-light">Stock Prediction Portal</h1>
            <p className="text-light lead"> This is stock prediction portal</p>
            <Button text='Explore' className='btn btn-outline-warning'  url="/dashboard"/>


        </div>
      
    </div>

    </>
  )
}

export default Main
