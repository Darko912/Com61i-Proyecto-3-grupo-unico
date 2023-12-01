import axios from 'axios';
import { endPoints, productEndpoints, endPointAdmin, endPointUsers } from '../utils/endPointsConfig';
const DBURL = import.meta.env.VITE_URL_BASE;

export const createProduct = async (prodData, token) => {
  try {
    return await axios.post(`${DBURL}${endPoints.createProduct}`, prodData, {
      headers: {
        'access-token': token
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (imgForm, token) => {
  try {
    return await axios.post(`${DBURL}${productEndpoints.uploadImage}`, imgForm,
      {
      headers: { 
        'access-token': token, 
        'Content-Type': 'multipart/form-data'
      }
    })
    
  } catch (error) {
    console.log(error);
  }
};

export const uploadIcon = async (iconForm, token) => {
  try {
    return await axios.post(`${DBURL}${productEndpoints.uploadIcon}`, iconForm, {
      headers: {
        'access-token': token
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export const getAllProd = async (token) => {
  try {
    return await axios.get(`${DBURL}${endPointAdmin.getProd}`, {
      headers: {
        "access-token": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};


//API USERS -------------------------------





export const getOneUser = async (token, id) => {
  try {
    return await axios.get(`${DBURL}${endPointUsers.getUser}/${id}`, {
      headers: {
        "access-token": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

