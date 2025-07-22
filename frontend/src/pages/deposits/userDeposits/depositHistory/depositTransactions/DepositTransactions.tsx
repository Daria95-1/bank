import { Box } from '@mui/material';
import { DateStyle, ItemStyle, MoneyStyle, OperationStyle } from './DepositTransactions.style';
import type { TransactionProps } from '@/pages/deposits/const/const';

export const DepositTransactions: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <>
      {transactions.map((item, index) => (
        <Box key={index} sx={OperationStyle}>
          <Box sx={DateStyle}>{item.date}</Box>

          {item.transactions.map((tx, idx) => {
            const isDebit = tx.type === 'DEBIT';

            return (
              <Box key={idx} sx={ItemStyle}>
                <Box>{isDebit ? 'Пополнение' : 'Списание'}</Box>

                <Box sx={MoneyStyle(isDebit)}>
                  <Box>{tx.amount}</Box>

                  <Box>{tx.currency}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ))}
    </>
  );
};
