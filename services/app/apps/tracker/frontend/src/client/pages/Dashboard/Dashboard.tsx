import React, { FC } from 'react';
import './index.scss';
import { useDashboard } from './hooks/useDashboard';
import { formattedDate } from 'client/utils/date';
import { Portal, usePortal } from 'client/components/Portal';
import { AddTask } from 'client/containers/AddTask';
import { AddButton } from './components/AddButton';
import { Targets } from './components/Targets';
import { Tasks } from './components/Tasks';
import { Box, Typography } from '@mui/material';

export const Dashboard: FC = () => {
  const { today, targets, tasks } = useDashboard();
  const { isOpen, onOpen, onClose } = usePortal();

  return (
    <Box className="page dashboard">
      <Box className="header">
        <Box>
          <Typography component="h2" variant="h5">
            Dashboard
          </Typography>

          <Typography component="h3" variant="h6">
            {formattedDate.format(today)}
          </Typography>
        </Box>

        <AddButton onOpen={onOpen} />
      </Box>

      <Targets targets={targets} />

      <Tasks tasks={tasks} />

      <Portal isOpen={isOpen}>
        <AddTask onClose={onClose} />
      </Portal>
    </Box>
  );
};
