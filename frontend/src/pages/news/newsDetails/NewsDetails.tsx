import { useParams } from 'react-router-dom';
import { mockNews, type NewsItem } from '@/app/core/api/mocks/mockNews';
import { Box, Typography } from '@mui/material';
import { imageStyle } from './NewsDetails.style';
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper';

export const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();

  const news: NewsItem | undefined = mockNews.find(item => item.id === Number(id));

  if (!news) {
    return <Box sx={{ padding: '24px' }}>Новость не найдена</Box>;
  }

  return (
    <LayoutWrapper>
      <Typography variant="h4" gutterBottom>
        {news.title}
      </Typography>

      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Дата публикации: {news.date}
      </Typography>

      <Box sx={{ overflow: 'hidden' }}>
        <Box
          component="img"
          src={news.image}
          alt={news.title}
          sx={imageStyle}
        />

        {news.description.split('\n\n').map((paragraph, idx) => (
          <Typography key={idx} variant="body1" paragraph>
            {paragraph.trim()}
          </Typography>
        ))}
      </Box>
  </LayoutWrapper>
  );
};
