import React, { FC } from 'react';
import './index.scss';
import AddTracker from 'assets/icons/add.svg';
import { useDashboard } from './hooks/useDashboard';
import { Date } from 'client/utils/date';
import { Target } from 'client/components/Target';
import { Task } from 'client/components/Task';

export const Dashboard: FC = () => {
  const { today, targets, tasks } = useDashboard();

  return (
    <div className="page dashboard">
      <div className="header">
        <div>
          <h2>Dashboard</h2>
          <h3>{Date.format(today)}</h3>
        </div>

        <button>
          <AddTracker />
        </button>
      </div>

      <div className="targets">
        <div className="title">Targets</div>

        {targets.map(target => (
          <Target target={target} />
        ))}
      </div>

      <div className="tasks">
        <div className="title">Tasks</div>

        {tasks.map(task => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};
