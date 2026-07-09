import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import sendNotificationService from "../../services/sendNotificationService";

function useModal_send_notification({ full_name, phone_number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      full_name: full_name || "",
      phone_number: phone_number || "",
      payment_type: "0",
      date: new Date().toISOString(),
      car_name: "",
      total_cost: "",
      precome: "",
      cost_of_rate: "",
      count_of_rate: "",
    },
  });

  const paymentType = watch("payment_type");
  const watchedForm = watch();

  const openModal = () => {
    reset({
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

    setServerError("");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setServerError("");
  };

  const makeMessage = (form) => {
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
      const formattedDate = date
        ? new Date(date).toLocaleDateString("fa-IR")
        : "-";

      return `کاربر گرامی آقای ${full_name || "-"}، بیمه نامه خودرو ${car_name || "-"} به مبلغ ${formattedTotalCost} ریال به صورت نقد در تاریخ ${formattedDate} برای شما ثبت گردید.`;
    }

    const formattedDate = date
      ? new Date(date).toLocaleDateString("fa-IR")
      : "-";

    return `کاربر گرامی آقای ${full_name || "-"}، بیمه نامه خودرو ${car_name || "-"} به مبلغ کل ${formattedTotalCost} ریال به صورت اقساط با پیش پرداخت ${formattedPrecome} ریال و ${count_of_rate || 0} ماهه و اقساط ${formattedCostOfRate} ریال در تاریخ ${formattedDate} برای شما ثبت گردید.`;
  };

  const previewMessage = useMemo(() => {
    return makeMessage(watchedForm);
  }, [watchedForm]);

  const onSubmit = async (formData) => {
    setServerError("");

    try {
      const payload = {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        payment_type: formData.payment_type,
        date: formData.date,
        car_name: formData.car_name,
        total_cost: Number(formData.total_cost),
        ...(formData.payment_type === "1"
          ? {
              precome: Number(formData.precome),
              cost_of_rate: Number(formData.cost_of_rate),
              count_of_rate: Number(formData.count_of_rate),
            }
          : {}),
      };

      await sendNotificationService(payload);
      closeModal();
    } catch (error) {
      setServerError(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          "خطایی در ارسال درخواست رخ داد."
      );
    }
  };

  return {
    isOpen,
    serverError,
    register,
    errors,
    paymentType,
    previewMessage,
    isSubmitting,
    openModal,
    closeModal,
    onSubmit: handleSubmit(onSubmit),
    setValue,
  };
}

export default useModal_send_notification;
