import axios from "axios";

export async function confirm(payload, captchaToken) {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });
  const response = await axios.post("http://localhost:3000/forms", formData, {
    // برای استقرار نهایی از کامنت خارج شود

    headers: {
      "x-captcha-token": captchaToken,
    },
  });
  console.log(response.status);

  return response.data;
}
