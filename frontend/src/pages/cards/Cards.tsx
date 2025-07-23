import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { mockCreditCardProducts } from '@/app/core/api/mocks/mockCreditCardProducts';
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle';
import { CardsNavigation } from './cardsNavigation/cardsNavigation';
import { ProductCards } from './productCards/ProductCards';
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper';

export const Cards = () => {
  const [data, setData] = useState(mockCreditCardProducts);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (type: string) => {
    if (type !== "Все карты") {
      setData(mockCreditCardProducts.filter((item) => item.productType === type));
    } else {
      setData(mockCreditCardProducts);
    }
  };

  const handleGetInfo = (id: string): void => {
    setData(mockCreditCardProducts.filter((item) => item.numberCard === id));
    
    if (location.pathname === `/${RoutesConf.cards}`) {
      navigate(`${location.pathname}/card`);
    } else {
      navigate(`/${RoutesConf.cards}`);
    }
  };

  return (
    <LayoutWrapper>
      <DynamicTitle text="Карточные " whiteText="продукты" />

      <CardsNavigation onHandleChange={handleClick} />

      <ProductCards products={data} onChooseCard={handleGetInfo} />
      
      <Outlet />
    </LayoutWrapper>
  );
};
