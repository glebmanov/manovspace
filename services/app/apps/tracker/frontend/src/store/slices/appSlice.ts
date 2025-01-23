import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export type AppState = {
  theme: Themes;
};

const initialState: AppState = {
  theme: Themes.Light,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Themes>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export const selectTheme = (state: RootState) => state.app.theme;
