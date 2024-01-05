import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Bag = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.7981 70.25H19.5807C8.84841 70.25 0.615001 66.3736 2.95367 50.7717L5.67679 29.6276C7.11843 21.8427 12.0841 18.8633 16.4411 18.8633H52.0658C56.4869 18.8633 61.1642 22.0669 62.8301 29.6276L65.5532 50.7717C67.5395 64.6116 59.5303 70.25 48.7981 70.25Z"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.2786 18.0944C49.2786 9.74313 42.5086 2.9731 34.1573 2.9731V2.9731C30.1358 2.95606 26.2732 4.54166 23.4235 7.3793C20.5739 10.2169 18.9719 14.0728 18.972 18.0944H18.972"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5372 33.8564H44.377"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1299 33.8564H23.9697"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Bag.propTypes = {};

export default Bag;
