import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useUpDownKeyboardNavigation({ size }: { size: number }): [number, Dispatch<SetStateAction<number>>] {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing) {
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex(prevIndex => Math.max(0, prevIndex - 1));
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex(prevIndex => Math.min(size, prevIndex + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [size]);

  return [selectedIndex, setSelectedIndex];
}
