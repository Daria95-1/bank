import React from "react";
// import imageApp from '@/shared/const/image';
import { Box, Typography } from '@mui/material';
import { ContainerStyle, TextStyle } from './UnderConstruction.style';

export const UnderConstruction: React.FC = () => {
  return (
    <Box sx={ContainerStyle}>
      {/* <img src={imageApp.underConstruction} alt="" /> */}

      <Typography sx={TextStyle}>
        Извините, данный раздел находится в разработке
      </Typography>
    </Box>
  );
};
