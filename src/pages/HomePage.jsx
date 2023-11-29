import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Card from '../assets/card'; // Import the Card component
import "../css/HomePage.css"


const HomePage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div id="cards" className="card-container">
        <Card title="Card 1" description="Description for Card 1" />
        <Card title="Card 2" description="Description for Card 2" />
        <Card title="Card 3" description="Description for Card 3" />
        <Card title="Card 4" description="Description for Card 4" />
        <Card title="Card 5" description="Description for Card 5" />
        <Card title="Card 6" description="Description for Card 6" />
        <Card title="Card 7" description="Description for Card 7" />
        <Card title="Card 8" description="Description for Card 8" />
        <Card title="Card 9" description="Description for Card 9" />
      </div>

      <div id="MasDeNosotros" className="MasDeNosotros">
        <h2>Section que no se que poner XD</h2>
        <p>mas Info iria aqui.. nose.</p>
      </div>
    </div>
  );
}

export default HomePage