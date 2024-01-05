import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Location = ({ width, height, color }: Props) => {
  return (
    <svg
      width={width || '16'}
      height={height || '16'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.66665 7.00032C9.66665 6.07947 8.92049 5.33331 8.00032 5.33331C7.07947 5.33331 6.33331 6.07947 6.33331 7.00032C6.33331 7.92049 7.07947 8.66665 8.00032 8.66665C8.92049 8.66665 9.66665 7.92049 9.66665 7.00032Z"
        stroke={color || '#A5ADB8'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 14C7.20069 14 3 10.5989 3 7.04219C3 4.25776 5.23807 2 7.99967 2C10.7613 2 13 4.25776 13 7.04219C13 10.5989 8.79866 14 7.99967 14Z"
        stroke={color || '#A5ADB8'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Location;
