import { Box } from '@mui/material';
import { ContactsLinkStyle, ContactsStyle, IconStyle } from './Contacts.style';
import type { contactInfoProps } from '@/app/core/models/nav.models';

type ContactsProps = {
  contacts: contactInfoProps[];
}

export const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <Box sx={ContactsStyle}>
      {contacts.map(({ icon: Icon, description, id }) => (
        <Box key={id} sx={ContactsLinkStyle}>
          <Icon sx={IconStyle} />
          <Box>{description}</Box>
        </Box>
      ))}
    </Box>
  );
};
