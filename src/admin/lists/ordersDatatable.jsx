import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Modal, Col } from "react-bootstrap";
import { getQueueOrders, markOrderAsDelivered,} from "../../config/api";
import "../styles/ordersStyle.css"
import { useSnackbar } from 'notistack';

const OrderDatatable = () => {
  const [queueOrders, setQueueOrders] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchQueueOrders();
  }, []);

  const fetchQueueOrders = async () => {
    try {
      const response = await getQueueOrders();
      setQueueOrders(response.data);
    } catch (error) {
      console.error("Error fetching queue orders:", error.message);
    }
  };

  const handleMarkAsDelivered = async (orderId) => {
    try {
      await markOrderAsDelivered(orderId);
      const updatedOrders = queueOrders.filter((order) => order._id !== orderId);
      setQueueOrders(updatedOrders);
      enqueueSnackbar('Pedido marcado como entregado', { variant: 'success' });
    } catch (error) {
      console.error("Error marking order as delivered:", error.message);
      enqueueSnackbar('Error al marcar el pedido como entregado', { variant: 'error' });
    }
  };

  const columns = [
    {
      name: "icon",
      label: "Icono",
      options: {
        customBodyRender: (value, tableMeta) => (
          <img src={queueOrders[tableMeta.rowIndex]?.icon} alt="Icon" className="prod-icon" />
        ),
      },
    },
    {
      name: "title",
      label: "Título",
    },
    {
      name: "price",
      label: "Precio",
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Button
            onClick={() => handleMarkAsDelivered(queueOrders[tableMeta.rowIndex]._id)}
            variant="contained"
            color="primary"
          >
            Marcar como entregado
          </Button>
        ),
      },
    },
  ];

  const options = {
  };

  return (
    <div>
      <MUIDataTable
        title={"Pedidos en cola"}
        data={queueOrders}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default OrderDatatable;