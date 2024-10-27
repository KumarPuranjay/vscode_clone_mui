import React from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar/SideBar.tsx";
import EditorWindow from "./EditorWindow/EditorWindow.tsx";
import TerminalWindow from "./TerminalWindow/TerminalWindow.tsx";
import StatusBar from "./StatusBar/StatusBar.tsx";
import SideBarSelectionPanel from "./SideBarSelectionPanel/SideBatSelectionPanel.tsx";

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* SideBar Window Selection Panel */}
      <SideBarSelectionPanel />

      {/* Resizable Sidebar */}
      <SideBar />

      {/* Main content (Editor + Terminal) */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <EditorWindow />
        <TerminalWindow />
        <StatusBar />
      </Box>
    </Box>
  );
};

export default MainLayout;