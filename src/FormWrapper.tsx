import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  onSubmit?: any;
  buttonText: string;
  className?: string;
  loading?: boolean;
};

const FormWrapper = ({
  title,
  children,
  buttonText,
  className,
  onSubmit,
  loading,
}: Props) => {
  return (
    <form
      className={` w-full px-[34px] sm:px-[44px] pt-[44px] pb-[64px] min-h-[100px ${
        className || ""
      }`}
    >
      <h3 className="font-proxima text-center text-[#577c9e] text-[32px] font-semibold uppercase leading-snug mb-16">
        {title}
      </h3>
      {children}
      <button
        onClick={onSubmit}
        disabled={loading}
        className={`w-full h-[52px] relative rounded-2xl shadow-form-btn flex items-center justify-center bg-[#577c9e]${
          loading ? "" : ""
        }`}
      >
        <span className="font-proxima text-center text-white font-semibold leading-snug">
          {buttonText}
        </span>
      </button>
    </form>
  );
};

export default FormWrapper;
