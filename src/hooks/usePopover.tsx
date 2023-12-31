import { useMemo, useState } from 'react';
import { Box, BoxProps } from 'components/Box';

function usePopover() {
  const [isShow, setIsShow] = useState(false);

  const showPopover = () => {
    setIsShow(true);
  };

  const hidePopover = () => {
    setIsShow(false);
  };

  const Popover = useMemo(() => {
    return ({ children, ...boxProps }: PopoverProps) =>
      isShow && (
        <Box onMouseDown={e => e.preventDefault()} {...boxProps}>
          {children}
        </Box>
      );
  }, [isShow]);

  return { Popover, showPopover, hidePopover };
}

type PopoverProps = BoxProps;

export default usePopover;
