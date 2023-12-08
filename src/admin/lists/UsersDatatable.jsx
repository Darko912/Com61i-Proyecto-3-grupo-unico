import React, { useState, useEffect } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { getAllusers } from '../../config/api'


const UsersDatatable = () => {

    const [users, setUsers] = useState([])

    const {token} = useAuth();

    
    useEffect(() => {
      const getUsers = async () => {
        try {
          if (token) {       
            const response = await getAllusers(token)
            setUsers(response.data)
          }
        } catch (error) {
          console.log(error);
        }
      };
      getUsers()
    }, [token]);

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Pedidos',
            selector: row => row.finalized
        },
        {
            name: 'Estado',
            selector: row => row.disabled ? 'Desabilitado' : 'Habilitado'
        },
        {
            name: 'Rol',
            selector: row => row.role
        },
    ];

    

  return (
    <div>
        <DataTable 
        data={users}
        columns={columns}
        pagination
        />
    </div>
  )
}

export default UsersDatatable