import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftButton from "components/SoftButton";

function AñadirCabaña() {
  
  return (
    // <DashboardLayout>
    //   <DashboardNavbar />
    //   <SoftBox py={3}>
    //     <Grid item xs={12} md={3}>
    //       <SoftBox display="flex" justifyContent="center">
    //         <SoftButton
    //           className="softButtonCustomColor"
    //           style={{ backgroundColor: "#71C455", color: "white", width: "100%" }}
    //         >
    //           &nbsp;Buscar
    //         </SoftButton>
    //       </SoftBox>
    //     </Grid>
    //   </SoftBox>
    // </DashboardLayout>
    <DashboardLayout>
    <div>
                <h1>Property Information Form</h1>
                <form id="propertyForm" method="POST" action="../../../../../Backend/cabanas.php">
                    <label htmlFor="id_property">ID Property:</label>
                    <input type="text" name="id_property" id="id_property"  />

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"  />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"  />

                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location"  />

                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" id="price" />

                    <label htmlFor="rooms">Rooms:</label>
                    <input type="text" name="rooms" id="rooms"  />

                    <label htmlFor="bathrooms">Bathrooms:</label>
                    <input type="text" name="bathrooms" id="bathrooms"/>

                    <label htmlFor="legal_information">Legal Information:</label>
                    <textarea name="legal_information" id="legal_information"  />

                    <label htmlFor="number_people">Number of People:</label>
                    <input type="text" name="number_people" id="number_people" />

                    <input type="submit" id="enviar" />
                </form>
            </div>
            </DashboardLayout>
  );
}

export default AñadirCabaña;
