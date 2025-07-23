import { Container, Box } from "@mui/material";
import ScrollableContainer from "../../../shared/ui/scrollConteiner/scrolableContainer";
import { containerStyle, itemStyle, blockQuestionStyle, questionStyle, answerStyle } from "./CardDescription.style";
import { dataInfoProduct, mockProductInfo } from '@/app/core/api/mocks/mockCreditCardProducts';

export const CardDescription: React.FC = () => {
  if (!dataInfoProduct || dataInfoProduct.length === 0) return <Box>Нет доступных данных</Box>;

  return (
    <Container>
      <Box sx={containerStyle}>
        {dataInfoProduct.map((item, index) => (
          <Box key={index} sx={itemStyle}>
            {item}
          </Box>
        ))}
      </Box>

      <ScrollableContainer>
        <Box >
          {mockProductInfo.map((item) => (
            <Box key={item.id} sx={blockQuestionStyle}>
              <Box sx={questionStyle}>{item.question}</Box>
              
              <Box sx={answerStyle}>{item.answer}</Box>
            </Box>
          ))}
        </Box>
      </ScrollableContainer>
    </Container>
  );
};