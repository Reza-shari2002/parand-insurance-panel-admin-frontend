import * as yup from "yup";

const schema = yup.object({
  user_name: yup
    .string()
    .min(2, "کامل وارد کنید")
    .max(50, "معتبر وارد کنید ")
    .required("وارد کنید"),
  password: yup
    .string()
    .min(2, "کامل وارد کنید")
    .max(50, "معتبر وارد کنید ")
    .required("وارد کنید"),
});

export default schema;
