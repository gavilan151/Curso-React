import * as React from "react";
import UsuariosConReactQuery from "./UsuariosConReactQuery";
import BotonMaterial from "./BotonMaterial";
import Inicio from "./Inicio";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, Route, Routes } from "react-router-dom";
// import App from "./App";

export default function MenuPrincipal() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Inicio</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/UsuariosConReactQuery">Listado</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {/* Definimos las rutas */}
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route  path="/UsuariosConReactQuery"
          element={<UsuariosConReactQuery />}
        />
        <Route path="/BotonMaterial" element={<BotonMaterial />} />
      </Routes>
    </div>
  );
}
