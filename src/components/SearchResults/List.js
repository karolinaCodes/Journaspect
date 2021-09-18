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
  cardStyles: { width: "200px" },
});

export default function FolderList() {
  const classes = useStyles();
  return (
    <Card>
      <h1 className={styles.headerStyles}>Search Results</h1>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <img
              className={classes.imgStyles}
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
              width="100px"
            />
          </ListItemAvatar>
          <Typography variant="h5" component="div">
            Elon Musk
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            RATING
          </Typography>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}
