import { Switch, Box, FormControlLabel } from '@mui/material';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Card, Button, Container, Carousel, Form, Row, Col } from 'react-bootstrap'
import { ableProduct, disableProduct, editProd, offerProd, spotlightProduct, unOfferProd, unSpotlightProduct } from '../../config/api';
import { useForm } from 'react-hook-form';
import { validationsFields, isValidCategory } from '../../utils/validations';
import { messages } from '../../utils/messages'
import Swal from 'sweetalert2';
import { useSnackbar } from 'notistack';



const AdminUserCard = ({ user, updateUserState}) => {

  const { token } = useContext(AuthContext);

  const [userStatus, setUserStatus] = useState(user.disabled);
  
  const [editUserCard, setEditUserCard] = useState(0);

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

  




  const handleOfferProd = async (prodData) => {
    if (token) {
      try {
        if (offer) {         
          await unOfferProd(token, product._id);
          setProdEditData((prev) => ({
            ...prev,
            offerprice: null
          }));
          updateProductState(product._id, prodData)
        } else {
          await offerProd(token, product._id)               
        }
        updateProductState(product._id, { offer: !offer });
        setOffer(!offer); 
        const message = offer
          ? "Producto SACADO de oferta"
          : "Producto PUESTO en oferta";
        enqueueSnackbar(`${message}`, {
          variant: `${offer ? "warning" : "success"}`,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  const handleEditProduct = async (prodData) => {
          
    const response = () => editProd(token, product._id, prodEditData);
    if (token) {
      try {
        if (offer && parseInt(prodEditData.offerprice) >= parseInt(prodEditData.price)) {
           return Swal.fire({
             icon: "error",
             title: "Error en la oferta",
             text: "El precio en oferta no puede ser mayor al precio actual",
           });
        } else {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success mx-1",
              cancelButton: "btn btn-danger mx-1",
            },
            buttonsStyling: false,
          });
          
          swalWithBootstrapButtons
            .fire({
              title: "Esperando Confirmación",
              text: `Estás seguro que quieres editar el producto "${product.tittle}"?`,
              icon: `warning`,
              showCancelButton: true,
              confirmButtonText: "Sí, editar",
              cancelButtonText: "No, cancelar!",
              reverseButtons: true,
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                await response();
                await updateProductState(product._id, prodData);
                swalWithBootstrapButtons.fire(
                  "Edición exitosa!",
                  `El producto "${product.tittle}" se ha editado correctamente!`,
                  "success"
                );
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                  "Cancelado",
                  `El producto "${product.tittle}" continuará como antes`,
                  "error"
                );
              }
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }


  const handleSpotlightProd = async () => {
    if (token) {
      try {
        if (spotlight) {
          await unSpotlightProduct(token, product._id);       
        } else {
          await spotlightProduct(token, product._id);        
        }     
        setSpotlight(!spotlight);
        await updateProductState(product._id, { spotlight: !spotlight });
        const message = spotlight ? 'Producto DESMARCADO como destacado' : 'Producto MARCADO como destacado';
        enqueueSnackbar(`${message}`, {
          variant: `${spotlight ? "warning" : "success"}`,         
        });
      } catch (error) {
        console.log(error);
      }
    }
  }


  const handleProdStatus = async () => {
    if (token) {
      try {
        if (prodStatus) {
          await ableProduct(token, product._id);          
        } else {
          await disableProduct(token, product._id);   
        };   
        setProdStatus(!prodStatus);
        await updateProductState(product._id, { disabled: !prodStatus });
        const message = !prodStatus ? 'Producto DESABILITADO con éxito' : 'Producto HABILITADO con éxito';
        enqueueSnackbar(`${message}`, {
          variant: `${!prodStatus ? 'warning' : 'success'}`})
      } catch (error) {
        console.log(error);
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
                      {user.name + user.lastname}
                    </Card.Title>
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
                              onClick={handleProdStatus}
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
                      <Form onSubmit={handleSubmit(handleEditProduct)}>
                        <div>
                          <div className="text-center">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                Editar nombre del usuario
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={user.name}
                                defaultValue={user.name}
                                name="name"
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

                        <div className="d-flex justify-content-around text-center">
                          <div className="col-6">
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
