import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export default loginSchema;
