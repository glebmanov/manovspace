import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';
import Dashboard from 'assets/icons/dashboard.svg';
import Overview from 'assets/icons/stats.svg';
import Profile from 'assets/icons/user.svg';
import Settings from 'assets/icons/settings.svg';

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <main>
        <Outlet />
      </main>

      <nav>
        <NavLink to="dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
          <div>
            <Dashboard />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink to="overview" className={({ isActive }) => (isActive ? 'active' : '')}>
          <div>
            <Overview />
            <span>Overview</span>
          </div>
        </NavLink>

        <NavLink to="profile" className={({ isActive }) => (isActive ? 'active' : '')}>
          <div>
            <Profile />
            <span>Profile</span>
          </div>
        </NavLink>

        <NavLink to="settings" className={({ isActive }) => (isActive ? 'active' : '')}>
          <div>
            <Settings />
            <span>Settings</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
