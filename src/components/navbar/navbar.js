import React from "react";
import "./navbar.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <nav className="navbar">
      <div style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>
        <p>Amrutha</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {auth && (
        <div className="profile-icon">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            style={{display:'flex'}}
            onClose={handleClose}
          >
            <a href="#home">
            <MenuItem onClick={handleClose} style={{color:'black'}}>Home</MenuItem>
            </a>
            <a href="#about">
            <MenuItem onClick={handleClose} style={{color:'black'}}>About</MenuItem>
            </a>
            <a href="#skills">
            <MenuItem onClick={handleClose} style={{color:'black'}}>Skills</MenuItem>
            </a>
            <a href="#projects">
            <MenuItem onClick={handleClose} style={{color:'black'}}>Projects</MenuItem>
            </a>
            <a href="#contact">
            <MenuItem onClick={handleClose} style={{color:'black'}}>Contact</MenuItem>
            </a>
          </Menu>
        </div>
      )}
    </nav>
  );
}
