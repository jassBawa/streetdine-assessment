import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#ECECEC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.902 1 18.8 3.102m0 0 3.153 3.154-3.679 3.68-3.154-3.154m3.68-3.68-3.68 3.68m-4.32 4.32a5.782 5.782 0 1 1-8.177 8.177 5.782 5.782 0 0 1 8.176-8.175v-.002Zm0 0 4.32-4.32"
    />
  </svg>
);
export default SvgComponent;
