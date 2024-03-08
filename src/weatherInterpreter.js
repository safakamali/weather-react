const WeatherInterpreter = (weatherData) => {
    const temp = weatherData['current']['temperature_2m'];
    const humidity = weatherData['current']['relative_humidity_2m'];
    const rain = weatherData['current']['rain'];
    const snowfall = weatherData['current']['snowfall'];
    const cloudOver = weatherData['current']['cloud_over']
    const windSpeed = weatherData['current']['wind_speed_10m'];
    const isDay = weatherData['current']['is_day'];
    const precipitation = weatherData['current']['precipitation'];

    // Get current date
    const currentDate = new Date();

    // Days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[currentDate.getDay()];

    // Day of the month
    const dayOfMonth = currentDate.getDate();

    // Months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[currentDate.getMonth()];



    let phase = "";
    let text = "";

    if (snowfall > 0) {
        phase = 'Snow'
        text = 'Snowy'
    }
    else if (rain > 0) {
        phase = 'Rain'
        text = 'Rainy'
    } else if (cloudOver > 30) {
        phase = 'Cloud'
        text = 'Cloudy'
    } else {
        phase = 'Sun'
        text = 'Sunny'
    }

    return {
        temp: temp,
        humidity: humidity,
        windSpeed: windSpeed,
        phase: phase,
        text: text,
        isDay: isDay,
        precipitation: precipitation,
        date: {
            dayOfWeek: dayOfWeek,
            dayOfMonth: dayOfMonth,
            monthName: monthName
        }
    }

}

export default WeatherInterpreter;