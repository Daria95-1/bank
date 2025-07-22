import type { SyntheticEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import type { To } from "react-router-dom";
import { Box } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { StyledLink } from "./BackLink.styled";

interface BackLinkProps {
  linkTo?: To; 
  navigateBack?: () => void;
}

export const BackLink: React.FC<BackLinkProps> = ({
  linkTo,
  navigateBack,
}) => {
  const navigate = useNavigate();

  const handlePageBack = (e: SyntheticEvent) => {
    if (navigateBack) {
      e.preventDefault();
      navigateBack();
    } else if (!linkTo) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <Box
    sx={StyledLink}
      component={RouterLink}
      to={linkTo || ".."}
      onClick={handlePageBack}
    >
      <FirstPageIcon /> Назад
    </Box>
  );
};
