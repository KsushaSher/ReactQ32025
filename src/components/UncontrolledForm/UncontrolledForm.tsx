import { useState } from 'react';
import '../../styles/main.scss';
import { validationSchema } from '../../shared/validation/validation-schema';
import * as Yup from 'yup';
import type { Errors } from '../../models';
import { selectCountries } from '../../store/selectors/forms.selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import type { FormValues } from '../../models/form';
import { setUncontrolledDataItem } from '../../store/slices/formsSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import { convertFormToObject } from '../../utils/convert-form-to-object';
import Modal from '../Modal/Modal';

export const UncontrolledForm = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const [errors, setErrors] = useState<Errors>({});

  const onClose = () => navigate(ROUTES.MAIN);

  const validate = async (values: FormValues): Promise<FormValues | null> => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});

      return values;
    } catch (err) {
      const validationErrors: Errors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path as keyof Errors] = error.message;
          }
        });
      }

      setErrors(validationErrors);

      return null;
    }
  };

  const getFormData = (event: React.FormEvent<HTMLFormElement>): FormValues => {
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = convertFormToObject(data);

    const formValues: FormValues = {
      name: String(values.name) || '',
      age: Number(values.age) || 0,
      email: String(values.email) || '',
      password: String(values.password) || '',
      confirmPassword: String(values.confirmPassword) || '',
      gender: String(values.gender) || '',
      image: form.image.files?.[0] || null,
      country: String(values.country) || '',
      acceptTerms: form.acceptTerms.checked,
    };

    return formValues;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = getFormData(event);
    const validatedValues = await validate(values);

    if (validatedValues) {
      const { image, ...values } = validatedValues;
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        const temp = { image: base64String, ...values };

        dispatch(setUncontrolledDataItem(temp));
        navigate(ROUTES.MAIN);
      };

      if (image instanceof File) reader.readAsDataURL(image);
    }
  };

  return (
    <Modal isShowing onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form_header">
          <h1>Uncontrolled form</h1>
        </div>

        <div className="field">
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
          {errors.name && <p className="error-field">{errors.name}</p>}
        </div>

        <div className="field">
          <label htmlFor="age">Age:</label>
          <input id="age" name="age" type="number" />
          {errors.age && <p className="error-field">{errors.age}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
          {errors.email && <p className="error-field">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
          {errors.password && <p className="error-field">{errors.password}</p>}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" name="confirmPassword" type="password" />
          {errors.confirmPassword && (
            <p className="error-field">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="field">
          <label>Gender:</label>
          <div className="gender-content">
            <div>
              <label htmlFor="male">male</label>
              <input id="male" type="radio" name="gender" value="male" />
            </div>
            <div>
              <label htmlFor="female">female</label>
              <input id="female" type="radio" name="gender" value="female" />
            </div>
          </div>
          {errors.gender && <p className="error-field">{errors.gender}</p>}
        </div>

        <div className="field">
          <label htmlFor="image">Upload picture:</label>
          <input
            id="image"
            name="image"
            type="file"
            accept=".png, .jpeg, .jpg"
            multiple={false}
          />
          {errors.image && <p className="error-field">{errors.image}</p>}
        </div>

        <div className="field">
          <label htmlFor="country">Country:</label>
          <select id="country" name="country" className="select">
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error-field">{errors.country}</p>}
        </div>

        <div className="field">
          <label htmlFor="acceptTerms ">Accept Terms and Conditions</label>
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            className="accept-terms"
          />
          {errors.acceptTerms && (
            <p className="error-field">{errors.acceptTerms}</p>
          )}
        </div>

        <button type="submit" className="button light-btn">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default UncontrolledForm;
