import * as React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
});

export default function RAACard() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState('one');
  
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  return (
    <Card sx={{ borderRadius: "0", display: "flex", flexDirection: 'column', width: "100%"}}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Reviews" />
          <Tab value="two" label="Articles" />
          <Tab value="three" label="About" />
        </Tabs>
      </Box>
      {tabValue === "one" ? (
        <div>
          <div>
            Reviews
          </div>
        </div>
      ) : (
        <div>
          {tabValue == "two" ? (
            <div>
              Articles
            </div>
          ) : (
            <div>
              About
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
