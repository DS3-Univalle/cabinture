import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Carrusel from "layouts/dashboard/components/Carrusel";
import Transactions from "layouts/billing/components/Transactions";
import InfoCabin from "./infoCabin";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { Card } from "@mui/material";

function AddCabinComponent() {
  const [cabin, setCabin] = useState({
    name: "",
    description: "",
    location: "",
    price: null,
    rooms: null,
    bathrooms: null,
    legal_information: "",
    number_people: null,
  });

  // Changing the direction to rtl

  //const navigate = useNavigate()
  const handleChange = (e) => {
    setCabin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3306/cabins", cabin);
      console.log("done");
      //navigate("/cabanas/ver-cabanas")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Carrusel />
            </Grid>
            <Grid item xs={12} md={7}>
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
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddCabinComponent;
