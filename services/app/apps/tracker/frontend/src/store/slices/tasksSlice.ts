import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ITarget, ITask } from 'types/taskInterfaces';

export type TasksState = {
  tasks: { [id: string]: ITask };
  targets: { [id: string]: ITarget };
};

const initialState: TasksState = {
  tasks: {},
  targets: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export const {} = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectAllTargets = (state: RootState) => state.tasks.targets;
