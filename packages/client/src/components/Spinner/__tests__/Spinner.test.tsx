import * as React from 'react';
import { shallow } from 'enzyme';

import Spinner, { SpinnerProps } from '../Spinner';

const props: SpinnerProps = {
  isSpinning: false,
};

describe('Spinner', () => {
  it('should match a snapshot', () => {
    expect(shallow(<Spinner {...props} />)).toMatchSnapshot();
  });
  it('should show spinner', () => {
    const wrapper = shallow(<Spinner {...props} isSpinning />);
    expect(wrapper.find('div.spinner-border')).toHaveLength(1);
  });
});
