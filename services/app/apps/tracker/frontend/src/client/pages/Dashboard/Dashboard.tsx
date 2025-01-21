import React, { FC } from 'react';
import './index.scss';
import { useDashboard } from './hooks/useDashboard';
import { formattedDate } from 'client/utils/date';
import { Portal, usePortal } from 'client/components/Portal';
import { AddTask } from 'client/containers/AddTask';
import { AddButton } from './components/AddButton';
import { Targets } from './components/Targets';
import { Tasks } from './components/Tasks';

export const Dashboard: FC = () => {
  const { today, targets, tasks } = useDashboard();
  const { isOpen, onOpen, onClose } = usePortal();

  return (
    <div className="page dashboard">
      <div className="header">
        <div>
          <h2>Dashboard</h2>
          <h3>{formattedDate.format(today)}</h3>
        </div>

        <AddButton onOpen={onOpen} />
      </div>

      <Targets targets={targets} />

      <Tasks tasks={tasks} />

      <Portal isOpen={isOpen} onClose={onClose}>
        <AddTask />
      </Portal>
    </div>
  );
};
