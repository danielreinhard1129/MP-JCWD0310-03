import * as Yup from 'yup';

export const RegisterValidationSchema = Yup.object().shape({
  username: Yup.string().required('username is required'),
  email: Yup.string().required('email is required').email(),
  password: Yup.string().required('password is required'),
  role: Yup.string().required('Role should be chosen!'),
});
