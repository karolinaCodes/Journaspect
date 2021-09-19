import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles({
  profileImgStyles: {
    borderRadius: "50%",
    maxWidth: "70%",
    maxHeight: "70%",
    height: "170px",
  },
  pictureDiv: {
    width: "100%",
    margin: "20px",
  },
  nameDiv: {
    fontSize: "20px",
    marginTop: "10px",
    fontFamily: "Poppins",
  },
  ratingsDiv: {
    height: "30%",
    width: "90%",
    backgroundColor: "#d8e5f2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  singleRatingsDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
    fontFamily: "Poppins",
  },
});

export default function ProfileCard(props) {
  console.log(props);
  const journalist = props.value;
  console.log(journalist);
  const classes = useStyles();
  if (!props.value) {
    return <div>Loading</div>;
  }
  return (
    <Card
      sx={{
        height: "100vh",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
      }}
    >
      <div className={classes.pictureDiv} />
      <CardMedia
        component="img"
        class={classes.profileImgStyles}
        image={journalist.photoURL}
        alt="Profile Page"
      />
      <div />
      <Typography
        variant="h4"
        style={{ margin: "8px 0px 3px 0px", fontFamily: "Poppins" }}
      >
        {journalist.firstName} {journalist.lastName}
      </Typography>
      <div className={classes.singleRatingsDiv}>
        <Typography style={{ fontFamily: "Poppins" }}>
          Overall Rating:
        </Typography>
        {journalist.overallRating ? (
          <Rating
            value={journalist.overallRating / journalist.overallNum}
            readOnly
          />
        ) : (
          <div />
        )}
      </div>
      <div className={classes.ratingsDiv}>
        <div className={classes.singleRatingsDiv}>
          <Typography style={{ fontFamily: "Poppins" }}>Ethics</Typography>
          {journalist.ethicsRating ? (
            <Rating
              value={journalist.ethicsRating / journalist.ethicsNum}
              readOnly
            />
          ) : (
            <div />
          )}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography style={{ fontFamily: "Poppins" }}>Writing</Typography>
          {journalist.writingRating ? (
            <Rating
              value={journalist.writingRating / journalist.writingNum}
              readOnly
            />
          ) : (
            <div />
          )}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography style={{ fontFamily: "Poppins" }}>Accuracy</Typography>
          {journalist.accuracyRating ? (
            <Rating
              value={journalist.accuracyRating / journalist.accuracyNum}
              readOnly
            />
          ) : (
            <div />
          )}
        </div>
        <div className={classes.singleRatingsDiv}>
          <Typography style={{ fontFamily: "Poppins" }}>
            Political Standing
          </Typography>
          {journalist.politicalRating ? (
            <Rating
              value={journalist.politicalRating / journalist.politicalTotal}
              readOnly
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </Card>
  );
}
