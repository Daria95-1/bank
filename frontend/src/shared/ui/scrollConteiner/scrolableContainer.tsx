import React from "react";
import Box from "@mui/material/Box";

interface ScrollableContainerProps {
  children: React.ReactNode;
  height?: string;
  width?: string;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ children, height = "25rem", width = "100%" }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "auto",
        overflowAnchor: "none",
        width: width,
        height: height,
        borderRadius: "1.25rem",
        paddingTop: "0.2rem",
        paddingRight: "0.5rem",

        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },

        "&::-webkit-scrollbar-track": {
          backgroundColor: "var(--color-grey)",
          borderRadius: "0.25rem",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--color-dark)",
          borderRadius: "0.25rem",
        },
        
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "var(--color-main-dark)",
          border: "0.06rem solid var(--color-grey)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollableContainer;
