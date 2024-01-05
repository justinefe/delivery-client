import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Order = ({
  viewBox,
  fill = 'transparent',
  stroke = '#4C535B',
  ...props
}) => {
  return (
    <BaseIcon viewBox={viewBox} fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0137 21.5003H8.66592C5.59955 21.5003 3.24715 20.3927 3.91534 15.9351L4.69338 9.89387C5.10528 7.66962 6.52404 6.81836 7.76889 6.81836H17.9474C19.2105 6.81836 20.5469 7.73369 21.0229 9.89387L21.8009 15.9351C22.3684 19.8893 20.0801 21.5003 17.0137 21.5003Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.151 6.59873C17.151 4.21265 15.2167 2.27836 12.8307 2.27836V2.27836C11.6817 2.27349 10.5781 2.72652 9.76388 3.53727C8.94969 4.34803 8.49199 5.44971 8.492 6.59873V6.59873"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7963 11.1022H15.7506"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96572 11.1022H9.91995"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Order.propTypes = {};

export default Order;
