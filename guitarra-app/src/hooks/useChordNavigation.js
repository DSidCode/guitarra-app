// src/hooks/useChordNavigation.js
import { useState, useCallback } from 'react';

export const useChordNavigation = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  return { currentIndex, next, prev };
};