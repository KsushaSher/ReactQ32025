import { useNavigate } from 'react-router-dom';
import '../../styles/main.scss';
import { ROUTES } from '../../shared/constants';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { validationSchema } from '../../shared/validation/validation-schema';
import { setControlledDataItem } from '../../store/slices/formsSlice';
import { useAppSelector } from '../../store/hooks';
import { selectCountries } from '../../store/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { ControlFormValues } from '../../models/form';

const ControlledForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useAppSelector(selectCountries);

  const onClose = () => navigate(ROUTES.MAIN);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ControlFormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema, { abortEarly: false }),
  });

  const onSubmit = (data: ControlFormValues) => {
    const { image, ...values } = data;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;

      dispatch(setControlledDataItem({ image: base64String, ...values }));
      navigate(ROUTES.MAIN);
    };

    if (image instanceof FileList) reader.readAsDataURL(image[0]);
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_header">
          <h1>Controlled form</h1>
        </div>

        <div className="field">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" {...register('name')} />
          {errors.name && <p className="error-field">{errors.name.message}</p>}
        </div>

        <div className="field">
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" {...register('age')} />
          {errors.age && <p className="error-field">{errors.age.message}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register('email')} />
          {errors.email && (
            <p className="error-field">{errors.email.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="password" data-testid={'password'}>
            Password:
          </label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && (
            <p className="error-field">{errors.password.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="error-field">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="field">
          <label>Gender:</label>
          <div className="gender-content">
            <div>
              <label htmlFor="male">male</label>
              <input
                id="male"
                type="radio"
                value="male"
                {...register('gender')}
              />
            </div>
            <div>
              <label htmlFor="female">female</label>
              <input
                id="female"
                type="radio"
                value="female"
                {...register('gender')}
              />
            </div>
          </div>
          {errors.gender && (
            <p className="error-field">{errors.gender.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="image">Upload picture:</label>
          <input
            id="image"
            type="file"
            accept=".png, .jpeg, .jpg"
            multiple={false}
            {...register('image')}
          />
          {errors.image && (
            <p className="error-field">{errors.image.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="country">Country:</label>
          <select id="country" className="select" {...register('country')}>
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="error-field">{errors.country.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="acceptTerms ">Accept Terms and Conditions</label>
          <input
            id="acceptTerms"
            type="checkbox"
            className="accept-terms"
            {...register('acceptTerms')}
          />
          {errors.acceptTerms && (
            <p className="error-field">{errors.acceptTerms.message}</p>
          )}
        </div>

        <button type="submit" className="button light-btn">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ControlledForm;
