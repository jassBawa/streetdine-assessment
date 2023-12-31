import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#DEDEDE"
      d="M2.73 23.928h28.463c.979 0 1.78-.868 1.78-1.93 0-1.06-.801-1.929-1.78-1.929H2.73c-.978 0-1.779.868-1.779 1.93 0 1.061.8 1.93 1.78 1.93Zm0-9.648h28.463c.979 0 1.78-.869 1.78-1.93s-.801-1.93-1.78-1.93H2.73c-.978 0-1.779.869-1.779 1.93s.8 1.93 1.78 1.93ZM.951 2.7c0 1.062.8 1.93 1.78 1.93h28.462c.979 0 1.78-.868 1.78-1.93 0-1.061-.801-1.93-1.78-1.93H2.73c-.978 0-1.779.869-1.779 1.93Z"
    />
  </svg>
);
export default SvgComponent;
