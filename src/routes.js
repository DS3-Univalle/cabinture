/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

//Componetes
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Custoner from "layouts/custoner";

// Soft UI Dashboard React Customer
import Home from "examples/Icons/Home";
import Catalogue from "examples/Icons/Catalogue";
import Calendar from "examples/Icons/Calendar";
import User from "examples/Icons/User";
import AddCabin from "examples/Icons/AddCabin";
import Help from "examples/Icons/Help";
import SignOff from "examples/Icons/SignOff";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";


// Soft UI Dashboard reac Owners
import Historical from "examples/Icons/Historical";
import Cabin from "examples/Icons/Cabin";
import ListCabin from "examples/Icons/ListCabin";
import { MicNone } from "@mui/icons-material";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";


import SeeCabins from "layouts/cabins/seeCabins";
import AddCabinComponent from "layouts/cabins/addCabin";
const routes = [{
  type: "collapse",
  name: "Inicio",
  key: "dashboard",
  route: "/dashboard",
  icon: <Home size="20px" />,
  component: <Dashboard />,
  noCollapse: true,
  isCP: 1,
},
{
  type: "collapse",
  name: "Mi Perfil",
  key: "profile",
  route: "/profile",
  icon: <User size="25px" />,
  component: <Custoner />,
  noCollapse: true,
  isCP: 1,
},
{
  type: "collapse",
  name: "Catálogo",
  key: "tables",
  route: "/tables",
  icon: <Catalogue size="20px" />,
  component: <Tables />,
  noCollapse: true,
  isCP: 1,
},
{
  type: "collapse",
  name: "Mis Reservas",
  key: "billing",
  route: "/billing",
  icon: <Calendar size="25px" />,
  component: <Billing />,
  noCollapse: true,
  isCP: 1,
},
{
  type: "collapse",
  name: "Inicio",
  key: "dashboard",
  route: "/dashboard",
  icon: <Home size="20px" />,
  component: <Dashboard />,
  noCollapse: true,
  isCP: 2,
},
{
  type: "collapse",
  name: "Mi Perfil",
  key: "profile",
  route: "/profile",
  icon: <User size="25px" />,
  component: <Custoner />,
  noCollapse: true,
  isCP: 2,
},
{
  type: "collapse",
  name: "Historico",
  key: "rtl",
  route: "/rtl",
  icon: <Historical size="20px" />,
  component: <RTL />,
  noCollapse: true,
  isCP: 2,
},
{
  type: "collapse",
  name: "Añadir Cabaña",
  key: "addCabin",
  route: "/AgregarCabana",
  icon: <AddCabin size="20px" />,
  component: <AddCabinComponent />,
  render: (props) => <AddCabinComponent {...props} />,
  noCollapse: true,
  isCP: 2,
},
{
  type: "collapse",
  name: "Mis Cabañas",
  key: "myCabins",
  route: "/myCabins",
  icon: <Cabin size="20px" />,
  component: <SeeCabins />,
  noCollapse: true,
  isCP: 2,
}
,
{
  type: "collapse",
  name: "Sign In",
  key: "sign-in",
  route: "/authentication/sign-in",
  icon: <Document size="12px" />,
  component: <SignIn />,
  noCollapse: true,
  isCP: 0,
},
{
  type: "collapse",
  name: "Sign Up",
  key: "sign-up",
  route: "/authentication/sign-up",
  icon: <SpaceShip size="12px" />,
  component: <SignUp />,
  noCollapse: true, 
  isCP: 0,
},
];

export default routes;
