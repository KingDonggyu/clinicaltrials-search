import { ReactNode, createContext, useContext, useState } from 'react';
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
  const sickRepository = new SickRepository();
  const [sickList, setSickList] = useState<Sick[]>([]);

  const searchSickList = async (query: string) => {
    if (query === '') {
      setSickList([]);
      return;
    }

    const searched = await sickRepository.search(query);
    setSickList(searched);
  };

  return <SickListContext.Provider value={{ sickList, searchSickList }}>{children}</SickListContext.Provider>;
}

export function useSickListContext() {
  const context = useContext(SickListContext);

  if (!context) {
    throw new Error('useSickListContext는 SickListContext.Provider 내에서 사용해야 합니다.');
  }

  return context;
}
