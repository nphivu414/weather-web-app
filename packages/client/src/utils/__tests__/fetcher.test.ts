import { URLS } from 'constants/api';
import { mockLocations } from 'services/locations/__mocks__/mockLocation';
import { fetcher } from 'utils';

describe('fetcher', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should call fetch with correct url', () => {
    fetcher({
      uri: URLS.LOCATION,
      method: 'GET',
    });
    expect(fetch).toHaveBeenCalledWith(URLS.LOCATION);
  });

  it('should return a correct response', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockLocations));
    const response = await fetcher({
      uri: URLS.LOCATION,
      method: 'GET',
    });
    expect(response).toEqual(mockLocations);
  });
});
