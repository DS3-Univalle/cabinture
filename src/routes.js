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
import Help from "examples/Icons/Help";
import SignOff from "examples/Icons/SignOff";

// Soft UI Dashboard reac Owners
import Historical from "examples/Icons/Historical";
import Cabin from "examples/Icons/Cabin";
import ListCabin from "examples/Icons/ListCabin";
const routes = [
  {
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
  },{
    type: "collapse",
    name: "Crear Cabaña",
    key: "6",
    route: "",
    icon: <Cabin size="20px" />,
    component: "",
    noCollapse: true,
    isCP: 2,
  },{
    type: "collapse",
    name: "Mis cabañas",
    key: "7",
    route: "",
    icon: <ListCabin size="20px" />,
    component: "",
    noCollapse: true,
    isCP: 2,
  },{
    type: "collapse",
    name: "Mis Reservas",
    key: "8",
    route: "",
    icon: <Calendar size="20px" />,
    component: "",
    noCollapse: true,
    isCP: 2,
  },
  {
    type: "collapse",
    name: "Ayuda y Soporte",
    key: "9",
    route: "",
    icon: <Help size="20px" />,
    component: "",
    noCollapse: true,
    isCP: 2,
  },
  {
    type: "collapse",
    name: "Cerrar Sesión",
    key: "0",
    route: "",
    icon: <SignOff size="20px" />,
    component: "",
    noCollapse: true,
    isCP: 2,
  }
  
];

export default routes;
