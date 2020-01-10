import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M8.092 14.685A6.6 6.6 0 011.5 8.092 6.6 6.6 0 018.092 1.5a6.6 6.6 0 016.593 6.592 6.6 6.6 0 01-6.593 6.593zm8.893 1.24l-2.668-2.669a8.055 8.055 0 001.868-5.164C16.185 3.63 12.555 0 8.092 0 3.63 0 0 3.63 0 8.092c0 4.462 3.63 8.093 8.092 8.093a8.055 8.055 0 005.164-1.868l2.668 2.668 1.061-1.06z"
        transform="translate(4 4)"
      ></path>
    </svg>
  )
}

export default Icon
