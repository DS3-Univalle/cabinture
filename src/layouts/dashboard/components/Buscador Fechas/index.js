import { Card, Grid, Icon, TextField, Tooltip } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import EditCalendarIcon from "@mui/icons-material/EditCalendar"; // Soft UI Dashboard React base styles
import borders from "assets/theme/base/borders";

import SoftInput from "components/SoftInput";

function Buscador() {
  return (
    <Card id="delete-account">
      <SoftBox p={3} display="flex" justifyContent="flex-start">
        <Grid container spacing={0}>
          <Grid item xs={10} md={3}>
            <SoftBox pr={1} style={{ width: "100%" }}>
              <SoftInput placeholder="Ciudad" icon={{ component: "search", direction: "left" }} />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <SoftBox pr={1} style={{ width: "100%" }}>
              <SoftInput
                placeholder="Check-In"
                icon={{ component: <EditCalendarIcon />, direction: "left" }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <SoftBox pr={1} style={{ width: "100%" }}>
              <SoftInput
                placeholder="Check-Out"
                icon={{ component: <EditCalendarIcon />, direction: "left" }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={3}>
            <SoftBox display="flex" justifyContent="center">
              <SoftButton
                className="softButtonCustomColor"
                style={{ backgroundColor: "#71C455", color: "white", width: "100%" }}
              >
                &nbsp;Buscar
              </SoftButton>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default Buscador;
