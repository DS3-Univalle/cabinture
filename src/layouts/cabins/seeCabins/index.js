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
import { Card, Modal } from "@mui/material";
import Buscador from "layouts/dashboard/components/Buscador";
import Swal from "sweetalert2";

function SeeCabins() {

  const [state, setState] = useState({
   id_state: null
  });
  const handleClickState = async (id) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/cabin/state/${id}`, state);
      console.log("done");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (state, cabin) => {
    let confirmButtonText, denyButtonText, cancelButtonText;
    let confirmButtonColor, denyButtonColor, cancelButtonColor;
  
    const buttonOptions = [
      {
        text: 'Disponible',
        color: 'green',
        id: 1,
      },
      {
        text: 'Reservada',
        color: 'green',
        id: 2,
      },
      {
        text: 'Mantenimiento',
        color: 'green',
        id: 3,
      },
      {
        text: 'Cerrada temporalmente',
        color: 'green',
        id: 4,
      }
    ];
  
    // Determine the button options based on the current state
    const currentButtonOption = buttonOptions.find((option) => option.text === state);
    const otherButtonOptions = buttonOptions.filter((option) => option.text !== state);
  
    confirmButtonText = otherButtonOptions[0].text;
    confirmButtonColor = otherButtonOptions[0].color;
    denyButtonText = otherButtonOptions[1].text;
    denyButtonColor = otherButtonOptions[1].color;
    cancelButtonText = otherButtonOptions[2].text;
    cancelButtonColor = otherButtonOptions[2].color;
  
    const { value: selectedButtonText } = await Swal.fire({
      title: `Cambiar estado de cabaña ${cabin}`,
      text: `Estado Actual: ${state}`,
      showCancelButton: true,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText,
      confirmButtonColor,
      denyButtonText,
      denyButtonColor,
      cancelButtonText,
      cancelButtonColor,
    });
  
    if (selectedButtonText) {
      const selectedButton = buttonOptions.find((option) => option.text === selectedButtonText);
      const selectedId = selectedButton.id;
      console.log(selectedId);
      console.log('selectedButtonText:', selectedButtonText);
console.log('buttonOptions:', buttonOptions);

      Swal.fire(`El estado de la cabaña ha sido cambiado a: ${selectedButtonText} with ID ${selectedId}`, '', 'success');
    }
  };
  
  

  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [cabañas, setCabañas] = useState([]);
  console.log(cabañas);
  useEffect(() => {
    const fetchAllCabañas = async () => {
      try {
        const res = await axios.get("http://localhost:8080/cabins");
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
        const response = await axios.get(`http://localhost:8080/cabins/states/${id}`);
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
          {/* <Buscador /> */}
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
                            <SoftButton onClick={() => {
          setModalOpen(true);
        }}
                              className="softButtonCustomColor"
                              style={{
                                backgroundColor: "#71C455",
                                color: "white",
                                width: "100%",
                              }}
                            >
                               {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
