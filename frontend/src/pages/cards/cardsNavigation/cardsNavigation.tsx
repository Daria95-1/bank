import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { sectionStyle } from './cardsNavigation.style';
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { CARD_TYPES, NAVIGATION_ITEMS, type CardType } from '../const/const';
import { ButtonSubmitMain } from '@/shared/ui/buttonSubmitMain/ButtonSubmitMain';

type ProductNavigationProps = {
  onHandleChange: (type: CardType) => void;
};

export const CardsNavigation: React.FC<ProductNavigationProps> = ({ onHandleChange }) => {
  const [activeItem, setActiveItem] = useState<CardType>(CARD_TYPES.ALL);
  const navigate = useNavigate();

  const handleItemClick = (item: CardType) => {
    setActiveItem(item);
    onHandleChange(item);
    navigate(`/${RoutesConf.cards}`);
  };

  return (
    <Box
      component="section"
      sx={sectionStyle}
    >
      {NAVIGATION_ITEMS.map((item) => (
        <ButtonSubmitMain
          key={item.value}
          active={activeItem === item.value}
          onClick={() => handleItemClick(item.value)}
        >
          {item.label}
        </ButtonSubmitMain>
      ))}
    </Box>
  );
};