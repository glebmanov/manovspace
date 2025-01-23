import React, { FC } from 'react';
import './index.scss';
import { Button } from '@mui/material';

interface IProps {
  children: Array<React.JSX.Element | string>;
}

export const NavButton: FC<IProps> = ({ children }) => {
  return (
    <Button
      className="nav-button"
      variant="text"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </Button>
  );
};
