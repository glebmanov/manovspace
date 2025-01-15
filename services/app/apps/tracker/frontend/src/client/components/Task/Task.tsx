import React, { FC } from 'react';
import './index.scss';
import clsx from 'clsx';
import { ITask } from 'types/taskInterfaces';
import { useTask } from './hooks/useTask';

interface Props {
  task: ITask;
}

export const Task: FC<Props> = ({ task }) => {
  const { isLaunched, period, onClick } = useTask(task);

  return (
    <div className={clsx('task', isLaunched && 'launched')} onClick={onClick}>
      <div className="icon">{task.icon}</div>
      <div className="name">{task.name}</div>
      <div className="period">{period}</div>
    </div>
  );
};
