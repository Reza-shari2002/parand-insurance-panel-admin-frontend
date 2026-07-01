import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Turnstile from "react-turnstile";

import { context } from "../../context/Formcontext";
import Progressbarandheader from "../common/Progressbarandheader";
import CompletionCard from "./CompletionCard/CompletionCard";
import StatusModal from "./StatusModal/StatusModal";
import { confirm } from "../../services/confirmService";

function Confirm_holder() {
  const navigate = useNavigate();
  const { set_current_page, data, captchaToken, current_page } =
    useContext(context);

  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    success: false,
    title: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    set_current_page(5);
  }, [set_current_page]);

  useEffect(() => {
    if (current_page < 5) {
      navigate("/home");
    }
  }, [current_page, navigate]);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = { ...data };
      const responseData = await confirm(payload, captchaToken);

      setModal({
        open: true,
        success: true,
        title: "ثبت موفق",
        message: responseData?.message || "اطلاعات شما با موفقیت ثبت شد.",
      });
    } catch (error) {
      const status = error?.response?.status;
      setModal({
        open: true,
        success: false,
        title: status === 403 ? "داده ارسالی اشتباه" : "خطا",
        message: ` ${
          error?.response?.data?.message ||
          "خطایی رخ داد. لطفاً دوباره تلاش کنید."
        } statuscode:${error?.response?.data?.status || "خطا در ارسال"} `,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleModalConfirm = () => {
    setModal((prev) => {
      if (prev.success) {
        navigate("/home");
      }

      return {
        ...prev,
        open: false,
      };
    });
  };

  return (
    <>
      <Progressbarandheader current_step={5} title="ثبت اطلاعات" body="" />

      <div className="w-full px-4 pb-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <CompletionCard />

          <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              تایید امنیتی
            </h3>

            <p className="text-sm text-gray-500 mb-4 leading-7">
              برای ثبت نهایی اطلاعات، ابتدا گزینه «من ربات نیستم» را تایید کنید.
            </p>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`mt-5 w-full rounded-xl py-3 font-bold text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {loading ? "در حال ثبت..." : "ثبت اطلاعات"}
            </button>
          </div>
        </div>
      </div>

      <StatusModal
        open={modal.open}
        success={modal.success}
        title={modal.title}
        message={modal.message}
        onConfirm={handleModalConfirm}
      />
    </>
  );
}

export default Confirm_holder;
