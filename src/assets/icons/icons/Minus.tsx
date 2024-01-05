import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

interface IEdit {
  [x: string]: any;
  fill?: string | undefined;
  stroke?: string | undefined;
}

const Index = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}: IEdit): React.JSX.Element => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <rect width="11" height="2" rx="1" fill="#E3310E" />
    </BaseIcon>
  );
};

export default Index;
