import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const AddVideo = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9898 24.3131C32.1684 28.3589 28.9032 31.7801 24.6972 31.9521C24.3875 31.9651 9.28461 31.9347 9.28461 31.9347C5.09905 32.2524 1.43584 29.2447 1.1057 25.2141C1.08083 24.9138 1.08761 8.70877 1.08761 8.70877C0.902188 4.65861 4.1629 1.2287 8.37107 1.05024C8.68539 1.035 23.7679 1.0633 23.7679 1.0633C27.9738 0.749904 31.6483 3.77937 31.9739 7.82953C31.9965 8.12116 31.9898 24.3131 31.9898 24.3131Z"
        stroke="#656E79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.9961 12.0375L39.2681 6.08605C41.0701 4.61088 43.7731 5.89613 43.7709 8.22151L43.7444 24.4505C43.7422 26.7759 41.037 28.0501 39.2394 26.575L31.9961 20.6235"
        stroke="#656E79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default AddVideo;
