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
