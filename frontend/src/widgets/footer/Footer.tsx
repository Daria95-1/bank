import { contactInfo } from "./const/const";
import { Contacts } from './contactInfo/Contacts';
import { Socials } from './socials/Socials';
import { Link } from "react-router-dom";
import { RoutesConf } from "@/app/core/enums/routes.enums";
import { Box, Typography } from "@mui/material";
import {
  MainFooterStyle,
  LogoStyle,
  ContainerStyle,
  MenuStyle,
  ContentStyle,
} from "./Footer.style"
import { imageApp } from '@/shared/const/image';
import { Navigation } from '../navigation/Navigation';
import { nav_menu } from '@/shared/const/navigation';

export const Footer = () => {
  
  return (
    <Box component="footer" sx={MainFooterStyle}>
      <Box sx={LogoStyle}>
        <Link to={RoutesConf.main}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={imageApp.mainLogo}
            alt="Банк" />
        </Link>
      </Box>

      <Box sx={MenuStyle}>
        <Navigation data={nav_menu} />
      </Box>
        
      <Contacts contacts={contactInfo} />

      <Box sx={ContainerStyle}>
        <Box sx={ContentStyle}>
          <Socials />
          <Typography>© Официальный сайт несуществуещего АО «Банк», 2025</Typography>
        </Box>
      </Box>
    </Box>
  );
};
