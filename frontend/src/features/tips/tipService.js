import axios from "axios";

const API_URL = "/api/tips/";

// Create new tip
const createTip = async (tipData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, tipData, config);

  return response.data;
};

// Get user tips
const getTips = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const tipService = {
  createTip,
  getTips,
};

export default tipService;
