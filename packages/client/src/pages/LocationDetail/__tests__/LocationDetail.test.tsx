import * as React from 'react';
import { shallow } from 'enzyme';

import LocationDetail, { LocationDetailProps, renderTodayWeatherSection } from '../LocationDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockLocationWeather } from 'services/locations/__mocks__/mockLocation';

const props: LocationDetailProps = {
  id: 1,
};

const queryClient = new QueryClient();

describe('LocationDetail', () => {
  it('should match a snapshot', () => {
    expect(
      shallow(
        <QueryClientProvider client={queryClient}>
          <LocationDetail {...props} />
        </QueryClientProvider>,
      ),
    ).toMatchSnapshot();
  });

  describe('renderTodayWeatherSection', () => {
    it('should match a snapshot', () => {
      expect(shallow(renderTodayWeatherSection(mockLocationWeather))).toMatchSnapshot();
    });
  });
});
