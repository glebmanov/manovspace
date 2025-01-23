import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectTheme, setTheme, Themes } from 'store/slices/appSlice';
import { Box, Typography, FormControlLabel, Switch } from '@mui/material';

export const Settings: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const onChange = () => dispatch(setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light));

  return (
    <Box className="page settings">
      <Box className="header">
        <Box>
          <Typography component="h2" variant="h5">
            Settings
          </Typography>
        </Box>
      </Box>

      <Box>
        <FormControlLabel
          control={<Switch checked={theme === Themes.Dark} onChange={onChange} color="default" />}
          label={'Dark mode'}
        />
      </Box>
    </Box>
  );
};
