import axios from 'axios';
import { endPoints, productEndpoints, endPointAdmin, endPointUsers } from '../utils/endPointsConfig';
import axiosClient from './axiosClient';
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

export const spotlightProduct = async (token, id) => {
  try {
    return await axiosClient.patch(`${DBURL}${endPointAdmin.spotlightProd}/${id}`, {}, {
      headers: {
        "access-token": token
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export const unSpotlightProduct = async (token, id) => {
  try {
    return await axiosClient.patch(
      `${DBURL}${endPointAdmin.unSpotlightProd}/${id}`,
      {},
      {
        headers: {
          "access-token": token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const ableProduct = async (token, id) => {
  try {
    return await axios.patch(`${DBURL}${endPointAdmin.ableProd}/${id}`, {},
      {
        headers: {
          "access-token": token
        }
      })
  } catch (error) {
    console.log(error);
  }
};

export const disableProduct = async (token, id) => {
  try {
    return await axios.patch(
      `${DBURL}${endPointAdmin.disableProd}/${id}`,
      {},
      {
        headers: {
          "access-token": token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editProd = async (token, id, prodData) => {
  try {
    return await axios.patch(`${DBURL}${endPointAdmin.editProd}/${id}`, prodData, {
      headers: {
        'access-token': token
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export const offerProd = async (token, id) => {
  try {
    return await axios.patch(`${DBURL}${endPointAdmin.offerProd}/${id}`, {}, {
      headers: {
        'access-token': token
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export const unOfferProd = async (token, id) => {
  try {
    return await axios.patch(
      `${DBURL}${endPointAdmin.unOfferProd}/${id}`,
      {},
      {
        headers: {
          "access-token": token,
        },
      }
    );
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

export const getAllusers = async (token) => {
  try {
    return await axios.get(`${DBURL}${endPointAdmin.getAllUsers}`, {
      headers: {
        "access-token": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
