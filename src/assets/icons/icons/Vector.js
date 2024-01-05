import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Vector = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Vector.propTypes = {};

export default Vector;
