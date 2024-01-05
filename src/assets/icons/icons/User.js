import React from 'react';
import { BaseIcon } from '../icon/baseIcon';

const User = ({ fill = 'transparent', stroke = '#4C535B', ...props }) => {
  return (
    <BaseIcon fill={fill} stroke={stroke} {...props}>
      <path
        d="M17.3887 7.89673C18.7837 7.70073 19.8577 6.50473 19.8607 5.05573C19.8607 3.62773 18.8197 2.44373 17.4547 2.21973"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2285 11.2502C20.5795 11.4522 21.5225 11.9252 21.5225 12.9002C21.5225 13.5712 21.0785 14.0072 20.3605 14.2812"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3867 11.6638C8.17273 11.6638 5.42773 12.1508 5.42773 14.0958C5.42773 16.0398 8.15573 16.5408 11.3867 16.5408C14.6007 16.5408 17.3447 16.0588 17.3447 14.1128C17.3447 12.1668 14.6177 11.6638 11.3867 11.6638Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3874 8.88788C13.4964 8.88788 15.2064 7.17888 15.2064 5.06888C15.2064 2.95988 13.4964 1.24988 11.3874 1.24988C9.27839 1.24988 7.56839 2.95988 7.56839 5.06888C7.56039 7.17088 9.25739 8.88088 11.3594 8.88788H11.3874Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.38411 7.89673C3.98811 7.70073 2.91511 6.50473 2.91211 5.05573C2.91211 3.62773 3.95311 2.44373 5.31811 2.21973"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.544 11.2502C2.193 11.4522 1.25 11.9252 1.25 12.9002C1.25 13.5712 1.694 14.0072 2.412 14.2812"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

User.propTypes = {};

export default User;
