import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  return false;
};

export const getCart = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/cart`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteCartItem = async (userId, productId) => {
  try {
    const response = await api.delete(`/users/${userId}/cart/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addToCart = async (userId, productId) => {
  try {
    const response = await api.put(`/users/${userId}/products/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}