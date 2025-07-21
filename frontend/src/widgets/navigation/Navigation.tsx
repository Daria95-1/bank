
import type { FC } from 'react';
import type { NavModel } from '@/app/core/models/nav.models';
import { NavLink, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { navLinkStyle, navListStyle } from './Navigation.style';

type LinksProps = {
  data: NavModel[];
  linkColor?: string;
};

export const Navigation: FC<LinksProps> = ({ data, linkColor }) => {
  const location = useLocation();
  const currentPath = location.pathname + location.search;

  return (
    <List sx={navListStyle} component="nav">
      {data.map(({ name, url, id }) => {
        const isActive = currentPath === url;

        return (
          <ListItem key={id} disablePadding>
            <Link
              component={NavLink}
              to={url}
              sx={navLinkStyle(isActive, linkColor)}
              underline="none"
            >
              {name}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
