import { Box } from '@mui/material'
import { Banner } from './banner/Banner'
import { Blocks } from './blocks/Blocks'
import { Calculator } from './calculator/Calculator'

export const Main = () => {
  return (
    <Box>
        <Banner />
        <Blocks />
        <Calculator />
    </Box>
  )
}