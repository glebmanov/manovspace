import React, { FC, JSX, memo } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export const Portal: FC<Props> = memo(({ children, isOpen, onClose }) => {
  return (
    <>
      {isOpen &&
        createPortal(<div className="portal-wrapper">{React.cloneElement(children, { onClose })}</div>, document.body)}
    </>
  );
});
