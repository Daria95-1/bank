import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'
import { DepositNavigation } from './depositsNavigation/depositsNavigation'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { Deposit } from './deposit/Deposit';
import { mockInfoAboutAllDeposits } from '@/app/core/api/mocks/mockDeposits';
import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle';

export const AllDeposits = () => {
    const [data, setData] = useState(mockInfoAboutAllDeposits);
    const navigate = useNavigate()

      const handleClick = (type: string) => {
        if (type === 'ALL') {
          setData(mockInfoAboutAllDeposits);
        } else {
          setData(mockInfoAboutAllDeposits.filter((item) => item.typeDeposit === type));
        }
    };

    const handleGetInfo = (id: string): void => {
      navigate(`${RoutesConf.deposit_details}/${id}`);
    };
    
    return (
        <LayoutWrapper>
            <DynamicTitle text="Вклады" />

            <DepositNavigation onHandleChange={handleClick} />

            <Deposit deposits={data} onChooseDeposit={handleGetInfo} />
                  
            <Outlet />
        </LayoutWrapper>
    )
}