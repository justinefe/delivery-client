import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { validateInput, validate } from '../../helpers';
import Eye from 'assets/icons/icons/Eye';
// import Hide from 'assets/icons/icons/Hide';
import styles from './style.module.scss';

const Input = ({
  type = 'text',
  name,
  placeHolder = 'Place Holder',
  value,
  errorMsg = '',
  valErrorMsg,
  required = false,
  validateSelf = false,
  handleChange,
  reviel,
  revielPassword,
  setValidateSelf,
  attr = {},
  open = false,
  inputValidate = true,
  example,
}: any) => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(errorMsg);
  const [internalValue, setInternalValue] = useState(value);
  const [typing, setTyping] = useState(false);

  const inputCon: any = React.createRef();
  const inputRef: any = React.createRef();

  useEffect(() => {
    if (validateSelf && required) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputCon.current.classList.add(styles['typing'], styles['invalid']);
        inputCon.current.classList.remove(styles['valid']);
        setErrorMessage(errorMsg);
        setError(true);
      }
    }

    setInternalValue(value);
  }, [inputCon, name, validateSelf, value, required, errorMsg, valErrorMsg]);

  useEffect(() => {
    if (internalValue === '' || !internalValue) {
      setErrorMessage(valErrorMsg);
      inputCon.current.classList.remove(styles['typing']);
    } else {
      inputCon.current.classList.add(styles['typing']);

      if (inputValidate) {
        const isValid = validate(value, name);

        if (!isValid) {
          inputCon.current.classList.add(styles['invalid']);
          inputCon.current.classList.remove(styles['valid']);
          setErrorMessage(errorMsg);
          setError(true);
        } else {
          inputCon.current.classList.add(styles['valid']);
          inputCon.current.classList.remove(styles['invalid']);
          setError(false);
        }
      } else {
        inputCon.current.classList.add(styles['valid']);
        inputCon.current.classList.remove(styles['invalid']);
      }
    }
  }, [
    value,
    inputCon,
    valErrorMsg,
    open,
    errorMsg,
    inputValidate,
    name,
    required,
    internalValue,
  ]);

  function addCommas(x: any) {
    x = x.split(',').join('');

    if (x === '') return '';
    if (!Number(x)) return value;

    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const validateOne = (event: any) => {
    if (type === 'formattednumber') {
      event.target.value = addCommas(event.target.value);
    }

    handleChange?.(event, error);

    if (!inputValidate) {
      if (value) {
        inputCon.current.classList.add(styles['typing']);
      }
      return;
    }

    setValidateSelf && setValidateSelf(false);
    if (!validateInput(event)) {
      inputCon.current.classList.add(styles['invalid']);
      inputCon.current.classList.remove(styles['valid']);

      setErrorMessage(errorMsg);
      setError(true);
    } else {
      inputCon.current.classList.remove(styles['invalid']);
      inputCon.current.classList.add(styles['valid']);

      setError(false);
    }

    setInternalValue(event.target.value);
  };
  return (
    <div className={styles['input-div']}>
      <div className={styles['input']}>
        <div className={styles['input-con']} ref={inputCon}>
          {type === 'textarea' ? (
            <textarea
              className={classNames(styles['input-type'], styles['textarea'])}
              required={required}
              name={name}
              onChange={validateOne}
              value={value}
              rows={5}
              ref={inputRef}
              placeholder={example && (typing || error) ? example : ''}
            />
          ) : (
            <>
              <input
                onFocus={() => setTyping(true)}
                onBlur={() => setTyping(false)}
                className={styles['input-type']}
                type={reviel ? 'text' : type}
                required={required}
                name={name}
                onChange={validateOne}
                value={value}
                ref={inputRef}
                {...attr}
                placeholder={example && (typing || error) ? example : ''}
              />
            </>
          )}

          <div className={styles['el-spans']}>
            <span style={{ zIndex: '-1' }} className={styles['place-holder']}>
              {placeHolder}
            </span>

            <span
              className={classNames(
                styles['grow'],
                'absolute w-full bottom-0 left-0 origin-left'
              )}
            />
          </div>

          {value && type === 'password' ? (
            <span
              onClick={() => {
                setShowPassword(!showPassword);
                revielPassword();
              }}
              className={styles['reviel-password']}
            >
              {!showPassword ? <Eye /> : <Eye />}
            </span>
          ) : null}

          <p
            className={classNames(
              styles['error'],
              'absolute right-0 top-0 mr-2.5 text-tomato'
            )}
            style={{ display: error ? 'block' : 'none' }}
          >
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
