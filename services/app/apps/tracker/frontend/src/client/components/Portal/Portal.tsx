import React, { FC, JSX, memo } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

interface Props {
  children: JSX.Element;
  isOpen: boolean;
}

export const Portal: FC<Props> = memo(({ children, isOpen }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="portal-wrapper">
            <div className="portal">{children}</div>
          </div>,
          document.body,
        )}
    </>
  );
});
