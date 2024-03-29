import * as yup from "yup";
export const basicSchema = yup.object().shape({
  username: yup.string().required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});

export const endpoint = "https://lurm.onrender.com/api/v1/";
