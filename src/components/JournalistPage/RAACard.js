import * as React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { addJournalistReview, userManager } from "../../service.js";

const useStyles = makeStyles({
  profileImgStyles: {
    borderRadius: "50%",
    margin: "10px",
  },
});

export default function RAACard() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState("one");
  const [addReview, setAddReview] = React.useState(false);
  const [reviews, setReviews] = React.useState([
    {
      first: "Elon",
      last: "Musk",
      profilePicture:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
      review: "This was very well done but bla bla bla",
    },
    {
      first: "Jeff",
      last: "Bezos",
      profilePicture:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
      review: "This was poorly done bla bla bla",
    },
  ]);
  const [reviewRating, setReviewRating] = React.useState({
    overallRating: 0,
    ethicsRating: 0,
    writingRating: 0,
    accuracyRating: 0,
    politicalRating: 0,
    writtenReview: "",
  });

  const user = userManager.getCurrentUser();

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  const toggleAddReview = () => {
    setAddReview(!addReview);
  };

  const handleSubmitReview = (event) => {
    addJournalistReview(
      window.location.pathname.split("/")[2],
      user,
      reviewRating
    );
    toggleAddReview();
    event.preventDefault();
  };

  return (
    <Card
      sx={{
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Reviews" style={{ fontFamily: "Poppins" }} />
          <Tab value="two" label="Articles" style={{ fontFamily: "Poppins" }} />
          <Tab value="three" label="About" style={{ fontFamily: "Poppins" }} />
        </Tabs>
      </Box>
      {tabValue === "one" ? (
        <div>
          <Button onClick={toggleAddReview} style={{ fontFamily: "Poppins" }}>
            Add Review
          </Button>
          {addReview ? (
            <Dialog
              onClose={toggleAddReview}
              aria-labelledby="add-review-dialog"
              open={addReview}
            >
              <div style={{ width: "500px" }}>
                <DialogTitle style={{ fontFamily: "Poppins" }}>
                  Add Review
                </DialogTitle>
                <DialogContent>
                  {user.name}:
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                      name="review"
                      required
                      multiline
                      value={reviewRating.writtenReview}
                      onChange={(event) => {
                        setReviewRating({
                          ...reviewRating,
                          writtenReview: event.target.value,
                        });
                      }}
                    />
                    <div
                      style={{
                        margin: "10px",
                        display: "inline-flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          justifyContent: "space-between",
                          fontFamily: "Poppins",
                        }}
                      >
                        Overall Rating:{" "}
                        <Rating
                          value={reviewRating.overallRating}
                          onChange={(event, newValue) => {
                            setReviewRating({
                              ...reviewRating,
                              overallRating: newValue,
                            });
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          justifyContent: "space-between",
                          fontFamily: "Poppins",
                        }}
                      >
                        Ethics Rating (Optional):{" "}
                        <Rating
                          value={reviewRating.ethicsRating}
                          onChange={(event, newValue) => {
                            setReviewRating({
                              ...reviewRating,
                              ethicsRating: newValue,
                            });
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          justifyContent: "space-between",
                          fontFamily: "Poppins",
                        }}
                      >
                        Writing Rating (Optional):{" "}
                        <Rating
                          value={reviewRating.writingRating}
                          onChange={(event, newValue) => {
                            setReviewRating({
                              ...reviewRating,
                              writingRating: newValue,
                            });
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          justifyContent: "space-between",
                          fontFamily: "Poppins",
                        }}
                      >
                        Accuracy Rating (Optional):{" "}
                        <Rating
                          value={reviewRating.accuracyRating}
                          onChange={(event, newValue) => {
                            setReviewRating({
                              ...reviewRating,
                              accuracyRating: newValue,
                            });
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          justifyContent: "space-between",
                          fontFamily: "Poppins",
                        }}
                      >
                        Political Standing (Optional):{" "}
                        <Rating
                          value={reviewRating.politicalRating}
                          onChange={(event, newValue) => {
                            setReviewRating({
                              ...reviewRating,
                              politicalRating: newValue,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        onClick={handleSubmitReview}
                        type="submit"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={toggleAddReview}
                        style={{ fontFamily: "Poppins" }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          ) : (
            <div />
          )}
          {reviews.map((item) => (
            <div style={{ width: "100%", padding: "10px" }}>
              <ListItem>
                <ListItemAvatar>
                  <img
                    className={classes.profileImgStyles}
                    src={item.profilePicture}
                    alt="Profile Picture"
                    width="100px"
                  />
                </ListItemAvatar>
                <div>
                  <Typography
                    variant="h5"
                    component="div"
                    className={classes.nameStyles}
                    style={{ fontFamily: "Poppins" }}
                  >
                    {item.first + " " + item.last}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                    className={classes.rating}
                    style={{ fontFamily: "Poppins", marginTop: "6px" }}
                  >
                    {`"${item.review}"`}
                  </Typography>
                </div>
              </ListItem>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {tabValue == "two" ? (
            <div>
              <div>Articles</div>
            </div>
          ) : (
            <div>
              <div>About</div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
