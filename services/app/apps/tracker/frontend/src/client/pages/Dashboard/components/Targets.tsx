import React, { FC } from 'react';
import { Target } from 'client/components/Target';
import { ITarget } from 'types/taskInterfaces';
import { Box, Typography } from '@mui/material';

interface IProps {
  targets: Array<ITarget>;
}

export const Targets: FC<IProps> = ({ targets }) => {
  return (
    <Box className="targets">
      <Typography component={'h6'}>Targets</Typography>

      {targets.map(target => (
        <Target target={target} />
      ))}
    </Box>
  );
};
