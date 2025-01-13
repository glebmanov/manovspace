import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <div className="content">
        <Outlet />
      </div>

      <nav>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
    </div>
  );
};
