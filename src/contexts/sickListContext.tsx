import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import SickRepository from 'repository/api/SickRepository';
import { Sick } from 'sick';

interface SickListContextValue {
  sickList: Sick[];
  searchSickList: (query: string) => Promise<void>;
}

const SickListContext = createContext<SickListContextValue>({
  sickList: [],
  searchSickList: async () => {},
});

export function SickListProvider({ children }: { children: ReactNode }) {
  const sickRepository = useMemo(() => new SickRepository(), []);
  const [sickList, setSickList] = useState<Sick[]>([]);

  const searchSickList = useCallback(
    async (query: string) => {
      if (query === '') {
        setSickList([]);
        return;
      }

      const searched = await sickRepository.search(query);
      setSickList(searched);
    },
    [sickRepository]
  );

  return <SickListContext.Provider value={{ sickList, searchSickList }}>{children}</SickListContext.Provider>;
}

export function useSickListContext() {
  const context = useContext(SickListContext);

  if (!context) {
    throw new Error('useSickListContext는 SickListContext.Provider 내에서 사용해야 합니다.');
  }

  return context;
}
