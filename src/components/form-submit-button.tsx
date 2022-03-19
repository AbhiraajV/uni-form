import React from 'react';
import { inputs } from './Input';
import { errorToast } from './toastFunctions';

type Props = {
  userInput: { [k: string]: string };
  inputs: inputs;
  setOutput: React.Dispatch<React.SetStateAction<any>>;
};

function SubmitButton({ userInput, inputs, setOutput }: Props) {
  function ValidatePassword(password: string) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (!password.match(passw)) {
      errorToast("Password's Too Weak");
      return false;
    }
    return true;
  }
  function ValidateEmail(email: string) {
    // console.log({ email });
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      // console.log(true);
      return true;
    }
    errorToast('Invalid Email');
    return false;
  }
  function ValidateInputs() {
    for (const key in userInput) {
      inputs.forEach(input => {
        if (input.name === key) {
          if (input.type === 'email') {
            if (!ValidateEmail(userInput[key])) return false;
          }
          if (input.type === 'password') {
            if (!ValidatePassword(userInput[key])) return false;
          }
          if (input.required && userInput[key].trim() === '') {
            errorToast(userInput[key] + 'is a required field');
            return false;
          }
        }
        return true;
      });
    }
    return true;
  }
  const submissionFunction = () => {
    // console.log(userInput);
    if (!ValidateInputs()) return;
    setOutput(userInput);
  };
  return (
    <div className="justify-center flex-col items-center mt-2 sm:mt-8 flex">
      <button className="Button" onClick={() => submissionFunction()}>
        Get Started
      </button>
    </div>
  );
}

export default SubmitButton;
