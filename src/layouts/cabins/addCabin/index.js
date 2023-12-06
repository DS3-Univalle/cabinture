import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import axios from "axios";
import Carrusel2 from "layouts/dashboard/components/Carrusel2";
import AddIMG from "layouts/dashboard/components/AddIMG";
import Mapa from "layouts/dashboard/components/Mapa";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftTextArea from "components/SoftTextArea";
import { Card } from "@mui/material";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function AddCabinComponent() {
  const [cabin, setCabin] = useState({
    id_cabin: "",
    name: "",
    description: "",
    location: "",
    price: null,
    rooms: null,
    bathrooms: null,
    legal_information: "",
    number_people: null,
    id_state: 3
  });

  const handleChange = (e) => {
    setCabin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showAlert = (icon, title) => {
    Swal.fire({
      icon,
      title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/create-cabin", cabin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setCabin(response.data);
      showAlert('success', 'Registro guardado con éxito');
      setButtonsState(false, true, true);
    } catch (err) {
      console.log(err);
      showAlert('error', 'Error al guardar el registro');
    }
  };

  const handleDelete = async () => {
    try {
      const cabinIDToDelete = cabin.id_cabin;
      if (!cabinIDToDelete) {
        console.error("ID de cabaña no especificado");
        return;
      }
      await axios.delete(`http://localhost:8081/cabin?cabinID=${cabinIDToDelete}`);
      showAlert('success', 'Registro eliminado con éxito');
      resetCabinState();
      setButtonsState(true, false, false);
    } catch (err) {
      console.log(err);
      showAlert('error', 'Error al eliminar el registro');
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`http://localhost:8081/cabin?cabinID=${cabin.id_cabin}`, cabin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setCabin(response.data);
      showAlert('success', 'Registro actualizado con éxito');
      // Puedes limpiar el formulario o realizar otras acciones después de la actualización
    } catch (err) {
      console.log(err);
      showAlert('error', 'Error al actualizar el registro');
    }
  };

  const resetCabinState = () => {
    setCabin({
      id_cabin: "",
      name: "",
      description: "",
      location: "",
      price: null,
      rooms: null,
      bathrooms: null,
      legal_information: "",
      number_people: null,
      id_state: 3
    });
  };

  const setButtonsState = (add, del, update) => {
    setAgregarBTN(add);
    setEliminarBTN(del);
    setActualizarBTN(update);
  };

  const [agregarBTN, setAgregarBTN] = useState(true);
  const [eliminarBTN, setEliminarBTN] = useState(false);
  const [ActualizarBTN, setActualizarBTN] = useState(false);

  const [address, setAddress] = useState("");
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Carrusel2 />
              <Mapa address={address} onAddressChange={(newAddress) => setAddress(newAddress)} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Card sx={{ height: "100%" }}>
                <SoftBox pt={3} pb={2} px={2}>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Cod Cabaña
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="text" placeholder="Cod Cabaña" name="id_cabin" value={cabin.id_cabin || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Cabaña
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="text" placeholder="Nombre de la Cabaña" name="name" value={cabin.name || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Precio
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="number" placeholder="$100.000,00" name="price" value={cabin.price || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Direcciòn
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="text"
                        value={cabin.location || ''}
                        placeholder="Avenida 2 Norte #10 - 70. Santiago de Cali - Valle del Cauca - Colombia"
                        onChange={(e) => handleChange(e)}
                        onBlur={() => handleAddressChange(cabin.location)}
                        name="location" />
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
                          Nùmero de baños
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="number" placeholder="1-5" name="bathrooms" value={cabin.bathrooms || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Nùmero de personas
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="number" placeholder="1-50" name="number_people" value={cabin.number_people || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Nùmero de habitaciones
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput type="number" placeholder="1-5" name="rooms" value={cabin.rooms || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Descripciòn
                        </SoftTypography>
                      </SoftBox>
                      <SoftTextArea type="text" placeholder="Esta cabaña contiene una amplia gama de comodidades..." name="description" value={cabin.description || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Informaciòn legal
                        </SoftTypography>
                      </SoftBox>
                      <SoftTextArea type="text" placeholder="Al realizar la reserva, acepto cumplir con los términos y condiciones establecidos..." name="legal_information" value={cabin.legal_information || ''} onChange={handleChange} />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }} >
                    <SoftBox>
                      <SoftBox mb={1} ml={0.5}>
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                          Agregar fotos
                        </SoftTypography>
                        <AddIMG />
                      </SoftBox>
                    </SoftBox>
                  </SoftBox>
                </SoftBox>
                <SoftBox pt={3} pb={2} px={2}>
                  <Grid container spacing={3}>
                    {agregarBTN && (
                      <Grid item xs={4}>
                        <SoftButton className="softButtonCustomColor" style={{ backgroundColor: "#71C455", color: "white", width: "100%" }} onClick={handleCreate} >
                          &nbsp;Agregar
                        </SoftButton>
                      </Grid>)}
                    {ActualizarBTN && (
                      <Grid item xs={4}>
                        <SoftButton
                          className="softButtonCustomColor"
                          style={{ backgroundColor: "#FFCC41", color: "white", width: "100%" }} onClick={handleUpdate}
                        >
                          &nbsp;Actualizar
                        </SoftButton>
                      </Grid>)}
                    {eliminarBTN && (
                      <Grid item xs={4}>
                        <SoftButton className="softButtonCustomColor" style={{ backgroundColor: "#C45555", color: "white", width: "100%" }} onClick={handleDelete}>
                          &nbsp;Eliminar
                        </SoftButton>
                      </Grid>)}
                  </Grid>
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
