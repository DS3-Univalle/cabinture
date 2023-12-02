// SoftTextareaRoot.js
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default styled(TextareaAutosize)(({ theme, ownerState }) => {
  const { palette, functions, borders, typography } = theme;
  const { error, success, disabled } = ownerState;
  const { inputColors, grey, white } = palette;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;
  const { fontFamily } = typography; // Nueva línea para obtener el tipo de fuente

  // Border color value
  let borderColorValue = inputColors.borderColor.main;

  if (ownerState.error) {
    borderColorValue = inputColors.error;
  } else if (ownerState.success) {
    borderColorValue = inputColors.success;
  }

  return {
    minHeight: pxToRem(50), // Ajusta la altura según sea necesario
    display: "block",
    width: "100%",
    padding: `${pxToRem(10)} ${pxToRem(12)}`,
    fontSize: theme.typography.fontSize.md,
    fontFamily: fontFamily, // Aplicar el tipo de fuente del tema
    color: theme.palette.dark.main,
    backgroundColor: disabled ? grey[200] : white.main,
    border: `${borderWidth[2]} solid`,
    borderRadius: borderRadius.md,
    borderColor: borderColorValue,

    "&:focus": {
      borderColor: ownerState.error
        ? inputColors.error
        : ownerState.success
        ? inputColors.success
        : inputColors.borderColor.focus,
      outline: 0,
    },
  };
});
