import React from "react";
import Box from "@mui/material/Box";
import { getScrollableContainerStyle } from './ScrolabarContainer.style';
interface ScrollableContainerProps {
  children: React.ReactNode;
  height?: string;
  width?: string;
}

export const ScrollabarContainer: React.FC<ScrollableContainerProps> = ({ children, height = "400px", width = "100%" }) => {
  return (
    <Box
      sx={getScrollableContainerStyle(width, height)}
    >
      {children}
    </Box>
  );
};