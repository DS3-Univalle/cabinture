import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import Carrusel from "layouts/dashboard/components/Carrusel";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftButton from "components/SoftButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import SoftTypography from "components/SoftTypography";

import { Card, Checkbox, Modal } from "@mui/material";
import styles from "./index.css";
import BuscadorCabanas from "layouts/dashboard/components/Buscador cabanas";
import SoftInput from "components/SoftInput";
import Swal from "sweetalert2";

function SeeCabins() {

  const navigate = useNavigate();

  const handleClickState = async (id, st) => {
    try {
      await axios.put(`http://localhost:8080/cabin/state/${id}`, st);
      if (!isChecked) {
        fetchAllCabañas();
      } else {
        fetchAllCabañasState();
      }
      Swal.fire({
        icon: "success",
        title: "Estado actualizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      setModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  const [selectedStates, setSelectedStates] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [ids, setIds] = useState([]);
  const handleCheckboxChange = (stateId) => {
    setChecked((prevChecked) => {
      const updatedChecked = prevChecked.includes(stateId)
        ? prevChecked.filter((id) => id !== stateId)
        : [...prevChecked, stateId];

      setIsChecked(updatedChecked.length > 0);

      return updatedChecked;
    });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [cabañas, setCabañas] = useState([]);
  const fetchAllCabañasState = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/cabins-filtered-by-states?${"id=" + checked.join("&id=")}`
      );
      setCabañas(res.data);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllCabañas = async () => {
    if (!isChecked) {
      try {
        const res = await axios.get("http://localhost:8080/cabins");
        setCabañas(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    fetchAllCabañas();
  }, [isChecked]);
  const [cabinStates, setCabinStates] = useState([]);
  const [cabinId, setCabinId] = useState(0);

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

  const swal = () => {
    Swal.fire({
      icon: "success",
      title: "Estado actualizado con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
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
                  // console.log(cabinId)
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
                <Card id="delete-account">
                  <SoftBox p={3} display="flex" justifyContent="flex-start">
                    <Grid container spacing={0}>
                      <Grid item xs={10} md={2}>
                        <SoftBox pr={1} style={{ width: "100%" }}>
                          <SoftInput
                            placeholder="Cabaña"
                            icon={{ component: "search", direction: "left" }}
                          />
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <SoftBox display="flex" justifyContent="center">
                          <SoftButton
                            className="softButtonCustomColor"
                            style={{ backgroundColor: "#71C455", color: "white", width: "100%" }}
                          >
                            &nbsp;Buscar
                          </SoftButton>
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <SoftBox pl={1} style={{ width: "100%" }}>
                          <Checkbox
                            checked={checked.includes(1)}
                            onChange={() => handleCheckboxChange(1)}
                          />
                          <label style={{ fontSize: "14px" }}>Disponible </label>

                          <Checkbox
                            checked={checked.includes(3)}
                            onChange={() => handleCheckboxChange(3)}
                          />
                          <label style={{ fontSize: "14px" }}>Mantenimiento </label>

                          <Checkbox
                            checked={checked.includes(2)}
                            onChange={() => handleCheckboxChange(2)}
                          />
                          <label style={{ fontSize: "14px" }}>Reservada </label>

                          <Checkbox
                            checked={checked.includes(4)}
                            onChange={() => handleCheckboxChange(4)}
                          />
                          <label style={{ fontSize: "14px" }}>Cerrada temporalmente </label>
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <SoftBox
                          display="flex"
                          justifyContent="center"
                          onClick={fetchAllCabañasState}
                          style={{ cursor: "pointer" }}
                        >
                          <h1 className="green-text">APLICAR FILTRO</h1>
                        </SoftBox>
                      </Grid>
                    </Grid>
                  </SoftBox>
                </Card>
                {/* <Buscador /> */}
              </Grid>
              <Grid container spacing={3} mt={1}>
                {cabañas.map((cabin) => (
                  <Grid item xs={12} key={cabin.id_cabin}>
                    <Card>
                      <SoftBox pt={1} pb={1} px={1} display="flex">
                        <SoftBox mb={1} ml={1} mr={1}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            <Carrusel />
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} ml={1} mr={1}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Nombre Cabaña: {cabin.name}
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} ml={1} mr={1}>
                          {cabinStates[cabin.id_cabin] &&
                            cabinStates[cabin.id_cabin].map((s) => (
                              <Grid item xs={12} md={12} key={s.id_state}>
                                <SoftBox >
                                  <SoftButton
                                    onClick={() => {
                                      setCabinId(s.id_cabin);
                                      setModalOpen(true);
                                    }}
                                    className="softButtonCustomColor"
                                    style={{
                                      backgroundColor: "#71C455",
                                      color: "white",
                                      width: "100%",
                                    }}
                                  >
                                    &nbsp;{s.state}  {cabin.id_cabin}
                                  </SoftButton>
                                </SoftBox>
                              </Grid>
                            ))}
                          <Grid item xs={12} md={12} mb={1} mt={2}>
                            <SoftBox >
                              <SoftButton
                                className="softButtonCustomColor"
                                style={{
                                  backgroundColor: "#71C455",
                                  color: "white",
                                  width: "100%",
                                }}
                                onClick={() => {
                                  navigate("/AgregarCabana", {
                                    state: { cabinId: cabin.id_cabin },
                                  });
                                }}
                              >
                                &nbsp;Editar
                              </SoftButton>
                            </SoftBox>
                          </Grid>
                        </SoftBox>
                      </SoftBox>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </SoftBox>
          </SoftBox>
        </div>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default SeeCabins;
