import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const contactRule = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const user_role = ["manager","coach"]


export const employeeSchema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  contact: yup.string().matches(contactRule,{message:"Enter Valied Contact Number"}).min(10).max(10).required("Required"),
  address:yup.string().required("Required"),
  nic:yup.string().min(10).max(12).required("Required"),
  user_role:yup.string().oneOf(user_role,{message:"Select user role"}).required("Required"),
  image:yup.string(),
//   password: yup
//     .string()
//     .min(5)
//     .matches(passwordRules, { message: "Please create a stronger password" })
//     .required("Required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Required"),
});
