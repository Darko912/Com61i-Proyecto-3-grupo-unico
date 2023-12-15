import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className='text-center contenido-de-error'>
      <h1 className='texto-de-error'>404 - No Encontrado</h1>
      <p className='texto-de-sorry'>Sorry, la pagina que buscas parece que no existe!.</p>
      <Link to="/">Volver a la Pagina Principal</Link>
    </div>
  );
}

export default ErrorPage