import { Box } from '@mui/material';
import {
  cardStyle,
  imageStyle,
  contentStyle,
  titleStyle,
  dateStyle,
  descStyle,
} from './NewsCard.style';
import type { NewsItem } from '@/app/core/api/mocks/mockNews';
import { useNavigate } from 'react-router-dom';
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { ButtonSubmit } from '@/shared/ui/buttons/buttonSubmit/ButtonSubmit';

export const NewsCard = ({ news }: { news: NewsItem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${RoutesConf.news}/${RoutesConf.news_details}/${news.id}`)
  };

  return (
    <Box sx={cardStyle}>
        <Box
            component="img"
            src={news.image}
            alt={news.title}
            sx={imageStyle}
        />
          
        <Box sx={contentStyle}>
            <Box sx={titleStyle}>{news.title}</Box>
            <Box sx={dateStyle}>{news.date}</Box>
            <Box sx={descStyle}>{news.description}</Box>
            <ButtonSubmit onClick={handleClick}>Читать далее</ButtonSubmit>
        </Box>
    </Box>
  );
};
