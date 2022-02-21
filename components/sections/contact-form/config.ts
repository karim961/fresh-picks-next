import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  company_name: yup.string().required('Company name is required'),
  country: yup.string().required('Country is required'),
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^\+?[0-9]{10,15}$/, 'Phone number is invalid'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});
