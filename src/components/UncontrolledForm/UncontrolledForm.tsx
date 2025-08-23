import { useRef } from 'react';
import '../../styles/main.scss';

export const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_header">
        <h1>Uncontrolled form</h1>
      </div>

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" ref={nameRef} />
      </div>

      <div className="field">
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" ref={ageRef} />
      </div>

      <div className="field">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" ref={emailRef} />
      </div>

      <div className="field">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef} />
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" ref={confirmPasswordRef} />
      </div>

      <div className="field">
        <label>Gender:</label>
        <div className="gender-content">
          <div>
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" value="male" ref={genderRef} />
          </div>
          <div>
            <label htmlFor="female">female</label>
            <input type="radio" name="female" value="female" ref={genderRef} />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="image">Upload picture:</label>
        <input
          id="image"
          type="file"
          accept=".png, .jpeg, .jpg"
          multiple={false}
          ref={imageRef}
        />
      </div>

      <div className="field">
        <label htmlFor="country">Country:</label>
        <select id="country" ref={countryRef}>
          <option value="">Select a country</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="acceptTerms ">Accept Terms and Conditions</label>
        <input id="acceptTerms" type="checkbox" ref={acceptTermsRef} />
      </div>

      <button type="submit" className="button light-btn">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
