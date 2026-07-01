import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/loginSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginService } from "../../services/Login";


function LoginHolder() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

async function submit(data) {
  try {
    setLoading(true);
    setServerError("");

    const res = await loginService(data);

    const token = res.access_token;

    localStorage.setItem("access_token", token);

    navigate("/home");

  } catch (err) {

    setServerError(err.message || "خطا در ورود");

  } finally {
    setLoading(false);
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 font-vazir">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-6">
          پنل ادمین بیمه
        </h1>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div>
            <input
              type="text"
              dir="ltr"
              placeholder="نام کاربری"
              {...register("user_name")}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_name.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور"
                {...register("password")}
                dir="ltr"
                className="w-full p-2 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>



          {serverError && (
            <p className="text-red-600 text-sm text-center">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginHolder;
