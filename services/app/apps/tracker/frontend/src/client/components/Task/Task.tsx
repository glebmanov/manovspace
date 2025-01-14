import React, { FC } from 'react';
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
      <span>{task.icon}</span>
      <span>{task.name}</span>
      <span>{period}</span>
    </div>
  );
};
