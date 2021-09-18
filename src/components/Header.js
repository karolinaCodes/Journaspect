import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SignInButton from "./SignInButton";
import { makeStyles } from "@mui/styles";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../store/context";
import { useState } from "react";
=======
import { Link, useHistory } from "react-router-dom";
>>>>>>> fd59db3dc423b54bb4c77f4444220aa974570642

///////////////////Styling/////////////////////////////
const useStyles = makeStyles({
  font: { fontFamily: "Poppins", color: "rgb(63, 61, 86)", fontWeight: 600 },
  header: {
    background: "rgb(248,248,255)",
  },
  headerColor: { color: "rgb(63, 61, 86)" },
  typography: {
    marginLeft: "10px !important",
    fontFamily: "Poppins",
    color: "rgb(63, 61, 86)",
    fontWeight: 600,
    // fontSize: "16px",
    textDecoration: "none",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(24 95 240 / 10%)",
  "&:hover": {
    backgroundColor: "rgb(24 95 240 / 10%)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  color: "rgb(63, 61, 86) !important",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgb(63, 61, 86) !important",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "300px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "300px",
      // width:"20ch"
    },
  },
}));
///////////////////Styling/////////////////////////////

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const ctx = useContext(Context);

  const saveQuery = function (e) {
    setSearchQuery(e.target.value);
  };

  const getSearchQuery = function (e) {
    ctx.searchQuery = searchQuery;
    console.log(ctx);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    const query = document.getElementById('header-search').value;
    if(!query) {
      return;
    }
    history.push('/searchresults?q=' + query);
  };


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class={classes.header}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ backgroundColor: "transparent" }}>
              <Typography noWrap class={classes.typography}>
                Journaspect
              </Typography>
            </Button>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Search class={(classes.headerColor, classes.searchBar)}>
<<<<<<< HEAD
            {/* <SearchIconWrapper class={classes.headerColor}> */}
            <SearchIcon style={{ zIndex: "100" }} onClick={getSearchQuery} />
            {/* </SearchIconWrapper> */}
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={saveQuery}
            />
=======
            <SearchIconWrapper class={classes.headerColor}>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSearch}>
              <StyledInputBase
                placeholder="Search…"
                id='header-search'
                inputProps={{ "aria-label": "search" }}
              />
            </form>
>>>>>>> fd59db3dc423b54bb4c77f4444220aa974570642
          </Search>
          <SignInButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
