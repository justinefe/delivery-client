import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const AddThreeDImage = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M43.7685 4.41602H9.23018C6.57139 4.41602 4.41602 6.57139 4.41602 9.23018V43.7685C4.41602 46.4273 6.57139 48.5827 9.23018 48.5827H43.7685C46.4273 48.5827 48.5827 46.4273 48.5827 43.7685V9.23018C48.5827 6.57139 46.4273 4.41602 43.7685 4.41602Z"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.459 4.41602V48.5827"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.541 4.41602V48.5827"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.41602 26.5H48.5827"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.41602 15.459H15.4577"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.41602 37.541H15.4577"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.541 37.541H48.5827"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.541 15.459H48.5827"
        stroke="#656E79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default AddThreeDImage;
