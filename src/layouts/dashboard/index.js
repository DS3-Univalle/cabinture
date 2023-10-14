import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import styles from "../dashboard/components/styles.css";

import Buscador from "./components/Buscador";
import Carrusel from "./components/Carrusel";

function Dashboard() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}></Grid>
        </SoftBox>
        <SoftBox mb={3} mt={5}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={7} style={{ position: "relative" }}>
              <h1 className="inicio">Encuentra la cabaña</h1>
              <h1 className="green-text">perfecta.</h1>
              <span>Con Cabinture, encontrar cabañas jamás había sido tan fácil y confiable</span>
              {/* BUSCADOR (make it larger) */}
              <Buscador style={{ width: "100%", height: "400px" }} />
            </Grid>
            <Grid item xs={12} lg={4} mt={5}>
              {/* CARRUSEL (move it to the right) */}
              {/* <div style={{ position: "relative" }}> */}
                {/* <div style={{ width: "50%", float: "right" }}> */}
                  <Carrusel  />
                {/* </div> */}
              {/* </div> */}
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5}></Grid>
            <Grid item xs={12} lg={7}></Grid>
          </Grid>
        </SoftBox>
        <Footer />
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
