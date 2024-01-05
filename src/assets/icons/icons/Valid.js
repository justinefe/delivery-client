import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Valid = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path d="M8.22 15.76l-4.22-4-1.5 1.32 5.72 5.42L20.5 6.87 19.06 5.5z"></path>
    </BaseIcon>
  );
};

Valid.propTypes = {};

export default Valid;
