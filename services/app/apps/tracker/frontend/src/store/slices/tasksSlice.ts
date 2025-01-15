import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ITarget, ITask, ITaskDuration } from 'types/taskInterfaces';

export type TasksState = {
  tasks: { [id: string]: ITask };
  targets: { [id: string]: ITarget };
};

const initialState: TasksState = {
  tasks: {
    '1': {
      id: '1',
      name: 'name',
      icon: 'icon',
      description: 'description',
      duration: {
        start: new Date(),
        end: new Date(),
        last: 0,
        total: 0,
      },
    },
  },
  targets: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTaskDuration(state, action: PayloadAction<{ id: string; duration: ITaskDuration }>) {
      const { id, duration } = action.payload;

      state.tasks[id].duration = duration;
    },
  },
});

export const { setTaskDuration } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectAllTargets = (state: RootState) => state.tasks.targets;
