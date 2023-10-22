// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function Calendar({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 476 512"
      fill={color}
    >
    <path d="m471.272 363.76-10.633 10.581c27.671 27.806 27.613 72.996-.128 100.736-27.875 27.876-72.98 27.881-100.862 0-27.808-27.809-27.808-73.056-.002-100.862 25.02-25.003 63.245-27.181 90.502-8.589l8.453-12.392c-32.873-22.423-79.155-20.012-109.561 10.373-33.655 33.656-33.655 88.42.001 122.077 33.74 33.739 88.332 33.743 122.076 0 33.575-33.575 33.644-88.269.154-121.924z"/>
    <path d="m159.236 33.36h13.199v15h-13.199z"/>
    <path d="m431.166 159.07h-326.59v15h326.59v145.54h15v-286.25h-28.63v15h13.63z"/>
    <path d="m288.385 33.36h13.2v15h-13.2z"/>
    <path d="m406.055 316.44c0-24.047 0-89.355 0-114.47h-351.296v216.777l247.346.002v-15h-30.568v-52.26l67.26-.001v-67.258h52.259v32.21zm-284.036 87.308h-52.26v-52.259h52.26zm0-67.259h-52.26v-52.259h52.26zm0-67.26h-52.26v-52.259h52.26zm67.259 134.519h-52.259v-52.259h52.259zm0-67.259h-52.259v-52.259h52.259zm0-67.26h-52.259v-52.259h52.259zm67.258 134.519h-52.258v-52.259h52.258zm.001-67.259h-52.259v-52.259h52.259zm0-67.26h-52.259v-52.259h52.259zm67.258 67.26h-52.259v-52.259h52.259zm.001-67.26h-52.26v-52.259h52.26zm15 0v-52.259h52.259v52.259z"/>
    <path d="m398.396 438.828-17.33-20.816-11.527 9.597 27.162 32.628 61.41-53.707-9.875-11.291z"/>
    <path d="m265.885 18.858-14.02-18.858h-42.896l-14.033 18.855v68.375h70.95v-68.372zm-15 53.372h-40.95v-48.405l6.568-8.825h27.822l6.56 8.823z"/>
    <path d="m395.036 18.856-14.033-18.856h-42.886l-14.032 18.856v68.374h70.95v-68.374zm-15 53.374h-40.95v-48.405l6.567-8.825h27.815l6.567 8.825v48.405z"/>
    <path d="m136.736 18.855-14.033-18.855h-42.873l-14.044 18.854v68.376h70.95zm-15 53.375h-40.95v-48.403l6.575-8.827h27.807l6.568 8.825z"/>
    <path d="m29.645 174.07h59.931v-15h-59.92v-110.71h13.63v-15h-28.63l-.011 442.29h295.641v-15h-280.641z"/>
    <path d="m281.505 138.794h-15v-15h15zm-45 0h-15v-15h15zm-45 0h-15v-15h15z"/>
</svg>
  );
}

// Setting default values for the props of Office
Calendar.defaultProps = {
    color: "dark",
    size: "16px",
  };
  
  // Typechecking props for the Office
  Calendar.propTypes = {
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
  
  export default Calendar;
  