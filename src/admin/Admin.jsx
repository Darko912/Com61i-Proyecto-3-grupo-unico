import React, { useState } from 'react'
import Panel from './Menu'
import UsersList from './lists/UsersList'
import { Container } from 'react-bootstrap'
import './styles/menu.css'
import UsersDatatable from './lists/UsersDatatable'
import CreateProduct from './CreateProduct'
import AllProdDatatable from './lists/ProductsDatatable'

const Admin = () => {

  const [panel, setPanel] = useState(1);

  return (
    <div className='container-fluid d-flex gap-5'>
    <div>
    <Panel setPanel={setPanel}/>
    </div>
    <div>
      {panel === 1 && <UsersDatatable /> }
      {panel === 2 && <AllProdDatatable />}
      {panel === 3 && <CreateProduct />}
    
    
    </div>
    </div>
  )
}

export default Admin