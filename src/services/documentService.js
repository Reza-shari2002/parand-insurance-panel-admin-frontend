import axiosInstance from "../utils/axiosInstance";

/**
 * دریافت فایل ایمن از سرور به صورت Blob
 * @param {string} imageUrl - آدرس کامل یا نسبی تصویر مدارک
 * @returns {Promise<Blob>}
 */
export const fetchDocumentBlob = async (imageUrl) => {
  const response = await axiosInstance.get(imageUrl, {
    responseType: "blob",
  });
  return response.data;
};
