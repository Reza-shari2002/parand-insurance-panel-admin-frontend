import * as yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const fileRequired = (message) =>
  yup
    .mixed()
    .required(message)
    .test("fileExists", message, (value) => {
      return value instanceof File;
    })
    .test("fileSize", "حجم فایل باید کمتر از ۵ مگابایت باشد", (value) => {
      if (!value) return false;
      return value.size <= FILE_SIZE;
    })
    .test("fileFormat", "فرمت فایل باید JPG یا PNG باشد", (value) => {
      if (!value) return false;
      return SUPPORTED_FORMATS.includes(value.type);
    });

export const basicInformationSchema = yup.object({
  full_name: yup
    .string()
    .required("نام و نام خانوادگی الزامی است")
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(50, "نام بیش از حد طولانی"),

  phone_number: yup
    .string()
    .required("شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  document_car_type: yup
    .string()
    .required("انتخاب نوع مدرک الزامی است")
    .oneOf(["0", "1"]),

  national_id_image_url: fileRequired("تصویر کارت ملی الزامی است"),

  car_card_image_front_url: yup.mixed().when("document_car_type", {
    is: "0",
    then: () => fileRequired("تصویر روی کارت ماشین الزامی است"),
    otherwise: () => yup.mixed().nullable(),
  }),

  car_card_image_back_url: yup.mixed().when("document_car_type", {
    is: "0",
    then: () => fileRequired("تصویر پشت کارت ماشین الزامی است"),
    otherwise: () => yup.mixed().nullable(),
  }),

  green_paper_image_url: yup.mixed().when("document_car_type", {
    is: "1",
    then: () => fileRequired("تصویر برگه سبز الزامی است"),
    otherwise: () => yup.mixed().nullable(),
  }),

  address: yup
    .string()
    .required("وارد کردن آدرس ضروری است")
    .min(3, "آدرس را کامل وارد کنید")
    .max(100, "بیش از حد زیاد است"),

  postal_code: yup
    .string()
    .required("کد پستی خود را وارد کنید ")
    .min(3, "کد پستی را کامل وارد کنید")
    .max(50, "به درستی وارد کنید "),
});
