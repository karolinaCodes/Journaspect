import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    color: "blue",
    backgroundColor: "white",
  },
});

export default function SignInButton() {
  const classes = useStyles();

  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="contained">Contained</Button> */}
      <Button href="/signin" variant="contained" className={classes.buttonStyle}>
        Sign In
      </Button>
    </Stack>
  );
}
