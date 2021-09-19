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
import { useContext } from "react";
import Context from "../../store/context";

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

export default function FolderList(props) {
  const classes = useStyles();
  const ctx = useContext(Context);

  console.log(props.value);

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
          {ctx.searchResults.map((result) => (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <img className={classes.imgStyles} src={result.photoURL} />
                </ListItemAvatar>
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
                    RATING
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
