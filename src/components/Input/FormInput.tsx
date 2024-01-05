import EyeIcon from "../../assets/EyesIcon";
import React from "react";

interface Props {
  name: string;
  type?: string;
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
}

const Input = ({
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
    <div className={`flex-grow w-full z-0 ${className || ""}`}>
      <div
        className={`relative bg-white rounded-xl border h-[55px] flex ${
          error ? "border-required-red" : "border-dark-grey-150"
        } ${props?.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {props?.type === "textarea" ? (
          <textarea
            id={props?.name}
            placeholder={placeholder || ""}
            className={`absolute red font-proxima ${
              label ? "bottom-[6px]" : "bottom-1/2 translate-y-1/2"
            } inset-x-0 rounded-xl flex-grow px-[21px] w-full text-base text-dark-grey-200 border-none appearance-none focus:outline-none focus:ring-0 peer cursor-text`}
            {...props}
            {...props}
          />
        ) : (
          <input
            id={props?.name}
            className={`absolute bg-white font-proxima ${
              label ? "bottom-[6px]" : "bottom-1/2 translate-y-1/2"
            } inset-x-0 rounded-xl flex-grow px-[21px] w-full text-base text-dark-grey-200 border-none appearance-none focus:outline-none focus:ring-0 peer cursor-text`}
            {...props}
            placeholder={placeholder || ""}
            type={
              props?.type === "password" && showPassword ? "text" : props?.type
            }
          />
        )}
        {label && (
          <label
            htmlFor={props?.name}
            className={`absolute font-proxima text-xs cursor-text ${
              error
                ? "peer-focus:text-required-red text-required-red"
                : "peer-focus:text-[#577c9e] text-[#577c9e]"
            } duration-300 transform top-[6px] z-10 origin-[0] left-[21px] ${
              props?.value
                ? ""
                : "peer-placeholder-shown:text-dark-grey-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-[15px]"
            } peer-focus:text-xs peer-focus:top-[6px]`}
          >
            {label}
            {props?.required && (
              <span className="text-required-red ml-1 ">*</span>
            )}
          </label>
        )}
        {props?.type === "password" && (
          <div className="absolute top-0 right-4 bottom-0 flex items-center">
            <EyeIcon
              isOpen={showPassword}
              handleClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
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

export default Input;
