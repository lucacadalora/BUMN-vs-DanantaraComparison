import { useState, useCallback, useEffect } from 'react';

export const useSectionToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Effect to set initial state
  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { isOpen, toggle };
};
