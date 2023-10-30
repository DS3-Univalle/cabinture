import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftButton from "components/SoftButton";
import { useEffect, useState } from "react";
import axios from "axios";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import Carrusel from "layouts/dashboard/components/Carrusel";
import { Card } from "@mui/material";
import Buscador from "layouts/dashboard/components/Buscador";

function SeeCabins() {

  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

  const [cabañas, setCabañas] = useState([]);
  console.log(cabañas);
  useEffect(() => {
    const fetchAllCabañas = async () => {
      try {
        const res = await axios.get("http://localhost:8000/cabins");
        setCabañas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCabañas();
  }, []);
  const [cabinStates, setCabinStates] = useState([]);

  useEffect(() => {
    // Create a function to fetch cabin states by cabin ID
    const fetchCabinState = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8000/cabins/states/${id}`);
        setCabinStates((prevState) => ({
          ...prevState,
          [id]: response.data,
        }));
      } catch (err) {
        console.error(err);
      }
    };

    cabañas.forEach((cabin) => {
      fetchCabinState(cabin.id_cabin);
    });
  }, [cabañas]);

  console.log(cabañas);
  console.log(cabinStates);
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <SoftBox mt={4}>
      <SoftBox my={3}>
        <Grid item xs={12} md={5}>
          <Buscador />
        </Grid>
        {cabañas.map((cabin) => (
          <Grid container spacing={3} mt={3} key={cabin.id_cabin}>
            <Grid item xs={12} md={13}>
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
                          Nombre Cabaña: {cabin.name}
                        </SoftTypography>
                      </SoftBox>
                      {cabinStates[cabin.id_cabin] && cabinStates[cabin.id_cabin].map((s) => (
                        <Grid item xs={12} md={3} key={s.id_state}>
                          <SoftBox display="flex" justifyContent="center">
                            <SoftButton
                              className="softButtonCustomColor"
                              style={{
                                backgroundColor: "#71C455",
                                color: "white",
                                width: "100%",
                              }}
                            >
                              &nbsp;{s.state}
                            </SoftButton>
                          </SoftBox>
                        </Grid>
                      ))}
                    </SoftBox>
                  </SoftBox>
                </SoftBox>
              </Card>
            </Grid>
          </Grid>
        ))}
      </SoftBox>
    </SoftBox>
    <Footer />
  </DashboardLayout>
  );
}

export default SeeCabins;
