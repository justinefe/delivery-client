import { useState } from 'react';
import { validate } from 'src/helpers';
import toast from 'react-hot-toast';

export default function Input({
  inputs,
  submitButton,
  cb,
  validateForm = true,
  initials = {},
}) {
  const initialInputs =
    inputs &&
    inputs.reduce(
      (acc, input) => ({
        ...acc,
        [input.name]: initials[input.name] ? initials[input.name] : '',
      }),
      {}
    );
  const [validateSelf, setValidateSelf] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTypes, setInputTypes] = useState(initialInputs);

  const handleSubmit = async e => {
    e.preventDefault();

    let requiredKeys = inputs.reduce((acc, input) => {
      if (input.required || inputTypes[input.name])
        return { ...acc, [input.name]: inputTypes[input.name] };
      else return acc;
    }, {});

    const shouldSubmit = Object.keys(requiredKeys).some(key => {
      return !validate(requiredKeys[key], key);
    });

    if (shouldSubmit && validateForm) {
      toast.success('Please ensure the form is complete');

      setValidateSelf(true);
      return;
    }

    submitButton.current.disabled = true;
    setLoading(true);

    let response;

    try {
      response = await cb(inputTypes, setInputTypes);
      setInputTypes(initialInputs);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500)
          error.message = 'Network error please try again';
        else error.message = error.response.data.error;
      } else error.message = error.message || 'Error occured';

      const err = Array.isArray(error.message)
        ? error.message.join(', ')
        : error.message;

      toast.error(err, {
        duration: 10000,
      });

      if (submitButton.current) {
        submitButton.current.disabled = false;
      }

      setLoading(false);
      return;
    }

    return { msg: 'success', response };
  };

  const handleChange = (event, error) => {
    const { name, value, type, checked } = event.target;
    setInputTypes({
      ...inputTypes,
      [name]: type === 'checkbox' ? (checked ? checked : false) : value,
    });
  };

  return [
    handleSubmit,
    handleChange,
    inputTypes,
    validateSelf,
    setValidateSelf,
    setInputTypes,
    loading,
  ];
}
