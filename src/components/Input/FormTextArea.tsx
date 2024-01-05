'use client';

import EyeIcon from 'assets/icons/icons/EyesIcon';
import React from 'react';

interface Props {
  name: string;
  value: string | number | undefined;
  onChange: any;
  placeholder?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onBlur?: any;
  hideBorder?: boolean;
  onKeyPress?: any;
  onFocus?: any;
  helperText?: string;
  rows?: number;
}

{
  /* <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
<label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating filled</label> */
}

const TextArea = ({
  className,
  label,
  error,
  hideBorder,
  helperText,
  placeholder,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={`flex-grow w-full z-0 ${className || ''}`}>
      <div
        className={`relative bg-white rounded-xl border h-fit flex ${
          error ? 'border-required-red' : 'border-dark-grey-150'
        } ${props?.disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        <textarea
          id={props?.name}
          className={` block resize-none bg-white font-proxima ${
            label ? 'pt-6' : 'pt-0'
          } inset-x-0 rounded-xl flex-grow px-[21px] w-full text-base text-dark-grey-200 border-none appearance-none focus:outline-none focus:ring-0 peer cursor-text`}
          {...props}
          placeholder={placeholder || ''}
        />
        {label && (
          <label
            htmlFor={props?.name}
            className={`absolute font-proxima text-xs cursor-text ${
              error
                ? 'peer-focus:text-required-red text-required-red'
                : 'peer-focus:text-ascent text-ascent'
            } duration-300 transform top-[6px] z-10 origin-[0] left-[21px] ${
              props?.value
                ? ''
                : 'peer-placeholder-shown:text-dark-grey-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-[15px]'
            } peer-focus:text-xs peer-focus:top-[6px]`}
          >
            {label}
            {props?.required && (
              <span className="text-required-red ml-1 ">*</span>
            )}
          </label>
        )}
      </div>
      {helperText && (
        <span className="text-dark-grey-200 text-sm leading-4 mt-2 font-proxima items-end block">
          {helperText}
        </span>
      )}
      {error && (
        <span className="text-required-red text-sm leading-4 mt-2 font-proxima items-end block">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextArea;
