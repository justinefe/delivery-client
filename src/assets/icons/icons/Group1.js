import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Group1 = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M3.23231 6.45479V3.47876C3.23231 2.10925 4.34289 0.999784 5.71283 0.999784H21.5872C22.9571 0.999784 24.0677 2.10925 24.0677 3.47876V6.45479M21.8354 15.1332V15.8768C21.8354 16.1504 22.0573 16.373 22.331 16.373H24.0677C24.3414 16.373 24.5633 16.1504 24.5633 15.8768V15.1332H21.8354ZM2.73669 15.1332V15.8768C2.73669 16.1504 2.95864 16.373 3.23231 16.373H4.96899C5.24266 16.373 5.46461 16.1504 5.46461 15.8768V15.1332H2.73669ZM10.9213 6.45479C10.9213 5.77003 10.3668 5.21491 9.68101 5.21491H6.70487C6.01991 5.21491 5.46461 5.77003 5.46461 6.45479V9.43003C5.46461 10.1148 6.01991 10.6699 6.70487 10.6699H9.68101C10.3668 10.6699 10.9213 10.1148 10.9213 9.43003V6.45479ZM16.3779 6.45479C16.3779 5.77003 15.8234 5.21491 15.1385 5.21491H12.1615C11.4766 5.21491 10.9213 5.77003 10.9213 6.45479V9.43003C10.9213 10.1148 11.4766 10.6699 12.1615 10.6699H15.1385C15.8234 10.6699 16.3779 10.1148 16.3779 9.43003V6.45479ZM5.46461 10.6699H21.8354H5.46461ZM3.72873 12.4053H23.5713H3.72873ZM5.46461 12.4053V7.69388C5.46461 7.00992 4.90933 6.45479 4.22436 6.45479H2.24026C1.5553 6.45479 1 7.00992 1 7.69388V15.1332H26.3V7.69388C26.3 7.00992 25.7439 6.45479 25.0597 6.45479H23.0749C22.3899 6.45479 21.8354 7.00992 21.8354 7.69388V12.4053H5.46461ZM13.65 0.999784V5.21491V0.999784Z"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Group1.propTypes = {};

export default Group1;
