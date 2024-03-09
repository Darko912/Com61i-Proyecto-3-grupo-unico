import  { useContext, useState } from "react";
import "./styles/menu.css";
import { Button, Col, Row } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";


const Panel = ({setPanel}) => {

  const {actualUser} = useAuth();

  return (
    <>
      <div className="d-flex row">
        <div className="panel container">
          <div className="admin-container">
            <Col className="panel-col">
              <div className="user my-3 admin-container">
                {actualUser && (
                  <div className="my-3">
                    <img
                      className="avatar"
                      src={actualUser?.avatar}
                      alt={actualUser?.avatar}
                    />
                    <h1>{actualUser?.name}</h1>
                    <p>{actualUser?.role}</p>
                    <p>{actualUser?.email}</p>
                  </div>
                )}
              </div>
              <Row>
                <div className="userOptions mx-1 my-3 row justify-content-center">
                  <div className="row mb-2">
                    <Button onClick={() => setPanel(1)} variant="warning">
                      Todos los usuarios
                    </Button>
                  </div>
                  <div className="row mb-2">
                    <Button onClick={() => setPanel(2)} variant="warning">
                      Todos los productos
                    </Button>
                  </div>
                  <div className="row">
                    <Button onClick={() => setPanel(3)} variant="primary">
                      Añadir producto
                    </Button>
                  </div>
                </div>
              </Row>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
