import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className='footer color '>
        <div className="container-fluid">
        
        <div className="row">
            <div className="col-12 col-md-6">
                <p className='text-center text-footer'>Todos direitos resevados para &copy; Programador junior</p>
            </div>
            <div className="col-12 col-md-6">
                <img src={logo} alt="" className='img-fluid' id='img-footer'/>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer