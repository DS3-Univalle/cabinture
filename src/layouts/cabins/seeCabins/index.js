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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import SoftTypography from "components/SoftTypography";

import { Card, Checkbox, Modal } from "@mui/material";
import styles from "./index.css";
import BuscadorCabanas from "layouts/dashboard/components/Buscador cabanas";
import SoftInput from "components/SoftInput";
import Swal from "sweetalert2";
import ReactImageGallery from "react-image-gallery";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

function SeeCabins() {
  const defaultImages = [
    {
      original:
        "https://cytonus.com/wp-content/themes/native/assets/images/no_image_resized_675-450.jpg",
      thumbnail:
        "https://cytonus.com/wp-content/themes/native/assets/images/no_image_resized_675-450.jpg",
    },
  ];
  const storage = getStorage();

  const [modalOpen, setModalOpen] = useState(false);
  const [cabañas, setCabañas] = useState([]);

  // Specify the folder path
  const folderPath = "12345/";

  // Get a reference to the folder
  const folderRef = ref(storage, folderPath);
  const [imageList, setImageList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const imageListRef = ref(storage, "12345/");
  const [cabinImages, setCabinImages] = useState({});
  // useEffect(() => {
  //   const fetchCabinImages = async () => {
  //     const images = {};
  //     for (const cabin of cabañas) {
  //       const imageUrl = await getFirstImage(cabin.id_cabin);
  //       images[cabin.id_cabin] = imageUrl;
  //     }
  //     setCabinImages(images);
  //   };

  //   fetchCabinImages();
  // }, [cabañas]);
  useEffect(() => {
    const getFirstImage = async (id) => {
      const imageListRef = ref(storage, `${id}/`);
      try {
        const result = await listAll(imageListRef);
        if (result.items.length > 0) {
          const firstItem = result.items[0];
          const url = await getDownloadURL(firstItem);
          console.log("First Image URL:", id, url);
          return url;
        } else {
          console.log("No images found for folder:", id);
          return null;
        }
      } catch (error) {
        console.error("Error getting first image:", error);
        return null;
      }
    };

    const fetchCabinImages = async () => {
      const images = {};
      for (const cabin of cabañas) {
        const imageUrl = await getFirstImage(cabin.id_cabin);
        images[cabin.id_cabin] = imageUrl;
      }
      setCabinImages(images);
    };

    fetchCabinImages();
  }, [cabañas]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = await Promise.all(
        cabañas.map(async (cabin) => {
          const url = await getFirstImage(cabin.id_cabin);
          return { id: cabin.id_cabin, url };
        })
      );
      setImageUrls(urls);
    };
  }, []);
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
  const formatCurrency = (value) => {
    return Number(value).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
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
              <Grid container spacing={4} mt={1}>
                {cabañas.map((cabin) => (
                  <Grid item xs={12} key={cabin.id_cabin}>
                    <Card>
                      <SoftBox pt={3} pb={0} px={2} display="flex">
                        <SoftBox mb={1} ml={1} mr={1}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            <div className="app">
                              <div className="my-component-container">
                                {cabinImages[cabin.id_cabin] && (
                                  <img
                                    src={cabinImages[cabin.id_cabin]}
                                    alt={`Cabin ${cabin.id_cabin}`}
                                    style={{ width: "250px", height: "100%", objectFit: "cover" }}
                                  />
                                )}
                              </div>
                            </div>
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={3} ml={5} mr={2}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold" alignItems="center">

                            <h1 style={{ fontFamily: "'Patua One', serif" }}>{cabin.name}</h1>
                            <LocationOnIcon style={{ fontSize: '40', }} /> {cabin.location}
                            <br />
                            <span style={{
                              fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                              fontSize: '13px',
                              fontWeight: 400,
                              lineHeight: 1.625,
                              letterSpacing: '0.00938em'
                            }}>
                              {cabin.description}
                              <h1 className="green-text" style={{fontSize:"20px"}}> Valor {formatCurrency(cabin.price)} </h1>
                            </span>

                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={1} ml={1} mr={1} style={{ width: "200px", marginLeft: "auto" }}>
                          {cabinStates[cabin.id_cabin] &&
                            cabinStates[cabin.id_cabin].map((s) => (
                              <Grid item xs={12} md={12} key={s.id_state}>
                                <SoftBox tyle={{ marginLeft: "auto" }}>
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
                                    &nbsp;{s.state}
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
