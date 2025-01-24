import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';
import Dashboard from 'assets/icons/dashboard.svg';
import Overview from 'assets/icons/stats.svg';
import Profile from 'assets/icons/user.svg';
import Settings from 'assets/icons/settings.svg';
import { NavButton } from 'client/components/NavButton';
import { Box } from '@mui/material';

export const MainLayout: FC = () => {
  return (
    <Box className="main-layout">
      <Box component="main">
        <Outlet />
      </Box>

      <Box component="nav">
        <NavLink to="dashboard">
          <NavButton>
            <Dashboard />
            Dashboard
          </NavButton>
        </NavLink>

        <NavLink to="overview">
          <NavButton>
            <Overview />
            Overview
          </NavButton>
        </NavLink>

        <NavLink to="profile">
          <NavButton>
            <Profile />
            Profile
          </NavButton>
        </NavLink>

        <NavLink to="settings">
          <NavButton>
            <Settings />
            Settings
          </NavButton>
        </NavLink>
      </Box>
    </Box>
  );
};
