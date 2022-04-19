import { useState } from 'react';

export const useMobile = () => {
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  const toggleOff = () => {
    if (isOpen) {
      toggleOpen(false)
    }
  }

  return {
    isOpen,
    toggle,
    toggleOff,
  };
}
