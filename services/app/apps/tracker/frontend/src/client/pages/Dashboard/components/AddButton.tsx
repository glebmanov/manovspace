import React, { FC } from 'react';
import Add from 'assets/icons/add.svg';

interface IProps {
  onOpen: () => void;
}

export const AddButton: FC<IProps> = ({ onOpen }) => {
  return (
    <button type="button" className="add-button" onClick={onOpen}>
      <Add />
    </button>
  );
};
