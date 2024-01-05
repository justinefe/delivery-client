import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Message = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M21.5 15C21.5 15.5304 21.2893 16.0391 20.9142 16.4142C20.5391 16.7893 20.0304 17 19.5 17H7.5L3.5 21V5C3.5 4.46957 3.71071 3.96086 4.08579 3.58579C4.46086 3.21071 4.96957 3 5.5 3H19.5C20.0304 3 20.5391 3.21071 20.9142 3.58579C21.2893 3.96086 21.5 4.46957 21.5 5V15Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Message.propTypes = {};

export default Message;
