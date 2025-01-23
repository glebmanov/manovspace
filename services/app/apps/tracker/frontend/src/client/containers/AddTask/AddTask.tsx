import React, { FC } from 'react';
import './index.scss';
import { useAddTask } from './hooks/useAddTask';

interface Props {
  onClose: () => void;
}

export const AddTask: FC<Props> = ({ onClose }) => {
  const { name, onChangeName, description, onChangeDescription } = useAddTask();

  return (
    <div className="add-task">
      <div className="header">
        <span>Task </span>
      </div>

      <div>
        <span>Name</span>

        <input type="text" value={name} onChange={onChangeName} />
      </div>

      <div>
        <span>Description</span>

        <input type="text" value={description} onChange={onChangeDescription} />
      </div>

      <button onClick={onClose}>Cancel</button>
    </div>
  );
};
