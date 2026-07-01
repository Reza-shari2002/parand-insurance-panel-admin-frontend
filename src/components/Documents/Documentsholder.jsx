import { Car, IdCard, MapPin } from "lucide-react";
import Button_continue_not_robot from "../common/Button_continue_not_robot";
import Progressbarandheader from "../common/Progressbarandheader";
import DocumentItem from "../Documents/DocumentItem/DocumentItem";
import DiscountBox from "./DiscountBox/DiscountBox";
import { useEffect, useContext, useState } from "react"; // اضافه کردن useState
import { useNavigate } from "react-router-dom";
import Turnstile from "react-turnstile";
import { context } from "../../context/admincontext"; // مطمئن شو import درست است

const requiredDocuments = [
  {
    id: 1,
    title: "کارت ملی",
    desc: "تصویر کارت ملی خود را ارسال کنید.",
    icon: IdCard,
  },
  {
    id: 2,
    title: "مدارک خودرو",
    desc: "تصویر کارت ماشین از پشت و روی کارت.",
    icon: Car,
  },
  {
    id: 3,
    title: "آدرس و کد پستی",
    desc: "آدرس محل سکونت و کد پستی خود را وارد کنید.",
    icon: MapPin,
  },
];

function Documentsholder() {
  const [captchaToken, setCaptchaToken] = useState(""); // وضعیت محلی برای کنترل دکمه
  const [captchaError, setCaptchaError] = useState("");

  // فرض می‌کنیم در context فیلدی به نام set_captcha_token داریم تا در مراحل بعد استفاده کنیم
  const { current_page, set_captcha_token } = useContext(context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (current_page < 1) {
      navigate("/home");
    }
  }, [current_page, navigate]);

  // تابعی که وقتی کپچا تایید شد اجرا می‌شود
  const handleVerify = (token) => {
    setCaptchaToken(token);
    setCaptchaError("");
    if (set_captcha_token) set_captcha_token(token); // ذخیره در Context برای استفاده در مرحله آخر
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 py-8 pb-32 md:pb-12">
      <Progressbarandheader
        current_step={1}
        title={"مدارک مورد نیاز"}
        body={"موارد زیر را تهیه کنید"}
      />

      <div className="mt-8 flex flex-col gap-4 w-full">
        {requiredDocuments.map((item) => (
          <DocumentItem key={item.id} {...item} />
        ))}
      </div>

      <DiscountBox />

      {/* بخش کپچا */}
      <div className="mt-8 flex flex-col items-center gap-2 w-full">
        <Turnstile
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onVerify={handleVerify}
          onExpire={() => {
            setCaptchaToken("");
            setCaptchaError("اعتبار کپچا تمام شد. لطفاً دوباره تایید کنید.");
          }}
          onError={() => {
            setCaptchaToken("");
            setCaptchaError("خطا در بارگذاری کپچا. لطفاً دوباره تلاش کنید.");
          }}
          options={{
            theme: "light",
            language: "fa",
          }}
        />
        {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
      </div>

      {/* دکمه ادامه - حالا captchaToken را به آن پاس می‌دهیم */}
      <Button_continue_not_robot
        path={"/basic-information"}
        step={1}
        isCaptchaVerified={!!captchaToken} // !! تبدیل به boolean واقعی می‌کند
      />
    </div>
  );
}

export default Documentsholder;
