import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles({
  profileImgStyles: {
    borderRadius: "50%",
    maxWidth: "50%",
    maxHeight: "50%"
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
    width: '90%',
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

export default function ProfileCard(props) {
  console.log(props);
  const journalist = props.value;
  console.log(journalist);
  const classes = useStyles();
  if(!props.value) {
    return (<div>Loading</div>);
  }
  return (
    <Card sx={{ height: "100vh", borderRadius: "0", display: "flex", flexDirection: 'column', alignItems: 'center', width: '350px' }}>
      <div className={classes.pictureDiv} />
        <CardMedia
          component="img"
          className={classes.profileImgStyles}
          image={journalist.photoURL}
          alt="Profile Page"
        />
      <div />
      <Typography variant="h4" style={{marginTop: '10px'}}>
        {journalist.firstName} {journalist.lastName} 
      </Typography>
      <div className={classes.singleRatingsDiv}>
        <Typography>
          Overall Rating:
        </Typography>
        {journalist.overallRating ? <Rating value={journalist.overallRating} readOnly /> : <div />}
      </div>
      <div className={classes.ratingsDiv}>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Ethics
          </Typography>
          {journalist.ethicsRating ? <Rating value={journalist.ethicsRating} readOnly /> : <div />}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Writing
          </Typography>
          {journalist.writingRating ? <Rating value={journalist.writingRating} readOnly /> : <div />}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Accuracy
          </Typography>
          {journalist.accuracyRating ? <Rating value={journalist.accuracyRating} readOnly /> : <div />}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography className={classes.singleRatingsDiv}>
            Political Standing
          </Typography>
          {journalist.politicalRating ? <Rating value={journalist.politicalRating} readOnly /> : <div />}
        </div>
      </div>
    </Card>
  );
}
