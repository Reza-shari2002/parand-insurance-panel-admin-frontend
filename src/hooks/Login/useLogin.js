import { useState } from "react";
import {useNavigate } from "react-router-dom"
import { loginService } from "../../services/Login";
function useLogin(){


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

async function submit(data) {
  try {
    setLoading(true);
    setServerError("");

    const res = await loginService(data);

    const token = res.access_token;

    localStorage.setItem("access_token", token);

    navigate("/dashboard");

  } catch (err) {

    setServerError(err.message || "خطا در ورود");

  } finally {
    setLoading(false);
  }


}

  return {loading:loading , setLoading:setLoading  , serverError:serverError , setServerError:setServerError , submit:submit}




}

export default useLogin;