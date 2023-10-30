// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function Help({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill={color}
    >
    <g><g><path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M256,480 C132.48,480,32,379.52,32,256S132.48,32,256,32s224,100.48,224,224S379.52,480,256,480z"/></g></g><g><g><path d="M256,96.032c-52.944,0-96,43.056-96,95.968h32c0-35.28,28.704-63.968,64-63.968s64,28.704,64,64s-28.704,64-64,64 c-8.832,0-16,7.168-16,16V352h32v-65.312c45.344-7.648,80-47.184,80-94.672C352,139.088,308.944,96.032,256,96.032z"/></g></g><g><g><rect x="240" y="384" width="32" height="32"/></g></g>
    </svg>
  );
}

// Setting default values for the props of Office
Help.defaultProps = {
    color: "dark",
    size: "16px",
  };
  
  // Typechecking props for the Office
  Help.propTypes = {
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
  
  export default Help;
  