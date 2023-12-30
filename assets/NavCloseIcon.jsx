import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={46}
    fill="none"
    {...props}
  >
    <ellipse
      cx={23.834}
      cy={21.479}
      fill="#1F1F1F"
      rx={23.834}
      ry={21.479}
      transform="matrix(.9978 .06624 -.07345 .9973 3.155 0)"
    />
    <path
      fill="#DEDEDE"
      d="M32.06 16.645a.937.937 0 0 0-1.384 0l-4.798 5.09-4.8-5.1a.937.937 0 0 0-1.383 0 1.085 1.085 0 0 0 0 1.47l4.799 5.1-4.799 5.1a1.085 1.085 0 0 0 0 1.471.937.937 0 0 0 1.384 0l4.799-5.1 4.798 5.1a.937.937 0 0 0 1.384 0 1.085 1.085 0 0 0 0-1.47l-4.799-5.1 4.799-5.1a1.093 1.093 0 0 0 0-1.46Z"
    />
  </svg>
);
export default SvgComponent;
