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

const tipService = {
  createTip,
};

export default tipService;
