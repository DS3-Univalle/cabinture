import { Card, Icon } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import React from "react";

const InfoCabin = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Nombre de la Cabaña
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Nombre de la Cabaña" />
          </SoftBox>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Precio
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Precio" />
          </SoftBox>
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            <SoftBox>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Descripción
                </SoftTypography>
              </SoftBox>
              <SoftInput type="email" placeholder="Descripción" />
            </SoftBox>
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Cantidad de Baños
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Cantidad de Baños" />
          </SoftBox>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Cantidad de Habitaciones
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Cantidad de Habitaciones" />
          </SoftBox>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Información Legal
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Información Legal" />
          </SoftBox>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <SoftBox>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Fotos
              </SoftTypography>
            </SoftBox>
            <SoftInput type="email" placeholder="Cantidad de Baños" />
          </SoftBox>
        </SoftBox>

      </SoftBox>
    </Card>
  );
};

export default InfoCabin;
