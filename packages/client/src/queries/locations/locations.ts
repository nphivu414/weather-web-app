import { QUERY_KEY } from 'constants/query';
import { useQuery, UseQueryOptions } from 'react-query';
import { fetchLocationDetail, searchLocations } from 'services';
import { Place, ServiceError } from 'types';

export const useSearchLocationQuery = (searchTerm: string, options?: UseQueryOptions<Place[], ServiceError>) => {
  return useQuery(
    [QUERY_KEY.LOCATIONS, searchTerm],
    searchLocations({
      query: searchTerm,
    }),
    {
      enabled: searchTerm !== '',
      refetchOnWindowFocus: false,
      ...options,
    },
  );
};

export const useLocationDetailQuery = (id: number | null, options?: UseQueryOptions<Place | null, ServiceError>) => {
  return useQuery(
    [QUERY_KEY.LOCATION_DETAIL, id],
    fetchLocationDetail({
      id,
    }),
    {
      enabled: id !== null,
      ...options,
    },
  );
};
