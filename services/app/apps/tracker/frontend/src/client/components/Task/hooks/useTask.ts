import { useAppDispatch, useStopWatch } from 'hooks';
import { setTaskDuration } from 'store/slices/tasksSlice';
import { ITask } from 'types/taskInterfaces';

export const useTask = ({ id, duration }: ITask) => {
  const dispatch = useAppDispatch();

  const { start, end, last, total } = duration;

  const onStart = () => {
    dispatch(
      setTaskDuration({
        id,
        duration: { start: new Date(), end, last, total },
      }),
    );
  };

  const onStop = (elapsed: number) => {
    dispatch(
      setTaskDuration({
        id,
        duration: { start, end: new Date(), last: elapsed, total: total + elapsed },
      }),
    );
  };

  const { isLaunched, elapsed, onToggle } = useStopWatch(onStart, onStop);

  const onClick = () => {
    onToggle();
  };

  return { isLaunched, elapsed, last, total, onClick };
};
