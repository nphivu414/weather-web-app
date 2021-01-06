import * as React from 'react';
import { tempFormat } from 'utils';

export type TodayWeatherSectionProps = {
  maxTemp: number;
  minTemp: number;
  currentTemp: number;
  weatherStateName: string;
};

const TodayWeatherSection: React.FC<TodayWeatherSectionProps> = ({
  currentTemp,
  maxTemp,
  minTemp,
  weatherStateName,
}) => {
  return (
    <div className="flex-column text-center">
      <p className="fs-6 mb-2">{weatherStateName}</p>
      <h1 className="display-2">{tempFormat(currentTemp)}</h1>
      <div className="flex-row">
        <span className="fs-6 m-1">H: {tempFormat(maxTemp)}</span>
        <span className="fs-6 m-1">L: {tempFormat(minTemp)}</span>
      </div>
    </div>
  );
};

export default TodayWeatherSection;
