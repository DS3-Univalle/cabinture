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

import SoftTypography from "components/SoftTypography";

import { Card, Modal } from "@mui/material";
import Buscador from "layouts/dashboard/components/Buscador";
import styles from "./index.css";

function SeeCabins() {

  const handleClickState = async (id, st) => {
    try {
      await axios.put(`http://localhost:8080/cabin/state/${id}`, st);
      fetchAllCabañas(); 
      setModalOpen(false)
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (state, cabin) => {};

  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cabañas, setCabañas] = useState([]);
  console.log(cabañas);
  const fetchAllCabañas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/cabins");
      setCabañas(res.data);
    } catch (err) {
      console.log(err);
    }
  };
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
  const [cabinId, setCabinId] = useState(0);

  const fetchCabinById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/cabin/${id}`);
      setCabañas([res.data]);
      console.log("yay"); // Assuming that the response is a single cabin object
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
      {modalOpen && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                X
              </button>
            </div>

            <div className="body">
              <p>Está seguro de que quiere cambiar el estado de la cabaña?</p>
            </div>
            {/* {cabañas.map(
              (cabin) =>
                cabinStates[cabin.id_cabin] &&
                cabinStates[cabin.id_cabin].map((s) => (
                 
                  <div key={s.id_state}>{stateButtons(s.state)}</div>
                ))
            )} */}
            <div className="footer">
              <button
                onClick={() => {
                  console.log(cabinId)
                  handleClickState(cabinId, { id_state: 2 });
                }}
                id="cancelBtn"
              >
                Reservada
              </button>
              <button
                onClick={() => {
                  handleClickState(cabinId, { id_state: 1 });
                }}
                id="cancelBtn"
              >
                Disponible
              </button>
              <button
                onClick={() => {
                  handleClickState(cabinId, { id_state: 4 });
                }}
                id="cancelBtn"
              >
                Cerrada temporalmente
              </button>
              <button
                onClick={() => {
                  handleClickState(cabinId, { id_state: 3 });
                }}
                id="cancelBtn"
              >
                Mantenimiento
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen ? null : (
        <div>
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
                            {cabinStates[cabin.id_cabin] &&
                              cabinStates[cabin.id_cabin].map((s) => (
                                <Grid item xs={12} md={3} key={s.id_state}>
                                  <SoftBox display="flex" justifyContent="center">
                                    <SoftButton
                                      onClick={() => {
                                        setCabinId(s.id_cabin);
                                        console.log("THIS IS THE ID" + s.id_cabin);
                                        setModalOpen(true);
                                      }}
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
        </div>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default SeeCabins;
