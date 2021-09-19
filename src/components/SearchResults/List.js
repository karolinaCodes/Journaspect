import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import styles from "./List.module.css";
import Context from "../../store/context";

const useStyles = makeStyles({
  profileImgStyles: {
    borderRadius: "50%",
    maxWidth: "10%",
    maxHeight: "10%"
  },
  pictureDiv: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  nameStyles: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "18px",
    margin: "0px 0px 10px 10px",
  },
  rating: { margin: "0px 0px 15px 10px", fontFamily: "Poppins" },
});

export default function FolderList(props) {
  const classes = useStyles();

  return (
    //render card based on the array that get back
    <div>
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
          {props.value.map((result) => (
            <div>
              <ListItem>
                <div className={classes.pictureDiv} />
                  <CardMedia
                    component="img"
                    className={classes.profileImgStyles}
                    image={result.photURL}
                    alt="Profile Page"
                  />
                <div />
                <div>
                  <Typography
                    variant="h5"
                    component="div"
                    class={classes.nameStyles}
                  >
                    {`${result.firstName} ${result.lastName}`}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    color="text.secondary"
                    class={classes.rating}
                  >
                    RATING:
                  </Typography>
                </div>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Card>
    </div>
  );
}
