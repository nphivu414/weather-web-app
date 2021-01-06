import * as React from 'react';
import dayjs from 'dayjs';
import { Weather } from 'types';
import { tempFormat } from 'utils';
import { URLS } from 'constants/api';
import { DATE_FORMAT } from 'constants/format';

export type DailyWeatherSectionProps = {
  weatherList: Weather[];
};

const DailyWeatherSection: React.FC<DailyWeatherSectionProps> = ({ weatherList }) => {
  return (
    <div className="p-3">
      <table className="table">
        <tbody>
          {weatherList.map((item) => {
            const { id, applicable_date, min_temp, max_temp, weather_state_abbr } = item;
            const weatherStateImgURL = `${URLS.META_WEATHER_ASSETS}/${weather_state_abbr}.svg`;
            return (
              <tr key={id}>
                <td>{dayjs(applicable_date).format(DATE_FORMAT.DAY_OF_WEEK)}</td>
                <td>{weather_state_abbr && <img className="img" width="24px" src={weatherStateImgURL} />}</td>
                <td className="text-center">
                  <span>{tempFormat(max_temp)}</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">{tempFormat(min_temp)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DailyWeatherSection;
