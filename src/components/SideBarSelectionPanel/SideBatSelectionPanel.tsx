import React from "react";
import { Box } from "@mui/material";

const SideBarSelectionPanel: React.FC = () => {
  return (
    <Box
      sx={{
        width: "4vw", // 4% of viewport width
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Add selection panel content (e.g., icons, buttons) */}
      Sidebar Selection Panel
    </Box>
  );
};

export default SideBarSelectionPanel;