import React from "react";
import { Box, Button, Typography } from '@mui/material';
import { EmptyContentWrapperStyle, AddButtonStyle} from "./EmptyContent.style"

type EmptyStateProps = {
  line1: string;
  line2: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

export const EmptyContent: React.FC<EmptyStateProps> = ({ line1, line2, buttonLabel, onButtonClick }) => {
  
  return (
    <Box sx={EmptyContentWrapperStyle}>
      <Typography>{line1}</Typography>

      <Typography>{line2}</Typography>

      {buttonLabel && onButtonClick && (
        <Button  sx={AddButtonStyle} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};
