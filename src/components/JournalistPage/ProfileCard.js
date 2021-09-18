import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles({
  profileImgStyles: {
    width: "80%",
    borderRadius: "50%",
    // padding: "10px",
  },
  pictureDiv: {
    width: "100%",
    justifyContent: "center",
  },
});

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProfileCard() {
  const classes = useStyles();
  return (
    <Card sx={{ width: "30vw", height: "100vh", borderRadius: "0" }}>
      <div className={classes.pictureDiv} />
      <CardMedia
        component="img"
        class={classes.profileImgStyles}
        image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        alt="green iguana"
      />
      <div />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
