import React, { FC, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectTheme } from 'store/slices/appSlice';
import { MainLayout } from './layouts';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NoPage from './pages/NoPage';

export const App: FC = () => {
  const mode = useAppSelector(selectTheme);
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
      </BrowserRouter>
    </ThemeProvider>
  );
};
