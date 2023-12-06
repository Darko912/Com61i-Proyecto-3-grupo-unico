import React from 'react'
import Panel from './Menu'
import UsersList from './lists/UsersList'
import { Container } from 'react-bootstrap'
import './styles/menu.css'

const Admin = () => {
  return (
    <div className='container-fluid d-flex gap-5'>
    <div>
    <Panel />
    </div>
    <div>
    <UsersList />
    </div>
    </div>
  )
}

export default Admin