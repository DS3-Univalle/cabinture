// SoftTextarea.js
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import SoftTextareaRoot from "./SoftTextareaRoot"; // Actualiza la ruta según tu estructura de carpetas

// SoftTextarea context y estilos personalizados

const SoftTextarea = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  let template;

  template = (
    <SoftTextareaRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />
  );

  return template;
});

SoftTextarea.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

SoftTextarea.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SoftTextarea;
