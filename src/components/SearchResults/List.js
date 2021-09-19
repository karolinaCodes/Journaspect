import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import styles from "./List.module.css";

const useStyles = makeStyles({
  imgStyles: {
    borderRadius: "50%",
  },
  nameStyles: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "18px",
    margin: "0px 0px 10px 10px",
  },
  rating: { margin: "0px 0px 15px 10px", fontFamily: "Poppins" },
});

export default function FolderList() {
  const classes = useStyles();
  return (
    //render card based on the array that get back
    <Card>
      <h1 className={styles.headerStyles}>Search Results</h1>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          padding: "10px",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <img
              className={classes.imgStyles}
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
              width="100px"
            />
          </ListItemAvatar>
          <div>
            <Typography variant="h5" component="div" className={classes.nameStyles}>
              Elon Musk
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              className={classes.rating}
            >
              RATING
            </Typography>
          </div>
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemAvatar>
            <img
              className={classes.imgStyles}
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
              width="100px"
            />
          </ListItemAvatar>
          <div>
            <Typography variant="h5" component="div" className={classes.nameStyles}>
              Elon Musk
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              className={classes.rating}
            >
              RATING
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
  );
}
