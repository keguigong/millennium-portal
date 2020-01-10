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
        d="M11.24 0c.462 0 .838.376.838.838v1.215h2.28c1.118 0 2.024.905 2.024 2.022v2.267h1.221c.463 0 .838.375.838.838l-.006.105a.839.839 0 01-.832.733h-1.221v2.363h1.221a.839.839 0 010 1.676h-1.221v2.298a2.022 2.022 0 01-2.023 2.022h-2.281v1.182a.839.839 0 01-1.677 0v-1.182H8.038v1.182a.839.839 0 01-1.676 0v-1.182H4.08a2.022 2.022 0 01-2.022-2.022v-2.298H.839a.839.839 0 010-1.676h1.22V8.018H.839a.839.839 0 010-1.676h1.22V4.075c0-1.117.905-2.022 2.022-2.022h2.28V.838a.839.839 0 011.677 0v1.215h2.363V.838c0-.462.376-.838.838-.838zm2.78 3.73h-9.6a.684.684 0 00-.685.685v9.6c0 .38.307.685.686.685h9.599a.684.684 0 00.685-.685v-9.6a.684.684 0 00-.685-.685zm-2.982 2.26c.769 0 1.391.623 1.391 1.392v3.635c0 .768-.622 1.392-1.391 1.392H7.402a1.392 1.392 0 01-1.391-1.392V7.382c0-.769.622-1.393 1.391-1.393zm-.285 1.676H7.687v3.066h3.066V7.666z"
        transform="translate(2.5 3)"
      ></path>
    </svg>
  )
}

export default Icon
