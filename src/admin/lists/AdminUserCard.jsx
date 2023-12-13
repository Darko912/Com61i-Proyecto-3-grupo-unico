import { Switch, Box, FormControlLabel } from '@mui/material';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Card, Button, Container, Carousel, Form, Row, Col } from 'react-bootstrap'
import {  ableUser, adminUser, clientUser, disableUser, editUser } from '../../config/api';
import { useForm } from 'react-hook-form';
import { validationsFields, isValidCategory } from '../../utils/validations';
import { messages } from '../../utils/messages'
import Swal from 'sweetalert2';
import { useSnackbar } from 'notistack';
import '../styles/adminUserModal.css'



const AdminUserCard = ({ user, updateUserState}) => {

  const { token } = useContext(AuthContext);

  const [userStatus, setUserStatus] = useState(user.disabled);

  const [userRole, setUserRole] = useState(user.role)
  
  const [editUserCard, setEditUserCard] = useState(0);

  const [animationClass, setAnimationClass] = useState('');

   const [userEditData, setUserEditData] = useState({
     name: user.name,
     lastname: user.lastname,
     email: user.email
   });

  const { enqueueSnackbar } = useSnackbar();



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  
 const handleChange = (e) => {
   setUserEditData((prev) => ({
     ...prev,
     [e.target.name]: e.target.value,
   }));
 };


 const adminMaker = async () => {
  if (token) {
    try {
      await adminUser(token, user._id);
      await updateUserState(user._id, {role: 'admin'});
      const message = `${user.name} es ahora Administrador`;
        enqueueSnackbar(`${message}`, {
          variant: "success",         
        });
        setAnimationClass('grow');
          setTimeout(() => {
            setAnimationClass('');
          }, 300);
      return setUserRole('admin');
      
    } catch (error) {
      console.log(error);
    }
  }
 };

 const clientMaker = async () => {
  if (token) {
    try {
      await clientUser(token, user._id);
      await updateUserState(user._id, {role: 'client'});
      const message = `${user.name} es ahora Cliente`;
        enqueueSnackbar(`${message}`, {
          variant: "warning",         
        });
        setAnimationClass('grow');
          setTimeout(() => {
            setAnimationClass('');
          }, 300);
      return setUserRole('client');
      
    } catch (error) {
      console.log(error);
    }
  }
 }

  const handleUserStatus = async () => {
    if (token) {
      try {
        if (userStatus) {
          await ableUser(token, user._id);          
        } else {
          await disableUser(token, user._id);   
        };   
        setUserStatus(!userStatus);
        await updateUserState(user._id, { disabled: !userStatus });
        const message = !userStatus ? 'Usuario DESABILITADO con éxito' : 'Usuario HABILITADO con éxito';
        enqueueSnackbar(`${message}`, {
          variant: `${!userStatus ? 'warning' : 'success'}`})
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleEditUser = async(userData) => {
    const response = () => editUser(token, user._id, userEditData);
    if (token) {
      try {
        
      } catch (error) {
        
      }
    }
  }

  return (
    <>
      {editUserCard === 0 ? (
        <div className="admin-prod-card">
          <Row className="admin-row-card">
            <div className="icon-container">
              <Card.Header>
                <Card.Img
                  variant="top"
                  src={user.avatar}
                  className="prod-card-icon"
                />
              </Card.Header>
            </div>
            <Container>
              <Col>
                <Card className="prod-edit-card">
                  <Card.Body>                 
                    <Card.Title className="my-3 text-center">
                      {user.name} {user.lastname}
                    </Card.Title>
                    <div className='d-flex justify-content-center'>
                    <Button
                    className={`btnAble  ${userRole === 'client' ? 'grow btn-outline-success' : 'shrink btn-outline-danger'}`}
                    onClick={() => clientMaker(user._id)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width={userRole === 'client' ? '40' : '20'} height={userRole === 'client' ? '40' : '20'} fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    </Button>
                    <Button
                    className={`btnAble ${userRole === 'admin' ? 'grow btn-outline-success' : 'shrink btn-outline-danger'}`}
                    onClick={() => adminMaker(user._id)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width={userRole === 'admin' ? '40' : '20'} height={userRole === 'admin' ? '40' : '20'} fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                    </svg>
                  </Button>
                    </div>
                    <Card.Text className="text-center">
                      {user.email}
                    </Card.Text>
                    <div>
                      <Box className="justify-content-around d-flex">
                        
                        <FormControlLabel
                          label={!userStatus ? "Habilitado" : "Desabilitado"}
                          control={
                            <Switch
                              color="warning"
                              checked={!userStatus}
                              onClick={handleUserStatus}
                              onChange={setUserStatus}
                            />
                          }
                        />
                      </Box>
                    </div>
                    <Button
                      className="container"
                      variant="warning"
                      onClick={() => setEditUserCard(1)}
                    >
                      Editar Usuario
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          </Row>
        </div>
      ) : (
        editUserCard === 1 && (
          <div className="admin-prod-card">
            <Row className="admin-row-card">
              <div className="icon-container">
                <Card.Header>
                  <div>
                    <Card.Img
                      variant="top"
                      src={user.avatar}
                      className="prod-card-icon"
                    />
                  </div>
                </Card.Header>
              </div>
              <Container>
                <Col>
                  <Card className="prod-edit-card">
                    <Card.Body>
                      <Form onSubmit={handleSubmit()}>
                        <div>
                          <div className="text-center">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className=''>
                                Editar nombre del usuario
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={user.name}
                                defaultValue={user.name}
                                name="name"
                                className='text-center'
                                {...register("name", {
                                  required: false,
                                  maxLength: 40,
                                  minLength: 5,
                                })}
                                onChange={handleChange}
                              />
                              <div className="small">
                                {errors.name?.type === "required" && (
                                  <p className="alertas">
                                    {messages.prodError}
                                  </p>
                                )}
                                {errors.name?.type === "maxLength" && (
                                  <p className="alertas">
                                    {messages.prodMaxLengthError}
                                  </p>
                                )}
                                {errors.name?.type === "minLength" && (
                                  <p className="alertas">
                                    {messages.prodMinLengthError}
                                  </p>
                                )}
                              </div>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="text-center">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>
                              Editar apellido del usuario
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={user.lastname}
                              defaultValue={user.lastname}
                              name="lastname"
                              className='text-center'
                              {...register("lastname", {
                                required: false,
                                maxLength: 40,
                                minLength: 3,
                              })}
                              onChange={handleChange}
                            />
                            <div className="small">
                              {errors.lastname?.type === "required" && (
                                <p className="alertas">
                                  {messages.prodDescError}
                                </p>
                              )}
                              {errors.lastname?.type === "maxLength" && (
                                <p className="alertas">
                                  {messages.prodMaxLengthError}
                                </p>
                              )}
                              {errors.lastname?.type === "minLength" && (
                                <p className="alertas">
                                  {messages.prodMinLengthError}
                                </p>
                              )}
                            </div>
                          </Form.Group>
                        </div>

                        <div className="text-center">
                          <div>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Editar email del usuario</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={user.email}
                                defaultValue={user.email}
                                name="email"
                                className='text-center'
                                {...register("email", {
                                  required: false,
                                  maxLength: 6,
                                  minLength: 1,
                                  pattern: validationsFields.price,
                                })}
                                onChange={handleChange}
                              />
                              <div className="small">
                                
                              </div>
                            </Form.Group>
                          </div>                         
                        </div>
                        
                        <div className="d-flex justify-content-around">
                          <div className="container">
                            <Button
                              className="container"
                              variant="danger"
                              onClick={() => setEditUserCard(0)}
                            >
                              Cancelar
                            </Button>
                          </div>
                          <div className="container">
                            <Button
                              className="container"
                              variant="warning"
                              type="submit"
                            >
                              Editar usuario
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Container>
            </Row>
          </div>
        )
      )}
    </>
  );
}

export default AdminUserCard
