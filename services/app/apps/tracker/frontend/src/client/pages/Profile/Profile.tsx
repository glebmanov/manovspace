import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const Profile: FC = () => {
  return (
    <Box className="page profile">
      <Box className="header">
        <Box>
          <Typography component="h2" variant="h5">
            Profile
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
