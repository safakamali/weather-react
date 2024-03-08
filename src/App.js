import { useState } from 'react';
import MainCard from './mainCard';
import TodaySelector from './todaySelector';
import WeatherInterpreter from './weatherInterpreter';
import { useEffect } from 'react';


let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  let currentScrollPosition = window.scrollY;
  
  if (currentScrollPosition - lastScrollPosition >= 50) {
    window.scrollBy(0, 50);
    lastScrollPosition = currentScrollPosition;
  }
});

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getData = () => {
    setWeatherData(null)
    fetch("https://api.open-meteo.com/v1/forecast?latitude=36.2981&longitude=59.6057&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&forecast_days=3")
      .then(response => response.json())
      .then(data => {
        setWeatherData(WeatherInterpreter(data));
      });
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <MainCard weatherData={weatherData} reloadAction={getData} />
      <TodaySelector />
    </div>
  );
}

export default App;