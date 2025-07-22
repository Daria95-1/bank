import type { ReactNode } from "react";
import { Box } from "@mui/material";
import {
  WrapperStyle,
  ContentStyle,
  HeaderRowStyle,
  BackLinkWrapperStyle
} from "./LayoutWrapper.style"
import { BackLink } from '../backLink/BackLink';

type LayoutWrapperProps = {
  children: ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <Box sx={WrapperStyle}>
      <Box sx={ContentStyle}>

        <Box sx={HeaderRowStyle}>
          <Box sx={BackLinkWrapperStyle}>
            <BackLink />
          </Box>
        </Box>

        {children}
      </Box>
    </Box>
  );
};