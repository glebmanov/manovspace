import { useState } from 'react';

export const usePortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};
