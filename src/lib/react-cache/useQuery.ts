import { useCallback, useState } from 'react';
import { useReactCache } from '.';

interface QueryOption {
  queryKey: string;
  expireTime?: number;
}

export function useQuery<TData, TParameters>(func: (params: TParameters) => Promise<TData>) {
  const [data, setData] = useState<TData | undefined>(undefined);
  const reactCache = useReactCache();

  const fetch = useCallback(
    async (params: TParameters, { queryKey, expireTime }: QueryOption) => {
      const cacheData = reactCache.get<TData>(queryKey);

      if (cacheData) {
        setData(cacheData);
        return;
      }

      const newData = await func(params);
      reactCache.set({ key: queryKey, value: newData, expireTime });
      setData(newData);
    },
    [func, reactCache]
  );

  return { data, fetch };
}
