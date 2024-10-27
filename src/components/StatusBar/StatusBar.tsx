import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const StatusBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#333", height: "2.5rem" }}
    >
      <Toolbar>
        <Typography variant="caption" color="inherit">
          Status Bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default StatusBar;