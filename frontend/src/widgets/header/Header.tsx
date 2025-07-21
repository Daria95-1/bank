import { LocalStorage } from '@/app/core/services/localStorage.service';
import { useEffect } from 'react';
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { Box } from '@mui/material'
import { Link, NavLink } from "react-router-dom";
import { imageApp } from '@/shared/const/image';
import { Navigation } from '../navigation/Navigation';
import { nav_header } from '@/shared/const/navigation';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AuthStyle, HeaderBoxStyle, HeaderContainerStyle, LinkAvatarStyle, LinkEnterStyle, LinkLogoStyle, Logo } from './Header.style'
import { useGetUserByLoginQuery } from '@/app/core/api/endpoints/api.users';

export const Header = () => {
    const user = LocalStorage.onGetUser();
    const isAuth = Boolean(user);
    const login = user?.login || "";

    const { data: personalInfo } = useGetUserByLoginQuery(login, {
        skip: !login,
    });

    useEffect(() => {
        if (personalInfo && isAuth) {
        LocalStorage.onSetUser(personalInfo);
        }
    }, [personalInfo, isAuth]);

    return (
        <Box component="header" sx={HeaderBoxStyle}>
            <Box sx={HeaderContainerStyle}>
                    <Link to={RoutesConf.main}>
                        <Box
                            sx={Logo}
                            component="img"
                            src={imageApp.mainLogo}
                            alt="Банк"
                        />
                    </Link>


                <Navigation data={nav_header} />

                <Box sx={AuthStyle}>
                    {isAuth ? (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <AccountCircleIcon sx={LinkAvatarStyle} />
                                
                            <KeyboardArrowDownIcon sx={LinkLogoStyle} />
                        </Box>
                    ) : (
                        <Box component={NavLink} sx={LinkEnterStyle} to={RoutesConf.sign_in}>
                            Войти
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};