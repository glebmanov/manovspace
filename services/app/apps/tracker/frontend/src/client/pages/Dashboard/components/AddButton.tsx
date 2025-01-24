import React, { FC } from 'react';
import Add from 'assets/icons/add.svg';
import { IconButton } from '@mui/material';

interface IProps {
  onOpen: () => void;
}

export const AddButton: FC<IProps> = ({ onOpen }) => {
  return (
    <IconButton className="add-button" aria-label="add" onClick={onOpen}>
      <Add />
    </IconButton>
  );
};
