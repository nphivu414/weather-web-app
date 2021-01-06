import * as React from 'react';
import { shallow } from 'enzyme';

import AppBar, { AppBarProps } from '../AppBar';

const props: AppBarProps = {
  title: 'Home',
};

describe('AppBar', () => {
  it('should match a snapshot', () => {
    expect(shallow(<AppBar {...props} />)).toMatchSnapshot();
  });
  it('should show back button', () => {
    const wrapper = shallow(<AppBar {...props} hasBackButton />);
    expect(wrapper.find('button.btn')).toHaveLength(1);
  });
});
