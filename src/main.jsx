import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Admin from './admin/Admin.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './users/Login.jsx';
import { SnackbarProvider } from 'notistack';
import SobreNosotrosPage from './pages/SobreNosotrosPage.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ComponentFooter from './components/Footer/ComponentFooter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000} >
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/aboutUs' element={<SobreNosotrosPage/>}/>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider> 
    </AuthProvider>
    <ComponentFooter/>
  </React.StrictMode>
)
