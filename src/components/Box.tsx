import { HTMLAttributes, ReactNode } from 'react';
import colors from 'constants/colors';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  hasShadow?: boolean;
  children: ReactNode;
}

export function Box({ hasShadow = true, children, ...props }: BoxProps) {
  return (
    <div
      css={{
        background: colors.background,
        borderRadius: '1.3em',
        boxShadow: hasShadow ? 'rgba(0, 0, 0, 0.08) 2px 4px 12px' : 'none',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
