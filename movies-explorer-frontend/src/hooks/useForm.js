import { useState, useCallback } from 'react';
const useForm = () => {
  const [enteredValues, setEnteredValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const useemailRegEForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });

    if (name === 'email') {
      if (!useemailRegEForm.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Не валидный email',
        });
      } else {
        setErrors({
          ...errors,
          [name]: event.target.validationMessage,
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: event.target.validationMessage,
      });
    }

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
