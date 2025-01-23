import React, { FC } from 'react';
import { Task } from 'client/components/Task';
import { ITask } from 'types/taskInterfaces';
import { Box, Typography } from '@mui/material';

interface IProps {
  tasks: Array<ITask>;
}

export const Tasks: FC<IProps> = ({ tasks }) => {
  return (
    <Box className="tasks">
      <Typography component={'h6'}>Tasks</Typography>

      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
    </Box>
  );
};
