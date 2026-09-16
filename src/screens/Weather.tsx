import React from 'react';
import Card from '@components/Card';
import Button from '@components/Button';
import { theme } from '@styles/theme';
import {
  fetchWeather,
  searchLocations,
  weatherDescription,
  type LocationResult,
  type WeatherData,
} from '@services/weather';

const defaultLocation: LocationResult = {
  id: 264371,
  name: 'London',
  country: 'United Kingdom',
  latitude: 51.5085,
  longitude: -0.1257,
  timezone: 'Europe/London',
};

const formatDay = (date: string, index: number) =>
  index === 0
    ? 'Today'
    : new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date(`${date}T12:00:00`));

const Weather: React.FC = () => {
  const [location, setLocation] = React.useState(defaultLocation);
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<LocationResult[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const loadWeather = React.useCallback(async (nextLocation: LocationResult) => {
    setIsLoading(true);
    setError('');
    try {
      setWeather(await fetchWeather(nextLocation));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to load weather.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void loadWeather(location);
  }, [loadWeather, location]);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    setError('');
    try {
      setResults(await searchLocations(query.trim()));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Search failed.');
    }
  };

  const selectLocation = (nextLocation: LocationResult) => {
    setLocation(nextLocation);
    setQuery('');
    setResults([]);
  };

  const current = weather?.current;
  const currentDescription = current ? weatherDescription(current.weatherCode) : null;

  return (
    <main style={{ background: `linear-gradient(145deg, ${theme.colors.peach}, ${theme.colors.cream} 45%, ${theme.colors.lightMint})`, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ marginBottom: theme.spacing.lg }}>
          <p style={{ color: theme.colors.coral, fontWeight: theme.typography.fontWeight.semibold }}>🌤️ Stylo weather</p>
          <h1 style={{ color: theme.colors.warmCharcoal, fontSize: theme.typography.fontSize.h1, margin: `${theme.spacing.sm} 0` }}>Dress for your day</h1>
          <p style={{ color: theme.colors.lightCharcoal }}>A gentle forecast to help you choose how to show up.</p>
        </header>

        <Card style={{ marginBottom: theme.spacing.lg, position: 'relative' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
            <input aria-label="Search for a city" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a city..." style={{ flex: '1 1 240px', minHeight: '44px', border: `1px solid ${theme.colors.champagne}`, borderRadius: theme.borderRadius.inputs, padding: `0 ${theme.spacing.md}`, color: theme.colors.warmCharcoal }} />
            <Button type="submit">Search</Button>
          </form>
          {results.length > 0 && <div style={{ display: 'grid', gap: theme.spacing.sm, marginTop: theme.spacing.md }}>
            {results.map((result) => <button key={`${result.id}-${result.latitude}`} onClick={() => selectLocation(result)} style={{ textAlign: 'left', padding: theme.spacing.sm, border: `1px solid ${theme.colors.champagne}`, borderRadius: theme.borderRadius.small, background: theme.colors.cream, color: theme.colors.warmCharcoal }}>{result.name}{result.admin1 ? `, ${result.admin1}` : ''} · {result.country}</button>)}
          </div>}
        </Card>

        {error && <Card style={{ marginBottom: theme.spacing.lg, background: theme.colors.blush }}><p role="alert" style={{ color: theme.colors.warmCharcoal }}>{error}</p><Button variant="secondary" onClick={() => void loadWeather(location)} style={{ marginTop: theme.spacing.md }}>Try again</Button></Card>}
        {isLoading && <Card><p style={{ color: theme.colors.lightCharcoal }}>Gathering a fresh forecast...</p></Card>}

        {weather && current && currentDescription && !isLoading && <>
          <Card style={{ marginBottom: theme.spacing.lg, background: `linear-gradient(135deg, ${theme.colors.cream}, ${theme.colors.champagne})` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: theme.spacing.lg, flexWrap: 'wrap', alignItems: 'center' }}>
              <div><p style={{ color: theme.colors.lightCharcoal }}>Current conditions</p><h2 style={{ color: theme.colors.warmCharcoal, fontSize: theme.typography.fontSize.h2, margin: `${theme.spacing.sm} 0` }}>{weather.location.name}</h2><p style={{ color: theme.colors.lightCharcoal }}>{currentDescription.label} · Feels like {Math.round(current.apparentTemperature)}°C</p></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: '64px' }}>{currentDescription.icon}</div><strong style={{ color: theme.colors.warmCharcoal, fontSize: '42px' }}>{Math.round(current.temperature)}°C</strong></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: theme.spacing.sm, marginTop: theme.spacing.lg }}>
              {[[`💧 ${current.humidity}%`, 'Humidity'], [`💨 ${Math.round(current.windSpeed)} km/h`, 'Wind'], [`🌧️ ${current.precipitation} mm`, 'Precipitation']].map(([value, label]) => <div key={label} style={{ background: theme.colors.white, borderRadius: theme.borderRadius.small, padding: theme.spacing.md }}><strong style={{ display: 'block', color: theme.colors.warmCharcoal }}>{value}</strong><span style={{ color: theme.colors.lightCharcoal, fontSize: theme.typography.fontSize.small }}>{label}</span></div>)}
            </div>
          </Card>

          <h2 style={{ color: theme.colors.warmCharcoal, fontSize: theme.typography.fontSize.h3, marginBottom: theme.spacing.md }}>7-day outlook</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: theme.spacing.md }}>
            {weather.daily.map((day, index) => { const description = weatherDescription(day.weatherCode); return <Card key={day.date} style={{ textAlign: 'center', background: theme.colors.cream }}><strong style={{ color: theme.colors.warmCharcoal }}>{formatDay(day.date, index)}</strong><div style={{ fontSize: '32px', margin: `${theme.spacing.sm} 0` }}>{description.icon}</div><p style={{ color: theme.colors.warmCharcoal, fontWeight: theme.typography.fontWeight.semibold }}>{Math.round(day.high)}° / {Math.round(day.low)}°</p><p style={{ color: theme.colors.lightCharcoal, fontSize: theme.typography.fontSize.small, marginTop: theme.spacing.sm }}>💧 {day.precipitationProbability}%</p></Card>; })}
          </div>
        </>}
        <p style={{ color: theme.colors.lightCharcoal, fontSize: theme.typography.fontSize.small, marginTop: theme.spacing.lg }}>Forecast data provided by Open-Meteo. No API key required.</p>
      </div>
    </main>
  );
};

export default Weather;
