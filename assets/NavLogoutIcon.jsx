import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#D0D0D0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.334 1h4.444a2.222 2.222 0 0 1 2.223 2.222v15.556A2.222 2.222 0 0 1 18.778 21h-4.444M8.778 16.556 14.334 11 8.778 5.444M14.333 11H1"
    />
  </svg>
);
export default SvgComponent;
