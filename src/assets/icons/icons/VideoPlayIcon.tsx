import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const VideoPlayIcon = ({ width = 88, height = 88 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="88"
        y="88"
        width="88"
        height="88"
        rx="44"
        transform="rotate(-180 88 88)"
        fill="white"
        fillOpacity="0.4"
      />
      <path
        d="M65 41.0359C67.6667 42.5755 67.6667 46.4245 65 47.9641L37.25 63.9856C34.5833 65.5252 31.25 63.6007 31.25 60.5215L31.25 28.4785C31.25 25.3993 34.5833 23.4748 37.25 25.0144L65 41.0359Z"
        fill="white"
      />
    </svg>
  );
};

export default VideoPlayIcon;
