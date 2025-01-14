import React, { FC } from 'react';
import { useDashboard } from './hooks/useDashboard';
import { Date } from 'client/utils/date';
import { Target } from 'client/components/Target';
import { Task } from 'client/components/Task';

export const Dashboard: FC = () => {
  const { today, targets, tasks } = useDashboard();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <h3>{Date.format(today)}</h3>

      <div className="targets">
        {targets.map(target => (
          <Target target={target} />
        ))}
      </div>

      <div className="tasks">
        {tasks.map(task => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};
