import axios from "axios";

const API_URL = "/api/v1/player/";

const createPlayer = async (name) => {
  const response = await axios.post(API_URL, { name });
  if (response.data) {
    const { name, _id } = response.data;
    localStorage.setItem("player", JSON.stringify({ name, id: _id }));
  }
  return response.data;
};
const getPlayer = async (id) => {
  const response = await axios.get(API_URL + id);

  return response.data;
};

const playerService = {
  createPlayer,
  getPlayer,
};
export default playerService;
