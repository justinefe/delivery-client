import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const index = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M13.7476 20.4438H21.0002"
        stroke="#3958D3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
        stroke="#3958D3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.021 6L16.4732 10.1871"
        stroke="#3958D3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default index;
