import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  fontStyle: {
    color: "rgb(63, 61, 86); !important",
    fontFamily: "Poppins !important",
    textAlign: "center",
  },
  // footerStyles: { position: "absolute", bottom: " 0", left: "0", right: "0" },
});

function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      className={classes.fontStyle}
    >
      <Link color="inherit" href="https://github.com/htn-2021/journaspect">
        Hack the North 2021
      </Link>
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 10,
        mt: "auto",
        display: 'inline-block',
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
