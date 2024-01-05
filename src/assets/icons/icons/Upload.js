import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Upload = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M35.3337 35.3333L26.5003 26.5L17.667 35.3333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5 26.5V46.375"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.0276 40.6113C47.1815 39.437 48.883 37.579 49.8636 35.3303C50.8442 33.0816 51.048 30.5705 50.4429 28.1931C49.8378 25.8158 48.4583 23.7076 46.522 22.2014C44.5857 20.6951 42.2029 19.8766 39.7497 19.875H36.9672C36.2988 17.2896 35.053 14.8893 33.3234 12.8547C31.5938 10.8201 29.4254 9.20401 26.9814 8.12801C24.5373 7.05202 21.8811 6.54409 19.2125 6.64241C16.5439 6.74074 13.9323 7.44275 11.574 8.69568C9.21574 9.94861 7.1722 11.7199 5.59702 13.8762C4.02184 16.0326 2.956 18.5181 2.47964 21.1457C2.00328 23.7733 2.12879 26.4747 2.84674 29.0468C3.56469 31.6189 4.85639 33.9948 6.62473 35.9958"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3337 35.3333L26.5003 26.5L17.667 35.3333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Upload.propTypes = {};

export default Upload;
