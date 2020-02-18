const yrno = require('yr.no-forecast')({
    version: '1.9', // this is the default if not provided,
    request: {
      // make calls to locationforecast timeout after 15 seconds
      timeout: 15000
    }
  });
  
  const getWeather = ({lat, lon}) =>
      yrno.getWeather({lat, lon})
          .then(weather => weather.getForecastForTime(Date.now() + 3600000))
          .then(weather => console.log('temp is ', weather.temperature.value) || weather)
          .then(weather => {
            return weather
          })

module.exports = {
    getWeather,
}
