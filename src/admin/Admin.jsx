import React, { useState } from 'react'
import Panel from './Menu'
import UsersList from './lists/UsersList'
import { Container } from 'react-bootstrap'
import './styles/menu.css'
import UsersDatatable from './lists/UsersDatatable'
import CreateProduct from './CreateProduct'
import AllProdDatatable from './lists/ProductsDatatable'
import OrderDatatable from './lists/ordersDatatable'

const Admin = () => {

  const [panel, setPanel] = useState(1);

  return (
    <Container fluid className='min-vh-100'>
    <div className='row'>
    <div className='col-md-3 mb-3'>
    <Panel setPanel={setPanel}/>
    </div>
    <div className='col-md-9'>
      {panel === 1 && <UsersList /> }
      {panel === 2 && <AllProdDatatable />}
      {panel === 3 && <CreateProduct />}
      {panel === 4 && <OrderDatatable />}
    
    
    </div>
    </div>      
    </Container>

  )
}

export default Admin