import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { ContactsLinkStyle, ContactsStyle } from './Socials.style';
import { Instagram, Telegram, YouTube } from '@mui/icons-material';

export const Socials: React.FC = () => {

  return (
    <Box sx={ContactsStyle}>
      <Box component={Link} to="https://t.me/" sx={ContactsLinkStyle} target="_blank">
        <Telegram fontSize="medium" />
      </Box>

      <Box component={Link} to="https://www.instagram.com/" sx={ContactsLinkStyle} target="_blank">
        <Instagram fontSize="medium" />
      </Box>

      <Box component={Link} to="https://www.youtube.com/" sx={ContactsLinkStyle} target="_blank">
        <YouTube fontSize="medium" />
      </Box>
    </Box>
  );
};