import { ReactNode, createContext, useCallback, useContext, useMemo } from 'react';
import { useQuery } from 'lib/react-cache';
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
  const searchSickList = useCallback(
    async (query: string) => {
      const searched = query ? await sickRepository.search(query) : [];
      return searched;
    },
    [sickRepository]
  );

  const { data: sickList, fetch: fetchSickList } = useQuery<Sick[], string>(searchSickList);
  const searchSickListWithCache = useCallback(
    (query: string) => {
      return fetchSickList(query, { queryKey: `/sickList/${query}`, expireTime: 120 * 6000 });
    },
    [fetchSickList]
  );

  return (
    <SickListContext.Provider
      value={{
        sickList: sickList || [],
        searchSickList: searchSickListWithCache,
      }}
    >
      {children}
    </SickListContext.Provider>
  );
}

export function useSickListContext() {
  const context = useContext(SickListContext);

  if (!context) {
    throw new Error('useSickListContext는 SickListContext.Provider 내에서 사용해야 합니다.');
  }

  return context;
}
