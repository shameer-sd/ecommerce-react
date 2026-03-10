import { apiClient } from "./apiClient";

// get all products
export const getProducts = () => {
  return apiClient("/products");
};

// get featured products
export const getFeaturedProducts = () => {
  return apiClient("/products?offset=0&limit=4");
};