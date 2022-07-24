import useSWR from 'swr';

import { QueryConfig } from 'interfaces';

const useQuery = ({ url, params }: QueryConfig) => {
  const { data, error } = useSWR({ url, params });
  return { data, error };
};

export default useQuery;
