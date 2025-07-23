import { Box, Typography } from "@mui/material";
import {
  containerStyle,
  typeLogoContainerStyle,
  typeTextStyle,
  accNumStyle,
  dateStyle,
  chipStyle,
  paymentSystemStyle,
  bankLogoStyle,
  NameStyle,
  NumAndDataStyle,
} from "./CreditCard.style";
import type { PersonalCard } from '@/app/core/models/cards.models';
import { cardColor } from '@/app/core/api/mocks/mockCreditCardProducts';
import { imageApp } from '@/shared/const/image';

export const CreditCard: React.FC<{ card: PersonalCard }> = ({ card }) => {
  const date = card.dateExpire.match(/.{10}/);
  const background = cardColor[card.productName] || "#4C4F58";

  return (
    <Box sx={containerStyle(background)}>
      <Box sx={typeLogoContainerStyle}>
        <Typography sx={typeTextStyle}>{card.productName}</Typography>
        <Box component="img" src={imageApp.littleLogo} sx={bankLogoStyle} />
      </Box>

      <Box sx={NumAndDataStyle}>
        <Box sx={accNumStyle}>{card.numberCard}</Box>
        <Box sx={dateStyle}>{date}</Box>
      </Box>

      <Box sx={NameStyle}>Ivanov Ivan</Box>

      <Box sx={chipStyle}>
        <Box component="img" src={imageApp.chip} />
      </Box>

      <Box sx={paymentSystemStyle}>
        <Box
            component="img"
            src={card.paymentSystem === "VISA" ? imageApp.visa : imageApp.mir}
          />
        </Box>
    </Box>
  );
};