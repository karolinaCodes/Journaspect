import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import "./Card.module.css";

const useStyles = makeStyles({
  typography: { textAlign: "center", fontFamily: "Poppins" },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        height="80%"
        image="https://lh3.googleusercontent.com/proxy/t9p1UHlN3cwBkXcwcIBNM--DnRExCG2kyppsn_wuYs6pMBauZG5UbWlBq0JtlhG9qQUbuykIv3oiDzqqwhbQ9JbgXAZN"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          class={classes.typography}
        >
          David Akin
        </Typography>
      </CardContent>
    </Card>
  );
}
