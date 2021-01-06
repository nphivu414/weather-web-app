import * as React from 'react';
import { shallow } from 'enzyme';

import LocationList, { handleOnItemClick, LocationListProps } from '../LocationList';
import { Place } from 'types';

const props: LocationListProps = {
  locations: [
    {
      latt_long: '123-345',
      location_type: 'Test',
      title: 'Test',
      woeid: 1,
    },
  ],
  onItemClick: jest.fn(),
};

describe('LocationList', () => {
  it('should match a snapshot', () => {
    expect(shallow(<LocationList {...props} />)).toMatchSnapshot();
  });

  it('should show no data text', () => {
    const wrapper = shallow(<LocationList {...props} locations={null} isFetched={true} />);
    expect(wrapper.find('p.empty')).toHaveLength(1);
  });

  it('should show hint text', () => {
    const wrapper = shallow(<LocationList {...props} locations={null} isFetched={false} />);
    expect(wrapper.find('p.hint')).toHaveLength(1);
  });

  describe('handleOnItemClick', () => {
    it('should run correctly', () => {
      const mockLocation: Place = {
        latt_long: '123-345',
        location_type: 'Test',
        title: 'Test',
        woeid: 1,
      };
      const fn = handleOnItemClick(mockLocation, props.onItemClick);
      fn();
      expect(props.onItemClick).toBeCalledWith(mockLocation);
    });
  });
});
