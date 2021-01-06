export interface Place {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance?: number;
  consolidated_weather?: Weather[];
}

export interface Weather {
  id: string;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface ServiceError {
  statusCode: number;
  message: string;
}
