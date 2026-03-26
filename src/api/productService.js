import { apiClient } from "./apiClient";

// get all products
export const getProducts = (search = "") => {
  if (search) {
    return apiClient(`/products/?title=${search}`);
  }
  return apiClient("/products");
};

// get featured products
export const getFeaturedProducts = () => {
  return apiClient("/products?offset=0&limit=4");
};