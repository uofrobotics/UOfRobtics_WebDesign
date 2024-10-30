import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from './validators';
import './Components_css/RegistrationModal.css';

function RegistrationModal({ show, onClose }) {
  const [formState, setFormState] = useState({
    inputs: {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = (id, value, isValid) => {
    setFormState((prevFormState) => {
      const updatedInputs = {
        ...prevFormState.inputs,
        [id]: { value, isValid },
      };
      let formIsValid = true;
      for (const inputId in updatedInputs) {
        formIsValid = formIsValid && updatedInputs[inputId].isValid;
      }
      return {
        inputs: updatedInputs,
        isValid: formIsValid,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      // Here we can call a state API to interact with Discord or other services
      console.log('Form Submitted', formState.inputs);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register Now</h2>
        <form onSubmit={formSubmitHandler}>
          <CustomInput
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
          />
          <CustomInput
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password (at least 6 characters)."
            onInput={inputHandler}
          />
          <button type="submit" disabled={!formState.isValid}>
            Register
          </button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RegistrationModal;
