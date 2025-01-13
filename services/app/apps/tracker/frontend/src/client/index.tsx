import React, { FC, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';

export const App: FC = () => {
  const Dashboard = lazy(() => import('./pages/Dashboard'));
  const Overview = lazy(() => import('./pages/Overview'));
  const Profile = lazy(() => import('./pages/Profile'));
  const Settings = lazy(() => import('./pages/Settings'));
  const NoPage = lazy(() => import('./pages/NoPage'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
