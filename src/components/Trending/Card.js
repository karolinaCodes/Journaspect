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
    <Card sx={{ maxHeight: 260, width: 250 }}>
      <CardMedia
        component="img"
        height="80%"
        image="https://globalnews.ca/wp-content/uploads/2017/04/2017-foyer-hed-serious.jpg?quality=85&strip=all&w=220"
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
