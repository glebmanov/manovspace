import { useEffect, useRef, useState } from 'react';

export const useStopWatch = (onStartCallback?: () => void, onStopCallback?: (elapsed: number) => void) => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalId = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (isLaunched) {
      intervalId.current = setInterval(() => setElapsed(elapsed => elapsed + 1), 1000);
    } else {
      intervalId.current && clearInterval(intervalId.current);
    }

    return () => {
      intervalId.current && clearInterval(intervalId.current);
    };
  }, [isLaunched, elapsed]);

  const onStart = () => {
    setIsLaunched(true);

    onStartCallback && onStartCallback();
  };

  const onStop = () => {
    setIsLaunched(false);
    setElapsed(0);

    onStopCallback && onStopCallback(elapsed);
  };

  return { isLaunched, elapsed, onToggle: isLaunched ? onStop : onStart };
};
