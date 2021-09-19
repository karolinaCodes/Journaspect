import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { userManager, signOutUser } from "../service.js";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  buttonStyle: {
    color: "rgb(248,248,255) !important",
    backgroundColor: "rgb(63, 61, 86) !important ",
    fontFamily: "Poppins !important",
    fontWeight: "700",
    // border: "1px solid rgb(63, 61, 86) !important",
  },
});

export default function SignInButton() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
<<<<<<< HEAD
    
=======
    //href to the user profile here
    history.push('/myprofile');
>>>>>>> 651d68c73abcec3ba2b4fd28ebb7f6812ae4fa99
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    try {
      if(signOutUser()) {
        history.go(0);
        setAnchorEl(null);
      }
    } catch (e) {
      console.log('Error signing out');
    }
  };

  userManager.subscribe((user) => {
    if (user) {
      setUsername(user.name);
    }
  });

  return username === "" ? (
    <Stack spacing={2} direction="row">
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <Button variant="contained" className={classes.buttonStyle}>
          Sign In
        </Button>
      </Link>
    </Stack>
  ) : (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={handleClick}
      >
        <Typography>{username[0]}</Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
