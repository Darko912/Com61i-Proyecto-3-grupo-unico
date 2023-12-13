import React, { useState, useEffect, useContext } from "react";
import MUIDataTable from "mui-datatables";
import { getAllusers } from "../../config/api";
import { Button, Modal, Col } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip } from "react-tooltip";
import "../styles/prodStyle.css";
import "styled-components";
import AdminUserCard from "./AdminUserCard";

const AllUsersDatatable = () => {

  const [user, setUser] = useState([]);

  const [userMod, setUserMod] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null)

  const { token } = useContext(AuthContext);


  const getUsers = async () => {
    try {
      if (token) {       
        await getAllusers(token).then((response) => {
          setUser(response.data)
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  

  
   const handleCloseUser = () => setUserMod(false);

  const updateUserState = (userId, updatedState) => {
    const updatedUser = user.map((user) => {
      if (user._id === userId) {
        return {...user, ...updatedState};
      }
      return user;
    });
    setUser(updatedUser);
  }

  const handleOpenUser = (rowData) => {
    setSelectedUser(rowData)
    setUserMod(true)
  };

  const options = {
    fixedHeader: true,
    tableBodyHeight: "500px",
    selectableRows: "none",
    responsive: "simple",
    textLabels: {
      body: {
        noMatch: "No se encontraron registros",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver columnas",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "Todos",
        title: "FILTROS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar columnas",
      },
      selectedRows: {
        text: "fila(s) seleccionada(s)",
        delete: "Eliminar",
        deleteAria: "Eliminar filas seleccionadas",
      },
    },
  };

  const columns = [
    {
      name: "Avatar",
      label: "AVATAR",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const icon = user[tableMeta.rowIndex].avatar;
          return (
            <>
              {icon ? <img src={icon} alt={icon} className="prod-icon" /> : <></>}
            </>
          );
        },
      },
    },
    {
      name: "name",
      label: "NOMBRE",
      options: {
        sort: false,
      },
    },
    {
      name: "lastname",
      label: "APELLIDO",
      options: {
        sort: false,
      },
    },
    {
      name: "email",
      label: "EMAIL",
      options: {
        sort: false,
      },
    },
    {
      name: "role",
      label: "ROL",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const role = user[tableMeta.rowIndex].role;
          return (
          <>
          {
            role === 'client' ? <p>Cliente</p> :
            role === 'admin' ? <p>Administrador</p> :
            role === 'owner' && <p>Propietario</p>
          }
          </>
          );
        }
      },
    },
    {
      name: "finalized",
      label: "PEDIDOS",
      options: {
        sort: false,
      },
    },
    {
      name: "disabled",
      label: "STATUS",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const isDisabled = user[tableMeta.rowIndex].disabled;
          return isDisabled ? "Desabilitado" : "Habilitado";
        },
      },
    },
      
    {
      name: "ver",
      label: "VISUALIZAR",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <Button
              className="btnWatch btn-outline-success"
              onClick={() => handleOpenUser(user[tableMeta.rowIndex])}
            >
              <Tooltip id="viewProdTt" type="info" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
                data-tooltip-id="viewProdTt"
                data-tooltip-content="Visualizar"
                data-tooltip-place="bottom"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </Button>
          );
        },
      },
    },
  ];

  return (
    <>
      <div>
        <Col xl={12} xs={6} className="row">
          <div
            className="container my-2 text-center"
            justifyContent="flex-end"
          >
            <MUIDataTable
              title={"Usuarios"}
              data={user}
              columns={columns}
              options={options}
              className="custom-table"
            />
          </div>
        </Col>
      </div>
      <Modal show={userMod} onHide={handleCloseUser} className="prod-modal">
        {selectedUser && (
          <AdminUserCard
            user={selectedUser}
            updateUserState={updateUserState}
          />
        )}
      </Modal>
    </>
  );
};

export default AllUsersDatatable;
