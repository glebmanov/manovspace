import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';
import Dashboard from '../../assets/icons/stats.svg';
import Overview from '../../assets/icons/clock.svg';
import Profile from '../../assets/icons/user.svg';
import Settings from '../../assets/icons/settings.svg';

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <main>
        <Outlet />
      </main>

      <nav>
        <NavLink to="dashboard">
          <div>
            <Dashboard fill={'#9cbfba'} />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink to="overview">
          <div>
            <Overview fill={'#9cbfba'} />
            <span>Overview</span>
          </div>
        </NavLink>

        <NavLink to="profile">
          <div>
            <Profile fill={'#9cbfba'} />
            <span>Profile</span>
          </div>
        </NavLink>

        <NavLink to="settings">
          <div>
            <Settings fill={'#9cbfba'} />
            <span>Settings</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
