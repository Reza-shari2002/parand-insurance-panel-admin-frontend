import axiosInstance from "../utils/axiosInstance";

/**
 * سرویس ارسال اعلان بیمه‌نامه
 * @param {Object} payload - اطلاعات فرم مودال شامل نوع پرداخت، نام، هزینه و اقساط
 */
async function sendNotificationService(payload) {
  try {
    // ارسال درخواست POST به همراه آبجکت بادی به فرمت JSON
    const response = await axiosInstance.post("/notification/send", payload);
    return response.data;
  } catch (error) {
    // خطای دریافتی جهت مدیریت در کنترلر یا هوک پرتاب می‌شود
    throw error;
  }
}

export default sendNotificationService;
