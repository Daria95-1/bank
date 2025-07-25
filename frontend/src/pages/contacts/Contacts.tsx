import { DynamicTitle } from '@/shared/ui/dynamicTitle/DynamicTitle'
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'
import { Box } from '@mui/material'
import { bankBranches } from './const/const'
import { branchAddressStyle, branchContactStyle, branchesListStyle, branchItemStyle, branchNameStyle, containerStyle, mapContainerStyle } from './Contacts.style'
import YandexMapComponent from './map/YandexMap'

export const Contacts = () => {
    const [mainOffice, ...otherBranches] = bankBranches;

    return (
        <LayoutWrapper>
            <DynamicTitle mainText="Как нас " secondaryText='найти' />

            <Box sx={containerStyle}>
                <Box sx={branchesListStyle}>
                    <Box sx={branchItemStyle}>
                        <Box sx={{ fontWeight: 'bold', fontSize: 18 }}>{mainOffice.name}</Box>
                        <Box sx={branchAddressStyle}>{mainOffice.address}</Box>
                        <Box sx={branchContactStyle}>Телефон: {mainOffice.phone}</Box>
                        {mainOffice.email && <Box sx={branchContactStyle}>Почта: {mainOffice.email}</Box>}
                    </Box>

                    {otherBranches.map((branch) => (
                        <Box key={branch.name} sx={branchItemStyle}>
                        <Box sx={branchNameStyle}>{branch.name}</Box>
                        <Box sx={branchAddressStyle}>{branch.address}</Box>
                        <Box sx={branchContactStyle}>Телефон: {branch.phone}</Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={mapContainerStyle}>
                    <YandexMapComponent data={bankBranches} />
                </Box>
            </Box>
        </LayoutWrapper>
    )
}