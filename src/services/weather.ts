export interface LocationResult {
  id: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface CurrentWeather {
  time: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  high: number;
  low: number;
  precipitationProbability: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  location: LocationResult;
  current: CurrentWeather;
  daily: DailyForecast[];
}

interface OpenMeteoResponse {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
    is_day: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    sunrise: string[];
    sunset: string[];
  };
}

const weatherEndpoint = 'https://api.open-meteo.com/v1/forecast';
const geocodingEndpoint = 'https://geocoding-api.open-meteo.com/v1/search';

export async function searchLocations(query: string): Promise<LocationResult[]> {
  const params = new URLSearchParams({
    name: query,
    count: '5',
    language: 'en',
    format: 'json',
  });
  const response = await fetch(`${geocodingEndpoint}?${params}`);
  if (!response.ok) throw new Error('Unable to search for that location.');

  const data = (await response.json()) as { results?: LocationResult[] };
  return data.results ?? [];
}

export async function fetchWeather(location: LocationResult): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weather_code,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset',
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    timezone: 'auto',
    forecast_days: '7',
  });
  const response = await fetch(`${weatherEndpoint}?${params}`);
  if (!response.ok) throw new Error('Unable to load weather right now.');

  const data = (await response.json()) as OpenMeteoResponse;
  return {
    location,
    current: {
      time: data.current.time,
      temperature: data.current.temperature_2m,
      apparentTemperature: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
      precipitation: data.current.precipitation,
      windSpeed: data.current.wind_speed_10m,
      weatherCode: data.current.weather_code,
      isDay: data.current.is_day === 1,
    },
    daily: data.daily.time.map((date, index) => ({
      date,
      weatherCode: data.daily.weather_code[index],
      high: data.daily.temperature_2m_max[index],
      low: data.daily.temperature_2m_min[index],
      precipitationProbability: data.daily.precipitation_probability_max[index],
      sunrise: data.daily.sunrise[index],
      sunset: data.daily.sunset[index],
    })),
  };
}

export function weatherDescription(code: number): { label: string; icon: string } {
  if (code === 0) return { label: 'Clear sky', icon: '☀️' };
  if ([1, 2].includes(code)) return { label: 'Partly cloudy', icon: '⛅' };
  if (code === 3) return { label: 'Overcast', icon: '☁️' };
  if ([45, 48].includes(code)) return { label: 'Foggy', icon: '🌫️' };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: 'Drizzle', icon: '🌦️' };
  if ([61, 63, 65, 66, 67].includes(code)) return { label: 'Rain', icon: '🌧️' };
  if ([71, 73, 75, 77].includes(code)) return { label: 'Snow', icon: '❄️' };
  if ([80, 81, 82].includes(code)) return { label: 'Rain showers', icon: '🌦️' };
  if ([85, 86].includes(code)) return { label: 'Snow showers', icon: '🌨️' };
  if ([95, 96, 99].includes(code)) return { label: 'Thunderstorm', icon: '⛈️' };
  return { label: 'Changing conditions', icon: '🌤️' };
}
