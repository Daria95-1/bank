import { LocalStorage } from '@/app/core/services/localStorage.service';
import { useEffect, useState } from 'react';
import { RoutesConf } from '@/app/core/enums/routes.enums';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { imageApp } from '@/shared/const/image';
import { Navigation } from '../navigation/Navigation';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AuthStyle, HeaderBoxStyle, HeaderContainerStyle, LinkAvatarStyle, LinkLogoStyle, Logo } from './Header.style';
import { useGetUserByLoginQuery } from '@/app/core/api/endpoints/api.users';
import { menuItems } from './const/const';
import { useDeleteSessionMutation } from '@/app/core/api/endpoints/api.sessions';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/app/core/redux/store';
import { logoutUser } from '@/app/core/redux/slice/userSlice';
import { nav_menu } from '@/shared/const/navigation';
import { ButtonGradient } from '@/shared/ui/buttons/buttonGradient/ButtonGradient';

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user);
    const isAuth = Boolean(user?.id);
    const login = user?.login || '';
    const sessionId = user?.sessionId

  const { data: personalInfo } = useGetUserByLoginQuery(login, {
    skip: !login,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [deleteSession] = useDeleteSessionMutation();

  useEffect(() => {
    if (personalInfo && isAuth && sessionId !== undefined && sessionId !== null) {
      const updatedUser = {
        ...personalInfo,
        sessionId: typeof sessionId === 'string' ? parseInt(sessionId, 10) : sessionId,
      };

      LocalStorage.onSetUser(updatedUser);
    }
  }, [personalInfo, isAuth, sessionId]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    if (sessionId !== undefined) {
      try {
        await deleteSession(sessionId).unwrap();
      } catch (error) {
        console.error('Ошибка при удалении сессии:', error);
      }
    }
      
    dispatch(logoutUser());
    handleMenuClose();
    navigate(`/${RoutesConf.sign_in}`);
  };

  const handleNavigate = (route: string) => {
    handleMenuClose();
    navigate(route);
  };

  const handleRedirect = () => {
    navigate(`/${RoutesConf.sign_in}`)
  }

  return (
    <Box component="header" sx={HeaderBoxStyle}>
      <Box sx={HeaderContainerStyle}>
        <Link to={RoutesConf.main}>
          <Box sx={Logo} component="img" src={imageApp.mainLogo} alt="Банк" />
        </Link>

        <Navigation data={nav_menu} />

        <Box sx={AuthStyle}>
          {isAuth ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountCircleIcon sx={LinkAvatarStyle} />
                <IconButton onClick={handleMenuOpen} sx={{ color: 'background.paper' }}>
                  <KeyboardArrowDownIcon sx={LinkLogoStyle} />
                </IconButton>
              </Box>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      if (item.action === 'logout') {
                        handleLogout();
                      } else {
                        handleNavigate(item.route);
                      }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
              <ButtonGradient onClick={handleRedirect} label="Войти" />
          )}
        </Box>
      </Box>
    </Box>
  );
};
