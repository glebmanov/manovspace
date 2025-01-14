import { useAppSelector } from 'hooks';
import { selectAllTargets, selectAllTasks } from 'store/slices/tasksSlice';

export const useDashboard = () => {
  const targets = useAppSelector(selectAllTargets);
  const tasks = useAppSelector(selectAllTasks);

  const today = new Date();

  return { today, targets: Object.values(targets), tasks: Object.values(tasks) };
};
