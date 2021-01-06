import { Place, Weather } from 'types';
export const mockLocations: Place[] = [
  {
    title: 'Helsinki',
    location_type: 'City',
    woeid: 144246,
    latt_long: '13.115,-0.411'
  }
]

export const mockLocationDetail: Place = {
  consolidated_weather: [
    {
      id: '4811453371514880',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      wind_direction_compass: 'S',
      created: '2021-01-05T03:20:16.354553Z',
      applicable_date: '2021-01-04',
      min_temp: 10.335,
      max_temp: 14.04,
      the_temp: 12.84,
      wind_speed: 6.662041035769771,
      wind_direction: 179.13574633334716,
      air_pressure: 1022,
      humidity: 87,
      visibility: 15.07757197963891,
      predictability: 75
    },
  ],
  title: 'San Francisco',
  location_type: 'City',
  woeid: 2487956,
  latt_long: '37.777119, -122.41964',
}

export const mockLocationWeather: Weather = {
  id: '5219640084004864',
  weather_state_name: 'Heavy Cloud',
  weather_state_abbr: 'hc',
  wind_direction_compass: 'NE',
  created: '2021-01-04T09:22:58.583752Z',
  applicable_date: '2021-01-04',
  min_temp: 1.18,
  max_temp: 8.535,
  the_temp: 7.65,
  wind_speed: 8.627662748028845,
  wind_direction: 49.82635538871968,
  air_pressure: 1021.5,
  humidity: 76,
  visibility: 9.605466575200827,
  predictability: 71,
};

export const mockLocationWeatherList: Weather[] = [
  {
    id: '5219640084004864',
    weather_state_name: 'Heavy Cloud',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'NE',
    created: '2021-01-04T09:22:58.583752Z',
    applicable_date: '2021-01-04',
    min_temp: 1.18,
    max_temp: 8.535,
    the_temp: 7.65,
    wind_speed: 8.627662748028845,
    wind_direction: 49.82635538871968,
    air_pressure: 1021.5,
    humidity: 76,
    visibility: 9.605466575200827,
    predictability: 71,
  },
  {
    id: '4892388808982528',
    weather_state_name: 'Heavy Rain',
    weather_state_abbr: 'hr',
    wind_direction_compass: 'SW',
    created: '2021-01-04T12:20:17.765280Z',
    applicable_date: '2021-01-04',
    min_temp: 9.504999999999999,
    max_temp: 12.379999999999999,
    the_temp: 13.325,
    wind_speed: 11.596992554993506,
    wind_direction: 216.04166545749246,
    air_pressure: 1018.5,
    humidity: 92,
    visibility: 8.728090451761712,
    predictability: 77,
  }
]
