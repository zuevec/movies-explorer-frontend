import { useState, useCallback } from 'react';
const useForm = () => {
  const [enteredValues, setEnteredValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsValid(event.target.closest('.form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newisValid = false) => {
      setEnteredValues(newValues);
      setErrors(newErrors);
      setIsValid(newisValid);
    },
    [setEnteredValues, setErrors, setIsValid]
  );

  return {
    enteredValues,
    errors,
    handleChange,
    isValid,
    resetForm,
  };
};

export default useForm;
