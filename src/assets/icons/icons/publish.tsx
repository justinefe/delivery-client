import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const Index = ({
  fill = 'transparent',
  stroke = 'white',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2.5L11 13.5"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseIcon>
  );
};

export default Index;
