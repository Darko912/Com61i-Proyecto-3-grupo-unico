import  { useContext, useState } from "react";
import "./styles/menu.css";
import { Button, Col, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";


const Panel = () => {
  const { state } = useContext(AuthContext);

  const {actualUser} = useAuth();
  console.log(actualUser);

  const [panel, setPanel] = useState(1);

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
      <div className="container-fluid mb-5">
        <Col className="panel-col">
          <h1>PANEL xd</h1>
        </Col>
      </div>
    </>
  );
};

export default Panel;
