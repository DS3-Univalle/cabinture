// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function SignOff({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill={color}
    >
  <g><g><path d="M397.4,68.7c-8.3-7.3-20.8-6.2-28.1,3.1c-7.3,8.3-6.2,20.8,3.1,28.1c47.9,37.5,75.9,92.6,75.9,151.9 c0,108.2-91.5,195.6-203.9,195.6S40.6,360,40.6,251.8c0-59.3,28.1-114.4,75.9-151.9c8.3-6.2,10.4-18.7,3.1-28.1 c-6.2-8.3-18.7-10.4-28.1-3.1C33.2,113.4,0,181.1,0,252.8C0,382.8,109.2,489,244.5,489S489,382.9,489,252.8 C489,181,455.7,113.4,397.4,68.7z"/><path d="M244.5,253.9c11.4,0,20.8-9.4,20.8-20.8V20.8c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8V233 C223.7,244.5,233.1,253.9,244.5,253.9z"/></g></g>
    </svg>
  );
}

// Setting default values for the props of Office
SignOff.defaultProps = {
    color: "dark",
    size: "16px",
  };
  
  // Typechecking props for the Office
  SignOff.propTypes = {
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "white",
    ]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  
  export default SignOff;
  