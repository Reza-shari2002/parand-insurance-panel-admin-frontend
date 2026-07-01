import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json"
  }
});

export async function loginService({ user_name, password }) {
  try {

    const response = await api.post("/login", {
      user_info: {
        user_name,
        password
      }
    });

    return response.data;

  } catch (err) {

    if (err.response) {
      throw err.response.data;
    }

    throw { message: "خطا در ارتباط با سرور" };
  }
}
