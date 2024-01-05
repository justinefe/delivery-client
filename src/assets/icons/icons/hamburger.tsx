import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

export const Hamburger = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <rect y="0.5" width="32" height="3" rx="1.5" fill="#383D44" />
      <rect y="9.5" width="16" height="3" rx="1.5" fill="#383D44" />
      <rect y="18.5" width="24" height="3" rx="1.5" fill="#383D44" />
    </BaseIcon>
  );
};
