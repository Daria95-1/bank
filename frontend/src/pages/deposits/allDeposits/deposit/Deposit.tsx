import { RoutesConf } from '@/app/core/enums/routes.enums';
import { ItemTitle } from '@/shared/ui/itemTitle/ItemTitle';
import { Box } from '@mui/material';
import { DepositDriverStyle, DepositInformationStyle, DepositOfferStyle, InfoAndButtonsStyle } from './Deposit.style';
import { DynamicItemInfo } from '@/shared/ui/dynamicItemInfo/DynamicItemInfo';
import type { PersonalDeposit } from '@/app/core/models/deposits.models';
import { ButtonSubmitSecondary } from '@/shared/ui/buttons/buttonSubmitSecondary/ButtonSubmitSecondary';
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient';

type DepositsProps = {
  deposits: PersonalDeposit[];
  onChooseDeposit: (itemId: string) => void;
};

export const Deposit: React.FC<DepositsProps> = ({ deposits, onChooseDeposit }) => {
  return (
    <>
      {deposits.map((item: PersonalDeposit) => (
        <Box key={item.depositId} sx={DepositOfferStyle}>
          <Box sx={InfoAndButtonsStyle}>
            <Box>
              <ItemTitle mainText={item.mainTitle} secondaryText={item.title} />

              <Box sx={DepositInformationStyle}>
                <DynamicItemInfo value='' description={item.description} />
                          
                <DynamicItemInfo value={item.period} description='срок вклада' />

                <DynamicItemInfo value={item.amount} description='Минимальная сумма' />
                
                <DynamicItemInfo value={`${item.interestRate} ₽`} description='Процентная ставка по вкладу' />
              </Box>
            </Box>

            <Box sx={DepositDriverStyle}>
              <ButtonSubmitSecondary
                width="auto"
                valid={true}
                onClick={() => onChooseDeposit(item.depositId)}
              >
                Подробные условия
              </ButtonSubmitSecondary>

              <ButtonGradient to={RoutesConf.under_construction} label="Открыть" />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};