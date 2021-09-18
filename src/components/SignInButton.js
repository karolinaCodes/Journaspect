import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";
import { userManager } from '../service.js';

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
  const [username, setUsername] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    //href to the user profile here
    setAnchorEl(null);
  };

  userManager.subscribe((user) => {
    if(user){
      setUsername(user.name);
    }
  });

  return username === '' ? (
    <Stack spacing={2} direction="row">
      <Button href="/signin" variant="contained" className={classes.buttonStyle}>
        Sign In
      </Button>
    </Stack>
  ) : (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className={classes.buttonStyle} onClick={handleClick}>
        <Typography>
          {username[0]}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
