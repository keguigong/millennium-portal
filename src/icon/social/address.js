import React from "react";

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
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        d="M7.992 0C3.6 0 .025 3.574.025 7.968c0 5.452 7.13 13.456 7.433 13.794a.718.718 0 001.068 0c.304-.338 7.434-8.342 7.434-13.794C15.96 3.574 12.385 0 7.992 0zm0 11.976a4.013 4.013 0 01-4.008-4.008 4.013 4.013 0 014.008-4.01 4.013 4.013 0 014.009 4.01 4.013 4.013 0 01-4.009 4.008z"
        transform="translate(3 1)"
      ></path>
    </svg>
  );
}

export default Icon;
