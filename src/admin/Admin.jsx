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
    <div className='container-fluid d-flex gap-5'>
    <div>
    <Panel setPanel={setPanel}/>
    </div>
    <div>
      {panel === 1 && <UsersList /> }
      {panel === 2 && <AllProdDatatable />}
      {panel === 3 && <CreateProduct />}
      {panel === 4 && <OrderDatatable />}
    
    
    </div>
    </div>
  )
}

export default Admin