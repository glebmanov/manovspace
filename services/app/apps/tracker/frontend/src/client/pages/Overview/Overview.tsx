import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const Overview: FC = () => {
  return (
    <Box className="page overview">
      <Box className="header">
        <Box>
          <Typography component="h2" variant="h5">
            Overview
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
