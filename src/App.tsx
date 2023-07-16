import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'styles/globals';
import { PageLayout } from 'components/PageLayout';

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Global styles={globalStyle} />
      <PageLayout>{children}</PageLayout>
    </>
  );
}

export default App;
