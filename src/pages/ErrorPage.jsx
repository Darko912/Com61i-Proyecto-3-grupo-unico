import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className='text-center'>
      <h1 className='texto-de-error'>404 - No Encontrado</h1>
      <p>Sorry, la pagina que buscas parece que no existe!.</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
}

export default ErrorPage