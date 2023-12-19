import { Card, Grid, Icon, TextField, Tooltip } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import EditCalendarIcon from "@mui/icons-material/EditCalendar"; // Soft UI Dashboard React base styles
import borders from "assets/theme/base/borders";
import Checkbox from "@mui/material/Checkbox";
import styles from "./index.css";

import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import axios from "axios";
function BuscadorCabanas() {
  const [selectedStates, setSelectedStates] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [ids, setIds] = useState([])
  const handleCheckboxChange = (stateId) => {
    setChecked((prevChecked) => {
      const updatedChecked = prevChecked.includes(stateId)
        ? prevChecked.filter((id) => id !== stateId)
        : [...prevChecked, stateId];

      setIsChecked(updatedChecked.length > 0);

      return updatedChecked;
    });
  };

  useEffect(() => {
    if (!isChecked) {
      console.log("No checkboxes are checked");
    }
  }, [isChecked]);

  const handleFilterClick = async () => {
     try {
      const res = await axios.get(`http://localhost:8080/cabins-filtered-by-states?${"id=" + checked.join("&id=")}`);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <Card id="delete-account">
      <SoftBox p={3} display="flex" justifyContent="flex-start">
        <Grid container spacing={0}>
          <Grid item xs={10} md={2}>
            <SoftBox pr={1} style={{ width: "100%" }}>
              <SoftInput placeholder="Cabaña" icon={{ component: "search", direction: "left" }} />
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
              <Checkbox checked={checked.includes(1)}
                onChange={() => handleCheckboxChange(1)}/>
              <label style={{ fontSize: "14px" }}>Disponible </label>

              <Checkbox checked={checked.includes(3)}
                onChange={() => handleCheckboxChange(3)}/>
              <label style={{ fontSize: "14px" }}>Mantenimiento </label>

              <Checkbox checked={checked.includes(2)}
                onChange={() => handleCheckboxChange(2)}/>
              <label style={{ fontSize: "14px" }}>Reservada </label>

              <Checkbox checked={checked.includes(4)}
                onChange={() => handleCheckboxChange(4)}/>
              <label style={{ fontSize: "14px" }}>Cerrada temporalmente </label>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
            <SoftBox
              display="flex"
              justifyContent="center"
              onClick={handleFilterClick}
              style={{ cursor: "pointer" }}
            >
              <h1 className="green-text">APLICAR FILTRO</h1>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuscadorCabanas;
