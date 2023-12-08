import React, { useState, useEffect } from "react";
import { createProduct, uploadIcon, uploadImage } from "../config/api";
import { useForm } from "react-hook-form";
import { Form, Col } from "react-bootstrap";
import './styles/createProd.css'
import { messages } from '../utils/messages'
import { isValidCategory, validationsFields } from '../utils/validations'
import { alertError } from "../utils/customAlerts";
import { useAuth } from "../hooks/useAuth";


const CreateProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {token} = useAuth()

  const [iconUrl, setIconUrl] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [prodData, setProdData] = useState({
    tittle: "",  
    description: "",    
    category: "",
    price: null,
  });


  const handleIconChange = async (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files)
    if (filesArray.length !== 1) {
      reset();
      return alertError(messages.prodIconMinLengthError)
    }

    const iconForm = new FormData();
    iconForm.append("icon", e.target.files[0]);
    await uploadIcon(iconForm, token)
      .then(response => { 
        if (response && response.data) {       
          setIconUrl(response.data.url) 
        }
      })
      .catch(error => console.log(error))
  };

  const handleImageChange = async (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    if (filesArray.length > 4) {
      reset();
      return alertError(messages.prodImgMaxLengthError);
    }
    const imgForm = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      imgForm.append("images", e.target.files[i]);
    }
    await uploadImage(imgForm, token)
      .then((response) => {
        if (response && response.data) {
          const urls = response.data.map((result) => result.url);
          setImageUrl(urls);
        }
      })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (iconUrl !== "") {
      prodData.icon = iconUrl;
    }
  }, [iconUrl]);

  useEffect(() => {
    if (imageUrl.length !== 0) {
      prodData.images = imageUrl;
    }
  }, [imageUrl]);

  const handleChange = (e) => {
    setProdData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSend = async () => {

    try {
      await createProduct(prodData, token)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="p-5">
      <Form onSubmit={handleSubmit(onSend)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            name="tittle"
            {...register("tittle", {
              required: true,
              maxLength: 40,
              minLength: 5,
            })}
            onChange={handleChange}
          />
          {errors.tittle?.type === "required" && (
            <p className="alertas">{messages.prodError}</p>
          )}
          {errors.tittle?.type === "maxLength" && (
            <p className="alertas">{messages.prodMaxLengthError}</p>
          )}
          {errors.tittle?.type === "minLength" && (
            <p className="alertas">{messages.prodMinLengthError}</p>
          )}
        </Form.Group>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ícono</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/jpeg, image/png, image/webp"
              placeholder="ícono del producto"
              name="icon"
              {...register("icon", {
                required: true,
              })}
              onChange={handleIconChange}
            />
            {errors.icon?.type === "required" && (
              <p className="alertas">{messages.prodIconError}</p>
            )}
          </Form.Group>
          <div className="imgContainer">
            {iconUrl !== "" ? (
              <div className="imgWrapper">
                <img src={iconUrl} alt="Ícono subido" className="img" />
              </div>
            ) : (
              <p>Esperando la carga del ícono</p>
            )}
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción del producto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripción del producto"
            name="description"
            {...register("description", {
              required: true,
              maxLength: 1000,
              minLength: 20,
            })}
            onChange={handleChange}
          />
          {errors.description?.type === "required" && (
            <p className="alertas">{messages.prodDescError}</p>
          )}
          {errors.description?.type === "maxLength" && (
            <p className="alertas">{messages.prodMaxLengthError}</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="alertas">{messages.prodMinLengthError}</p>
          )}
        </Form.Group>

        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Imagen del producto</Form.Label>

            <Form.Control
              type="file"
              multiple
              accept="image/jpeg, image/png, image/webp"
              placeholder="Imagen del producto"
              name="img"
              {...register("img", {
                required: true,
              })}
              onChange={handleImageChange}
            />
            {errors.img?.type === "required" && (
              <p className="alertas">{messages.prodImgError}</p>
            )}
          </Form.Group>
          <div className="container">
            <div className="row">
              <div className="imgContainer">
                {imageUrl.length !== 0 ? (
                  imageUrl.map((url, index) => (
                    <div key={index} className="imgWrapper">
                      <img src={url} alt="Subida" className="img" />
                    </div>
                  ))
                ) : (
                  <p>Esperando carga de imágenes</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Form.Group
          name="category"
          controlId="formGridCategory"
          {...register("category", {
            required: true,
            validate: isValidCategory,
          })}
          onChange={handleChange}
        >
          <Form.Label>Categoría</Form.Label>

          <Form.Select
            defaultValue="Elige una categoría"
            onChange={handleChange}
            name="category"
          >
            <option value="">Elige una categoría</option>
            <option value="PIZZA">Pizza</option>
            <option value="BURGER">Hamburguesa</option>
            <option value="SANDWICH">Sandwich</option>
            <option value="EMPANADA">Empanada</option>
            <option value="DRINKS">Bebida</option>
            <option value="ICECREAM">Helado</option>
            <option value="PASTA">Pasta</option>
            <option value="MEAT">Carnes</option>
            <option value="SUSHI">Sushi</option>
            <option value="CHICKEN">Pollo</option>
            <option value="FISHES">Pezcado</option>
            <option value="RECOMENDED">Recomendado de la casa</option>
            <option value="SALAD">Ensalada</option>
          </Form.Select>
          {errors.category?.type === "validate" && (
            <p className="alertas">{messages.categoryError}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio del producto</Form.Label>
          <Form.Control
            type="text"         
            placeholder="Precio del producto"
            name="price"
            {...register("price", {
              required: true,
              maxLength: 6,
              minLength: 1,
              pattern: validationsFields.price,
            })}
            onChange={handleChange}
          />
          {errors.price?.type === "required" && (
            <p className="alertas">{messages.prodPriceError}</p>
          )}

          {errors.price?.type === "maxLength" && (
            <p className="alertas">{messages.prodPriceMaxLengthError}</p>
          )}

          {errors.price?.type === "minLength" && (
            <p className="alertas">{messages.prodPriceMinLengthError}</p>
          )}

          {errors.price?.type === "pattern" && (
            <p className="alertas">{messages.prodPriceMatchError}</p>
          )}
        </Form.Group>
        <div>
          <button type="submit" className="btn btn-primary">
            Crear producto
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
