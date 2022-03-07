import axios from "axios";

const API_URL = "/api/v1/room/";

const createRoom = async (room) => {
  const response = await axios.post(API_URL, room);

  return response.data;
};
const getRoom = async (id) => {
  const response = await axios.get(API_URL + id);

  return response.data;
};

const roomService = {
  createRoom,
  getRoom,
};
export default roomService;
