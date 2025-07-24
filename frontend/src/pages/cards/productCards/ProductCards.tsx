import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { useLocation, useNavigate } from "react-router-dom";
import { CardDriverStyle, CardInformationStyle, CardOfferStyle, InfoAndButtonsStyle } from "./ProductCards.style";
import { ItemTitle } from '@/shared/ui/itemTitle/ItemTitle';
import type { PersonalCard } from '@/app/core/models/cards.models';
import { CreditCard } from '../creditCard/CreditCard';
import { DynamicItemInfo } from '@/shared/ui/dynamicItemInfo/DynamicItemInfo';
import { ButtonSubmitSecondary } from '@/shared/ui/buttons/buttonSubmitSecondary/ButtonSubmitSecondary';
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient';

type ProductCardsProps = {
  products: PersonalCard[];
  onChooseCard: (itemId: string) => void;
};

export const ProductCards: React.FC<ProductCardsProps> = ({ products, onChooseCard }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState("подробнее");

  useEffect(() => {
    if (location.pathname === `/${RoutesConf.cards}`) {
      setButtonText("подробнее");
    }
  }, [location.pathname]);

  const handleClick = (itemId: string) => {
    if (buttonText === "подробнее") {
      setButtonText("скрыть");
      onChooseCard(itemId);
    } else {
      setButtonText("подробнее");
      navigate(`/${RoutesConf.cards}`);
    }
  };

  return (
    <>
      {products.map((item: PersonalCard) => (
        <Box key={item.cardId} sx={CardOfferStyle}>
          <CreditCard card={item} />

          <Box sx={InfoAndButtonsStyle}>
            <Box>
              <ItemTitle mainText={item.productType === "CREDIT" ? "Кредитная" : "Дебетовая"} secondaryText={` карта ${item.productName}`} />

              <Box key={item.cardId} sx={CardInformationStyle}>
                <DynamicItemInfo value="99 ₽/мес." description='стоимость обслуживания' />

                <DynamicItemInfo value={item.paymentSystem} description='платежная система' />
                
                <DynamicItemInfo value={`${item.accountBalance} ₽`} description='платежи и наличные' />
              </Box>
            </Box>

            <Box key={item.cardId} sx={CardDriverStyle}>
              <ButtonSubmitSecondary
                valid={true}
                width="auto"
                onClick={() => handleClick(item.numberCard)}
              >
                {buttonText}
              </ButtonSubmitSecondary>

              <ButtonGradient to={RoutesConf.under_construction} label="Заказать карту" />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
