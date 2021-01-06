import { URLS } from 'constants/api';
import { fetchLocationDetail, searchLocations } from 'services';
import { mockLocationDetail, mockLocations } from '../__mocks__/mockLocation';

describe('searchLocations', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should call fetch with search location url', () => {
    const fn = searchLocations({
      query: 'test',
    });
    fn();
    expect(fetch).toHaveBeenCalledWith(`${URLS.LOCATION}/search?query=test`);
  });

  it('should return a correct response for searching locations', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockLocations));
    const fn = searchLocations({
      query: 'test',
    });
    const locations = await fn();
    expect(locations).toEqual(mockLocations);
  });
});

describe('fetchLocationDetail', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should call fetch with search location detail url', () => {
    const fn = fetchLocationDetail({
      id: 1,
    });
    fn();
    expect(fetch).toHaveBeenCalledWith(`${URLS.LOCATION}/detail?id=1`);
  });

  it('should return a correct response for fetching location detail', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockLocationDetail));
    const fn = fetchLocationDetail({
      id: 1,
    });
    const locationDetail = await fn();
    expect(locationDetail).toEqual(mockLocationDetail);
  });
});
