// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function ListCabin({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 476 512"
      fill={color}
    >
        <path d="m344.5 464h-256c-13.253906 0-24-10.746094-24-24v-8h152v-16h-176c-13.253906 0-24-10.746094-24-24v-352c0-13.253906 10.746094-24 24-24h184v56c0 3.234375 1.949219 6.152344 4.9375 7.390625s6.429688.550781 8.71875-1.734375l18.34375-18.34375 18.34375 18.34375c1.5 1.5 3.535156 2.34375 5.65625 2.34375 1.050781.003906 2.09375-.203125 3.0625-.609375 2.988281-1.238281 4.9375-4.15625 4.9375-7.390625v-56h8c13.253906 0 24 10.746094 24 24v152h16v-128h8c13.253906 0 24 10.746094 24 24v112h16v-112c-.027344-22.082031-17.917969-39.972656-40-40h-8v-8c-.027344-22.082031-17.917969-39.9726562-40-40h-256c-22.082031.0273438-39.972656 17.917969-40 40v352c.027344 22.082031 17.917969 39.972656 40 40h8v8c.027344 22.082031 17.917969 39.972656 40 40h256c9.578125 0 18.839844-3.433594 26.105469-9.679688l-10.457031-12.128906c-4.351563 3.75-9.90625 5.8125-15.648438 5.808594zm-72-448v36.6875l-10.34375-10.34375c-3.125-3.121094-8.1875-3.121094-11.3125 0l-10.34375 10.34375v-36.6875zm0 0"/>
        <path d="m138.84375 66.34375-10.894531 10.894531c-1.140625-3.132812-4.113281-5.226562-7.449219-5.238281h-64c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8v-44.6875l21.65625-21.65625zm-26.34375 69.65625h-48v-48h48v4.6875l-16 16-10.34375-10.34375-11.3125 11.3125 16 16c3.125 3.121094 8.1875 3.121094 11.3125 0l10.34375-10.34375zm0 0"/>
        <path d="m128.5 211.3125 21.65625-21.65625-11.3125-11.3125-10.894531 10.894531c-1.140625-3.132812-4.113281-5.226562-7.449219-5.238281h-64c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8zm-64 36.6875v-48h48v4.6875l-16 16-10.34375-10.34375-11.3125 11.3125 16 16c3.125 3.121094 8.1875 3.121094 11.3125 0l10.34375-10.34375v20.6875zm0 0"/>
        <path d="m120.5 288h-64c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8v-64c0-4.417969-3.582031-8-8-8zm-8 64h-48v-48h48zm0 0"/>
        <path d="m160.5 120h80v16h-80zm0 0"/>
        <path d="m160.5 88h48v16h-48zm0 0"/>
        <path d="m160.5 232h80v16h-80zm0 0"/>
        <path d="m160.5 200h48v16h-48zm0 0"/>
        <path d="m457.757812 297.441406-41.257812-29.121094v-44.320312c0-4.417969-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8v10.398438l-35.390625-24.972657c-2.765625-1.949219-6.453125-1.949219-9.21875 0l-124.648437 88c-9.988282 7.195313-12.253907 21.125-5.058594 31.113281 7.195312 9.992188 21.125 12.257813 31.117187 5.0625l15.199219-11.144531v109.542969c0 8.835938 7.164062 16 16 16h144c8.835938 0 16-7.164062 16-16v-109.542969l15.199219 11.144531c6.457031 4.753907 14.972656 5.675782 22.300781 2.40625 7.324219-3.269531 12.328125-10.21875 13.101562-18.203124.773438-7.984376-2.800781-15.765626-9.363281-20.378907zm-73.257812-65.441406h16v25.023438l-16-11.289063zm-96 200v-48h32v48zm112 0h-64v-56c0-4.417969-3.582031-8-8-8h-48c-4.417969 0-8 3.582031-8 8v56h-16v-121.28125l72-52.796875 72 52.796875zm49.601562-112.863281c-.953124 1.425781-2.449218 2.402343-4.136718 2.695312-1.6875.3125-3.425782-.09375-4.800782-1.121093l-107.953124-79.199219c-2.816407-2.070313-6.652344-2.070313-9.472657 0l-107.949219 79.199219c-1.375 1.023437-3.113281 1.429687-4.800781 1.121093-2.492187-.453125-4.46875-2.355469-5.015625-4.832031-.542968-2.472656.453125-5.03125 2.527344-6.488281l120-84.71875 120 84.710937c2.792969 1.960938 3.503906 5.800782 1.601562 8.632813zm0 0"/>
        <path d="m344.5 376v32c0 4.417969 3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8zm16 8h16v16h-16zm0 0"/>
        <path d="m296.5 320c0 17.671875 14.328125 32 32 32s32-14.328125 32-32-14.328125-32-32-32-32 14.328125-32 32zm48 0c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16 7.164062-16 16-16 16 7.164062 16 16zm0 0"/></svg>
);
}

// Setting default values for the props of Office
ListCabin.defaultProps = {
    color: "dark",
    size: "16px",
  };
  
  // Typechecking props for the Office
  ListCabin.propTypes = {
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
  
  export default ListCabin;
  