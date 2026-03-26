const BASE_URL = "https://api.escuelajs.co/api/v1";

export const apiClient = async (endpoint, options = {}) => {
  try {

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "API request failed");
    }

    return data;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};