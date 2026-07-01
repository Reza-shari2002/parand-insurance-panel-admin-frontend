import * as yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

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

const schema = yup.object({
  is_relative_transfer: yup
    .string()
    .oneOf(["0", "1"])
    .required("لطفاً وضعیت انتقال تخفیف را مشخص کنید."),

  relationship_docs1_image_person1_url: yup
    .mixed()
    .when("is_relative_transfer", {
      is: "1",
      then: () => fileRequired("تصویر صفحه اول شناسنامه شما الزامی میباشد"),
      otherwise: () => yup.mixed().nullable(),
    }),

  relationship_docs2_image_person1_url: yup
    .mixed()
    .when("is_relative_transfer", {
      is: "1",
      then: () => fileRequired("تصویر صفحه دوم شناسنامه شما الزامی است"),
      otherwise: () => yup.mixed().nullable(),
    }),

  relationship_docs1_image_person2_url: yup
    .mixed()
    .when("is_relative_transfer", {
      is: "1",
      then: () => fileRequired("تصویر صفحه اول شناسنامه شخص مورد نظر الزامیست"),
      otherwise: () => yup.mixed().nullable(),
    }),

  relationship_docs2_image_person2_url: yup
    .mixed()
    .when("is_relative_transfer", {
      is: "1",
      then: () => fileRequired("تصویر صفحه دوم شناسنامه شخص مورد نظر الزامیست"),
      otherwise: () => yup.mixed().nullable(),
    }),
});

export default schema;
