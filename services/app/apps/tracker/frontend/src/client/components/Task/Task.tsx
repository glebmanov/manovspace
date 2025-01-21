import React, { FC } from 'react';
import './index.scss';
import clsx from 'clsx';
import { ITask } from 'types/taskInterfaces';
import { useTask } from './hooks/useTask';
import { toTimeString } from 'client/utils/date';

interface Props {
  task: ITask;
}

export const Task: FC<Props> = ({ task }) => {
  const { isLaunched, elapsed, last, total, onClick } = useTask(task);

  return (
    <div className={clsx('task', isLaunched && 'launched')} onClick={onClick}>
      <div className="icon">{task.icon}</div>
      <div className="name">{task.name}</div>
      <div className="elapsed">
        {isLaunched ? (
          <>
            <span className="current">{toTimeString(elapsed)}</span>
          </>
        ) : (
          <>
            <span className="total">{toTimeString(total)}</span>

            <span className="last">{toTimeString(last)}</span>
          </>
        )}
      </div>
    </div>
  );
};
