import React from 'react';
import { BaseIcon } from '../icon/baseIcon';
import PropTypes from 'prop-types';

const Image = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.8381 12.4441V30.4442C41.8381 37.1134 37.6643 41.8171 30.9952 41.8171H11.8931C5.22393 41.8171 1.07227 37.1134 1.07227 30.4442V12.4441C1.07227 5.77491 5.24602 1.07336 11.8931 1.07336H30.9952C37.6643 1.07336 41.8381 5.77491 41.8381 12.4441Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66211 31.2849L10.0364 27.7229C11.2091 26.4796 13.1634 26.42 14.4089 27.5904C14.4465 27.6279 16.4782 29.6927 16.4782 29.6927C17.7038 30.9404 19.7067 30.9603 20.9544 29.7369C21.0362 29.6574 26.1087 23.505 26.1087 23.505C27.416 21.9172 29.7635 21.6897 31.3535 22.9992C31.4595 23.0876 36.2516 28.0055 36.2516 28.0055"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7722 15.1689C17.7722 17.3088 16.0387 19.0424 13.8988 19.0424C11.7589 19.0424 10.0254 17.3088 10.0254 15.1689C10.0254 13.0291 11.7589 11.2955 13.8988 11.2955C16.0387 11.2977 17.7722 13.0291 17.7722 15.1689Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

Image.propTypes = {};

export default Image;
