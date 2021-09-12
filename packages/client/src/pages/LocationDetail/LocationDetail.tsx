import * as React from 'react';
import AppBar from 'components/AppBar';
import NavigationContext from 'navigation';
import TodayWeatherSection from './TodayWeatherSection';
import Spinner from 'components/Spinner';
import DailyWeatherSection from './DailyWeatherSection';
import { Weather } from 'types';
import { useLocationDetailQuery } from 'queries';

export type LocationDetailProps = {
  id: number | null;
};

export const renderTodayWeatherSection = (todayWeather: Weather) => {
  if (!todayWeather) {
    return null;
  }

  const { min_temp, max_temp, the_temp, weather_state_name } = todayWeather;
  return (
    <TodayWeatherSection
      minTemp={min_temp}
      maxTemp={max_temp}
      currentTemp={the_temp}
      weatherStateName={weather_state_name}
    />
  );
};

export const LocationDetail: React.FC<LocationDetailProps> = ({ id }) => {
  const { goBack, title } = React.useContext(NavigationContext);
  const { data, isLoading, error, isError } = useLocationDetailQuery(id);
  const weatherList = data?.consolidated_weather || [];
  const todayWeather = weatherList[0];

  return (
    <div>
      <AppBar title={title} hasBackButton onBack={goBack} />
      <div className="p-3 bg-white">
        {isError && !data && (
          <div className="alert alert-danger text-center" role="alert">
            <label>{error?.message}</label>
          </div>
        )}
        <Spinner isSpinning={isLoading} />
        {renderTodayWeatherSection(todayWeather)}
        <DailyWeatherSection weatherList={weatherList} />
      </div>
    </div>
  );
};

export default LocationDetail;
