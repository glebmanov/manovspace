import React, { FC } from 'react';
import { Task } from 'client/components/Task';
import { ITask } from 'types/taskInterfaces';

interface IProps {
  tasks: Array<ITask>;
}

export const Tasks: FC<IProps> = ({ tasks }) => {
  return (
    <div className="tasks">
      <div className="title">Tasks</div>

      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};
