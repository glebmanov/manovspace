import React, { FC } from 'react';
import { ITarget } from 'types/taskInterfaces';
import { useTarget } from './hooks/useTarget';

interface Props {
  target: ITarget;
}

export const Target: FC<Props> = ({ target }) => {
  const {} = useTarget(target);

  return (
    <div className="target">
      <span></span>
    </div>
  );
};
