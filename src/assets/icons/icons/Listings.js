import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Location = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2378 2.76175H8.5848C6.5048 2.75375 4.7998 4.41175 4.7508 6.49075V17.2037C4.7048 19.3167 6.3798 21.0677 8.4928 21.1147C8.5238 21.1147 8.5538 21.1157 8.5848 21.1147H16.5738C18.6678 21.0297 20.3178 19.2997 20.3028 17.2037V8.03775L15.2378 2.76175Z"
        stroke="#4C535B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9751 2.75V5.659C14.9751 7.079 16.1231 8.23 17.5431 8.234H20.2981"
        stroke="#4C535B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7881 15.3594H9.38812"
        stroke="#4C535B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7432 11.6055H9.38721"
        stroke="#4C535B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Location.propTypes = {};

export default Location;
