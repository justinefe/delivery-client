import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const AddImage = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.8381 12.4449V30.4451C41.8381 37.1142 37.6643 41.818 30.9952 41.818H11.8931C5.22393 41.818 1.07227 37.1142 1.07227 30.4451V12.4449C1.07227 5.77576 5.24602 1.07422 11.8931 1.07422H30.9952C37.6643 1.07422 41.8381 5.77576 41.8381 12.4449Z"
        stroke="#656E79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66211 31.2851L10.0364 27.7231C11.2091 26.4798 13.1634 26.4201 14.4089 27.5906C14.4465 27.6281 16.4782 29.6929 16.4782 29.6929C17.7038 30.9406 19.7067 30.9605 20.9544 29.7371C21.0362 29.6576 26.1087 23.5051 26.1087 23.5051C27.416 21.9173 29.7635 21.6899 31.3535 22.9994C31.4595 23.0878 36.2516 28.0057 36.2516 28.0057"
        stroke="#656E79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7722 15.1703C17.7722 17.3102 16.0387 19.0437 13.8988 19.0437C11.7589 19.0437 10.0254 17.3102 10.0254 15.1703C10.0254 13.0304 11.7589 11.2969 13.8988 11.2969C16.0387 11.2991 17.7722 13.0304 17.7722 15.1703Z"
        stroke="#656E79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default AddImage;
