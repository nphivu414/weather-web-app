import * as React from 'react';
import { shallow } from 'enzyme';

import DailyWeatherSection, { DailyWeatherSectionProps } from '../DailyWeatherSection';
import { mockLocationWeatherList } from 'services/locations/__mocks__/mockLocation';

const props: DailyWeatherSectionProps = {
  weatherList: mockLocationWeatherList,
};

describe('DailyWeatherSection', () => {
  it('should match a snapshot', () => {
    expect(shallow(<DailyWeatherSection {...props} />)).toMatchSnapshot();
  });
});
