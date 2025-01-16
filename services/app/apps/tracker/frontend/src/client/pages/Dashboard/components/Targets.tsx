import React, { FC } from 'react';
import { Target } from 'client/components/Target';
import { ITarget } from 'types/taskInterfaces';

interface IProps {
  targets: Array<ITarget>;
}

export const Targets: FC<IProps> = ({ targets }) => {
  return (
    <div className="targets">
      <div className="title">Targets</div>

      {targets.map(target => (
        <Target target={target} />
      ))}
    </div>
  );
};
