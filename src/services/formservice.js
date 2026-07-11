import axiosInstance from "../utils/axiosInstance";

async function getforms() {
  try {
    const response = await axiosInstance.get("/forms");
    return response.data.data;
  } catch (err) {
    console.log(err.response?.data?.message);

    throw err;
  }
}

export default getforms;
