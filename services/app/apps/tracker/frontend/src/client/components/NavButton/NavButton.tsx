import React, { FC } from 'react';
import './index.scss';
import { Button, useTheme } from '@mui/material';

interface IProps {
  children: Array<React.JSX.Element | string>;
}

export const NavButton: FC<IProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Button
      className="nav-button"
      variant="text"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
      }}>
      {children}
    </Button>
  );
};
