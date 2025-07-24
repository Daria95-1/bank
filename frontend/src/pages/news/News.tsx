import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle'
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'
import { Box } from '@mui/material'
import { containerStyle } from './News.style'
import { mockNews } from '@/app/core/api/mocks/mockNews'
import { NewsCard } from './newsCard/NewsCard'

export const News = () => {
    return (
        <LayoutWrapper>
            <DynamicTitle mainText="Наши " secondaryText='новости' />

            <Box sx={containerStyle}>
                {mockNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </Box>
        </LayoutWrapper>
    )
}