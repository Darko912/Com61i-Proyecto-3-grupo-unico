import React from 'react'
import '../Footer/ComponentFooter.css'
import { FaWhatsapp, FaInstagram, FaFacebook, FaLocationArrow, FaUtensils, FaObjectGroup, FaObjectUngroup, FaLayerGroup } from 'react-icons/fa';

const ComponentFooter = () => {
  return (
    <footer>

    <div className='BodyFooter container-fluid'>

        <div className='row p-5 bg-secundary text-white text-center'>

            <div className='col-xs-12 col-md-6 col-lg-3'>
                <h3>Curva del Sabor</h3>
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3'><h5>SOBRE LA EMPRESA</h5>
              <div className='row'> 

                <a href="#" className='links'>Sobre Nosotros <FaLayerGroup size={28} /></a>
               
                <a href="#" className='links'>Ubicaciones  <FaLocationArrow size={28} /></a>
              
                <a href="#" className='links'>Menu  <FaUtensils size={28} /></a>

              </div>
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3'><h5>RECLAMOS</h5>
             <div className='row'> 

                <p >Para Realizar Reclamos se puede dirigir a <a href="#" className='linkReclamo'>Www.Reclamos.Com</a></p>

              </div>
            </div>

            <div className='col-xs-12 col-md-6 col-lg-3 '><h5>CONTACTOS</h5>
            <div className='row'> 

                <a href="#" className='links'>Facebook  <FaFacebook size={28} /></a>
               
                <a href="#" className='links'>Instagram  <FaInstagram size={28} /></a>
              
                <a href="#" className='links'>WhatsApp  <FaWhatsapp size={28} /></a>

              </div>

            </div>

        </div>

    </div>

    </footer>
  )
}

export default ComponentFooter