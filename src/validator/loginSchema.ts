import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$/, 
      'Enter the right email'),
  password: yup
    .string()
    .required("Password is required")
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,32}$ /, 
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
});

export default loginSchema;
