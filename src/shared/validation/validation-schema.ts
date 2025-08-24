import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z][a-zA-Z]*$/, 'Name must start with an uppercase letter.')
    .required('Name is required.'),

  age: Yup.number()
    .positive('Age must be a positive number.')
    .integer('Age must be an integer.')
    .required('Age is required.'),

  email: Yup.string()
    .email('Invalid email format.')
    .required('Email is required.'),

  password: Yup.string()
    .required('Password is required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{4,}$/,
      'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.'
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match.')
    .required('Password confirmation is required.'),

  gender: Yup.string().required('Gender is required.'),

  acceptTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions.')
    .required('Acceptance of terms and conditions is required.'),

  image: Yup.mixed<FileList>()
    .test('fileSize', 'File is too large.', (value) => {
      const file = value?.[0];

      return file ? file.size <= 500000 : true;
    })
    .test('fileType', 'Unsupported file format.', (value) => {
      const file = value?.[0];

      return file
        ? ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)
        : true;
    })
    .required('Image confirmation is required.'),

  country: Yup.string().required('Country selection is required.'),
});
