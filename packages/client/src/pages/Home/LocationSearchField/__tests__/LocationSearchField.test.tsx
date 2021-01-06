import * as React from 'react';
import { shallow } from 'enzyme';
import { BiSearch } from 'react-icons/bi';

import LocationSearchField, { LocationSearchFieldProps } from '../LocationSearchField';

const props: LocationSearchFieldProps = {
  hasSearchIcon: false,
};

describe('LocationSearchField', () => {
  it('should match a snapshot', () => {
    expect(shallow(<LocationSearchField {...props} />)).toMatchSnapshot();
  });
  it('should show search icon', () => {
    const wrapper = shallow(<LocationSearchField {...props} hasSearchIcon />);
    expect(wrapper.find(BiSearch)).toHaveLength(1);
  });
});
