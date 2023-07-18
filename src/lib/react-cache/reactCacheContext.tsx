import { ReactNode, createContext, useContext, useMemo } from 'react';
import ClientSideCache from './ClientSideCache';

const ReactCacheContext = createContext<ClientSideCache | undefined>(undefined);

export function ReactCacheProvider({ children }: { children: ReactNode }) {
  const clientSideCache = useMemo(() => new ClientSideCache(), []);
  return <ReactCacheContext.Provider value={clientSideCache}>{children}</ReactCacheContext.Provider>;
}

export function useReactCache() {
  const context = useContext(ReactCacheContext);

  if (!context) {
    throw new Error('useReactCache는 ReactCacheContext.Provider 내에서 사용해야 합니다.');
  }

  return context;
}
