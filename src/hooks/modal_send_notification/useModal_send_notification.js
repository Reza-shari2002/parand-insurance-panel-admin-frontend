import { useMemo, useState } from "react";
import sendNotificationService from "../../services/sendNotificationService";

function useModal_send_notification({ full_name, phone_number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    full_name: full_name || "",
    phone_number: phone_number || "",
    payment_type: "0",
    date: new Date().toISOString(),
    car_name: "",
    total_cost: "",
    precome: "",
    cost_of_rate: "",
    count_of_rate: "",
  });

  const openModal = () => {
    setForm((prev) => ({
      ...prev,
      full_name: full_name || "",
      phone_number: phone_number || "",
      date: new Date().toISOString(),
    }));
    setErrorMsg("");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const makeMessage = () => {
    const {
      full_name,
      payment_type,
      date,
      car_name,
      total_cost,
      precome,
      cost_of_rate,
      count_of_rate,
    } = form;

    const formattedTotalCost = Number(total_cost || 0).toLocaleString("fa-IR");
    const formattedPrecome = Number(precome || 0).toLocaleString("fa-IR");
    const formattedCostOfRate = Number(cost_of_rate || 0).toLocaleString("fa-IR");

    if (payment_type === "0") {
      const formattedDate = new Date(date).toLocaleDateString("fa-IR");
      return `کاربر گرامی آقای ${full_name}، بیمه نامه خودرو ${car_name} به مبلغ ${formattedTotalCost} ریال به صورت نقد در تاریخ ${formattedDate} برای شما ثبت گردید.`;
    }

    return `کاربر گرامی آقای ${full_name}، بیمه نامه خودرو ${car_name} به مبلغ کل ${formattedTotalCost} ریال به صورت اقساط با پیش پرداخت ${formattedPrecome} ریال و ${count_of_rate} ماهه و اقساط ${formattedCostOfRate} ریال در تاریخ ${date} برای شما ثبت گردید.`;
  };

  const previewMessage = useMemo(() => {
    return makeMessage();
  }, [form]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // ساخت ساختار JSON استاندارد با توجه به نوع پرداخت انتخابی
      const payload = {
        full_name: form.full_name,
        phone_number: form.phone_number,
        payment_type: form.payment_type,
        date: form.date,
        car_name: form.car_name,
        total_cost: Number(form.total_cost),
        ...(form.payment_type === "1"
          ? {
              precome: Number(form.precome),
              cost_of_rate: Number(form.cost_of_rate),
              count_of_rate: Number(form.count_of_rate),
            }
          : {}),
      };

      await sendNotificationService(payload);
      closeModal();
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "خطایی در ارسال رخ داد.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    isOpen,
    loading,
    errorMsg,
    form,
    previewMessage,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
  };
}

export default useModal_send_notification;
