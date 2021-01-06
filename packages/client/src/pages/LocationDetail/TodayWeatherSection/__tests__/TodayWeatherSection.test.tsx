import * as React from 'react';
import { shallow } from 'enzyme';

import TodayWeatherSection, { TodayWeatherSectionProps } from '../TodayWeatherSection';

const props: TodayWeatherSectionProps = {
  currentTemp: 1,
  maxTemp: 2,
  minTemp: 1,
  weatherStateName: '',
};

describe('TodayWeatherSection', () => {
  it('should match a snapshot', () => {
    expect(shallow(<TodayWeatherSection {...props} />)).toMatchSnapshot();
  });
});
