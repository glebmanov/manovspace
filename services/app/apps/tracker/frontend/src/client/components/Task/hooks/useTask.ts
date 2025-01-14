import { useStopWatch } from 'hooks';
import { ITask } from 'types/taskInterfaces';

export const useTask = (task: ITask) => {
  const onStart = () => {};

  const onStop = () => {};

  const { isLaunched, period, onToggle } = useStopWatch(onStart, onStop);

  const onClick = () => {
    onToggle();
  };

  return { isLaunched, period, onClick };
};
