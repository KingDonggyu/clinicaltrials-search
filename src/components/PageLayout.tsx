import { ReactNode } from 'react';
import colors from 'constants/colors';
import mediaQueries from 'constants/mediaQueries';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={{
        maxWidth: '650px',
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        [mediaQueries.mobile]: {
          width: '100%',
        },
      }}
    >
      <div css={{ background: colors.background }}>{children}</div>
    </div>
  );
}
