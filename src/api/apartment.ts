import axios from "../utils/axios";

export const getApartmentsList = async () => {
  const data = await axios.get("/apartments");
  console.log("data: ", data);
  return data;
};

export const getApartmentById = (id: string) => {
  return axios.get(`/apartments/${id}`);
};
