import * as React from 'react';
import { shallow } from 'enzyme';

import Home, { HomeProps, onLocationItemClick, onLocationSearchFieldChange } from '../Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Place } from 'types';

const props: HomeProps = {
  searchTerm: '',
  setSearchTerm: jest.fn(),
  setSelectedLocationId: jest.fn(),
};

const queryClient = new QueryClient();

describe('Home', () => {
  it('should match a snapshot', () => {
    expect(
      shallow(
        <QueryClientProvider client={queryClient}>
          <Home {...props} />
        </QueryClientProvider>,
      ),
    ).toMatchSnapshot();
  });

  describe('onLocationSearchFieldChange', () => {
    it('should run correctly', () => {
      const fn = onLocationSearchFieldChange(props.setSearchTerm);
      const mockEvent = {
        target: {
          value: 'test',
        },
      } as React.ChangeEvent<HTMLInputElement>;
      fn(mockEvent);
      expect(props.setSearchTerm).toBeCalledWith(mockEvent.target.value);
    });
  });

  describe('onLocationItemClick', () => {
    it('should run correctly', () => {
      const mockSetNavigationTitle = jest.fn();
      const mockGoNext = jest.fn();
      const fn = onLocationItemClick(mockSetNavigationTitle, props.setSelectedLocationId, mockGoNext);
      const mockLocation: Place = {
        latt_long: '123-345',
        location_type: 'Test',
        title: 'Test',
        woeid: 1,
      };
      fn(mockLocation);
      expect(props.setSelectedLocationId).toBeCalledWith(mockLocation.woeid);
      expect(mockSetNavigationTitle).toBeCalledWith(mockLocation.title);
      expect(mockGoNext).toBeCalled();
    });
  });
});
