import qs from 'query-string';
import { Place } from 'types';
import { fetcher } from 'utils';
import { URLS } from 'constants/api';

export type SearchLocationParams = {
  query: string;
  limit?: number;
};

export type FetchLocationDetailParams = {
  id: number | null;
};

export const searchLocations = (fetchParams: SearchLocationParams) => {
  return (): Promise<Place[] | null> => {
    const queryString = qs.stringify(fetchParams);
    return fetcher<Place[]>({
      uri: `${URLS.LOCATION}/search?${queryString}`,
      method: 'GET',
    });
  };
};

export const fetchLocationDetail = (fetchParams: FetchLocationDetailParams) => {
  return (): Promise<Place | null> => {
    if (!fetchParams.id) {
      return new Promise((resolve) => {
        return resolve(null);
      });
    }

    const queryString = qs.stringify(fetchParams);
    return fetcher<Place>({
      uri: `${URLS.LOCATION}/detail?${queryString}`,
      method: 'GET',
    });
  };
};
