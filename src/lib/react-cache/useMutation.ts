import { useCallback } from 'react';
import { useReactCache } from '.';

interface MutateOption {
  unstableQueryKeys?: string[];
}

export function useMutation<TData, TParameters>(func: (params: TParameters) => Promise<TData>) {
  const reactCache = useReactCache();

  const mutate = useCallback(
    async (params: TParameters, { unstableQueryKeys = [] }: MutateOption = {}) => {
      const data = await func(params);
      unstableQueryKeys.map(queryKey => reactCache.delete(queryKey));
      return data;
    },
    [func, reactCache]
  );

  return mutate;
}
