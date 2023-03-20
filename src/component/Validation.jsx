import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().required().email("Invalid Email Format"),
  password: Yup.string()
    .required()
    .min(8, "Should more than 8 characters")
    .matches(/[a-z]/g, "Should contain at least 1 lowercase")
    .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
    .matches(/[0-9]/g, "Should contain at least 1 number")
    .matches(/^\S*$/, "Should not contain spaces"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
  agreement: Yup.bool().isTrue("Field must be checked"),
});
