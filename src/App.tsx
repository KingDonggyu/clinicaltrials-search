import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from 'styles/globals';

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
}

export default App;
