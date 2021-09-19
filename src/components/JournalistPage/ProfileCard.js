import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles({
  profileImgStyles: {
    borderRadius: "50%",
    maxWidth: "50%",
    maxHeight: "50%"
    // padding: "10px",
  },
  pictureDiv: {
    width: "100%",
    marginTop: '10px'
  },
  nameDiv: {
    fontSize: '20px',
    marginTop: '10px'
  },
  ratingsDiv: {
    height: '30%',
    width: '70%',
    backgroundColor: '#d8e5f2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  singleRatingsDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px'
  }
});

export default function ProfileCard() {
  const classes = useStyles();
  return (
    <Card sx={{ width: "30vw", height: "100vh", borderRadius: "0", display: "flex", flexDirection: 'column', alignItems: 'center' }}>
      <div className={classes.pictureDiv} />
        <CardMedia
          component="img"
          className={classes.profileImgStyles}
          image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
          alt="Profile Page"
          
        />
      <div />
      <Typography variant="h4">
        Elon Musk
      </Typography>
      <div className={classes.singleRatingsDiv}>
        <Typography>
          Overall Rating:
        </Typography>
        <div>
          <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon />
        </div>
      </div>
      <div className={classes.ratingsDiv}>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Ethics
          </Typography>
          <div>
            <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon />
          </div>
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Writing
          </Typography>
          <div>
            <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
          </div>
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Accuracy
          </Typography>
          <div>
            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon />
          </div>
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Political Standing
          </Typography>
          <div>
            <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
          </div>
        </div>
      </div>
    </Card>
  );
}
