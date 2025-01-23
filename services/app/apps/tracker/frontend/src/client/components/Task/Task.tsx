import React, { FC } from 'react';
import './index.scss';
import clsx from 'clsx';
import { ITask } from 'types/taskInterfaces';
import { useTask } from './hooks/useTask';
import { toTimeString } from 'client/utils/date';
import { Box, Card, Typography } from '@mui/material';

interface Props {
  task: ITask;
}

export const Task: FC<Props> = ({ task }) => {
  const { isLaunched, elapsed, last, total, onClick } = useTask(task);

  return (
    <Card variant="outlined" className={clsx('task', isLaunched && 'launched')} onClick={onClick}>
      <Typography className="icon">{task.icon}</Typography>

      <Typography className="name">{task.name}</Typography>

      <Box className="elapsed">
        {isLaunched ? (
          <>
            <Typography component={'span'} className="current">
              {toTimeString(elapsed)}
            </Typography>
          </>
        ) : (
          <>
            <Typography component={'span'} className="total">
              {toTimeString(total)}
            </Typography>

            <Typography component={'span'} className="last">
              {toTimeString(last)}
            </Typography>
          </>
        )}
      </Box>
    </Card>
  );
};
