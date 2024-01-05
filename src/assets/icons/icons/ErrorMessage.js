import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const ErrorMessage = ({
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M14 3h-4v12h4zm-4 16a2 2 0 112 2 2 2 0 01-2-2z"
        fillRule="evenodd"
      ></path>
    </BaseIcon>
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
