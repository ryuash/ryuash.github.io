import { useState } from 'react';

export const useMobile = () => {
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
