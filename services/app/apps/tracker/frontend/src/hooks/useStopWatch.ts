import { useEffect, useRef, useState } from 'react';

export const useStopWatch = (onStartCallback?: () => void, onStopCallback?: (period: number) => void) => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [period, setPeriod] = useState(0);
  const intervalId = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (isLaunched) {
      intervalId.current = setInterval(() => setPeriod(period => period + 1), 1000);
    } else {
      intervalId.current && clearInterval(intervalId.current);
    }

    return () => {
      intervalId.current && clearInterval(intervalId.current);
    };
  }, [isLaunched, period]);

  const onStart = () => {
    setIsLaunched(true);

    onStartCallback && onStartCallback();
  };

  const onStop = () => {
    setIsLaunched(false);

    onStopCallback && onStopCallback(period);
  };

  return { isLaunched, period, onToggle: isLaunched ? onStop : onStart };
};
