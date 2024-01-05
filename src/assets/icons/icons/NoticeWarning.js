import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const NoticeWarning = props => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M13 18a1 1 0 11-1-1 1 1 0 011 1zm0-2h-2v-6h2zm-8.38 4h14.76L12 5.2zM21 22H3a1 1 0 01-.89-1.45l9-18a1 1 0 011.78 0l9 18A1 1 0 0121 22z"
        fillRule="evenodd"
      ></path>
    </BaseIcon>
  );
};

NoticeWarning.propTypes = {};

export default NoticeWarning;
