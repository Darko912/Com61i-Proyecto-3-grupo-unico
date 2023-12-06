import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { getAllusers } from '../../config/api';

const UsersList = () => {


    const [users, setUsers] = useState([]);

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
    
  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Pedidos</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Admin only</th>
            </tr>
        </thead>
        <tbody>
    { users.length > 0 && users.map((user) => (
          <tr  key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.cart}</td>
            <td>{user.disabled === true ? 'Desabilitado' : 'Habilitado'}</td>
            <td>{user.role}</td>
          </tr>
        )) }
        </tbody>
    </table>
    </>
  )
}

export default UsersList