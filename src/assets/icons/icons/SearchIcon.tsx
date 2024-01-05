import React from 'react';

type Props = {
  color?: string;
};

const SearchIcon = ({ color = 'black' }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7099 20.2894L17.9999 16.6094C19.44 14.8138 20.1374 12.5347 19.9487 10.2407C19.76 7.94672 18.6996 5.8122 16.9854 4.27606C15.2713 2.73992 13.0337 1.91893 10.7328 1.98189C8.43194 2.04485 6.24263 2.98698 4.61505 4.61456C2.98747 6.24214 2.04534 8.43145 1.98237 10.7323C1.91941 13.0332 2.74041 15.2708 4.27655 16.9849C5.81269 18.6991 7.94721 19.7595 10.2412 19.9482C12.5352 20.1369 14.8143 19.4395 16.6099 17.9994L20.2899 21.6794C20.3829 21.7731 20.4935 21.8475 20.6153 21.8983C20.7372 21.9491 20.8679 21.9752 20.9999 21.9752C21.1319 21.9752 21.2626 21.9491 21.3845 21.8983C21.5063 21.8475 21.6169 21.7731 21.7099 21.6794C21.8901 21.493 21.9909 21.2438 21.9909 20.9844C21.9909 20.7251 21.8901 20.4759 21.7099 20.2894ZM10.9999 17.9994C9.61544 17.9994 8.26206 17.5889 7.11091 16.8197C5.95977 16.0505 5.06256 14.9573 4.53275 13.6782C4.00293 12.3991 3.86431 10.9917 4.13441 9.63378C4.4045 8.27592 5.07119 7.02864 6.05016 6.04967C7.02912 5.0707 8.27641 4.40402 9.63427 4.13392C10.9921 3.86382 12.3996 4.00245 13.6787 4.53226C14.9578 5.06207 16.051 5.95928 16.8202 7.11042C17.5894 8.26157 17.9999 9.61495 17.9999 10.9994C17.9999 12.8559 17.2624 14.6364 15.9497 15.9492C14.6369 17.2619 12.8564 17.9994 10.9999 17.9994Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;