import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/SobreNosotrosPage.css'
import { FaWhatsapp, FaInstagram, FaFacebook, FaLocationArrow, FaUtensils, FaObjectGroup, FaObjectUngroup, FaLayerGroup, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';

const SobreNosotros = () => {
  return (
    <div>


      <div className='row justify-content-center vh-100'>

        <div className='bodyCards col-xs-12 col-md-6 col-lg-3'>

         <Card style={{ width: '18rem' }} className='cardSobreNosotros'>
         <Card.Img className='rounded-circle' variant="top" src='src\img\ad830444-8f7b-46f7-a281-147e38a27d83.jpeg'/>
         <Card.Body className='cardDetails text-center'>
        <Card.Title>Bruno Casavalle</Card.Title>
        <hr />
        <Card.Text>
          <a href="#" className='iconosSobreNosotros'><FaGithub size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaGit size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaLinkedin size={28} /></a>
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='bodyCards col-xs-12 col-md-6 col-lg-3'>

         <Card style={{ width: '18rem' }} className='cardSobreNosotros'>
         <Card.Img className='rounded-circle' variant="top" src='src\img\ad830444-8f7b-46f7-a281-147e38a27d83.jpeg'/>
         <Card.Body className='cardDetails text-center'>
        <Card.Title>Lucas Escobedo</Card.Title>
        <hr />
        <Card.Text>
          <a href="#" className='iconosSobreNosotros'><FaGithub size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaGit size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaLinkedin size={28} /></a>
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='bodyCards col-xs-12 col-md-6 col-lg-3'>

         <Card style={{ width: '18rem' }} className='cardSobreNosotros'>
         <Card.Img className='rounded-circle' variant="top" src='src\img\ad830444-8f7b-46f7-a281-147e38a27d83.jpeg'/>
         <Card.Body className='cardDetails text-center'>
        <Card.Title>Hugo Torres</Card.Title>
        <hr />
        <Card.Text>
          <a href="#" className='iconosSobreNosotros'><FaGithub size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaGit size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaLinkedin size={28} /></a>
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='bodyCards col-xs-12 col-md-6 col-lg-3'>

         <Card style={{ width: '18rem' }} className='cardSobreNosotros'>
         <Card.Img className='rounded-circle' variant="top" src='src\img\ad830444-8f7b-46f7-a281-147e38a27d83.jpeg'/>
         <Card.Body className='cardDetails text-center'>
        <Card.Title>Franco Chaile</Card.Title>
        <hr />
        <Card.Text>
          <a href="#" className='iconosSobreNosotros'><FaGithub size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaGit size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaLinkedin size={28} /></a>
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='bodyCards col-xs-12 col-md-6 col-lg-3'>

         <Card style={{ width: '18rem' }} className='cardSobreNosotros'>
         <Card.Img className='rounded-circle' variant="top" src='src\img\ad830444-8f7b-46f7-a281-147e38a27d83.jpeg'/>
         <Card.Body className='cardDetails text-center'>
        <Card.Title>Rodolfo Cabrera</Card.Title>
        <hr />
        <Card.Text>
          <a href="#" className='iconosSobreNosotros'><FaGithub size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaGit size={28} /></a> <a href="#" className='iconosSobreNosotros'><FaLinkedin size={28} /></a>
        </Card.Text>
        </Card.Body>
        </Card>

        </div>
        
        
      </div>

    </div>
  )
}

export default SobreNosotros