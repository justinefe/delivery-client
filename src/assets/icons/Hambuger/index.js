import React from 'react';

export default function Hambuger({ width, height, open, className }) {
  return (
    <svg
      viewBox="-50 -40 100 80"
      width={width}
      height={height}
      className={`hambuger ${className}${open ? ' open' : ''}`}
    >
      <defs>
        <path
          id="line"
          stroke="inherit"
          strokeWidth="15"
          strokeLinecap="round"
          d="M -40 0 h 80"
        />
      </defs>
      <g>
        <g className="translate" transform="translate(0 -30)">
          <g className="rotate" transform="rotate(-45)">
            <use transform="rotate(45)" href="#line" />
          </g>
        </g>

        <g className="rotate" transform="rotate(45)">
          <use transform="rotate(-45)" href="#line" />
        </g>

        <g className="translate" transform="translate(0 30)">
          <g className="rotate" transform="rotate(-45)">
            <use transform="rotate(45)" href="#line" />
          </g>
        </g>
      </g>
    </svg>
  );
}
