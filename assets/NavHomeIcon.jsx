import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#D0D0D0"
      d="M7.824 18.8v-6.005h4.348v6.004c0 .66.489 1.201 1.086 1.201h3.261c.598 0 1.087-.54 1.087-1.2v-8.407h1.848c.5 0 .74-.684.359-1.044L10.726.306a1.019 1.019 0 0 0-1.457 0L.182 9.35c-.37.36-.14 1.044.36 1.044h1.847V18.8c0 .66.49 1.201 1.087 1.201h3.26c.599 0 1.088-.54 1.088-1.2Z"
    />
  </svg>
);
export default SvgComponent;
