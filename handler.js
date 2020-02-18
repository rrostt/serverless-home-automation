const car = require('./service/car')
const { getWeather } = require('./service/weather')

const { HOME_LONGITUDE, HOME_LATITUDE } = process.env

module.exports = {
  handler: (event, context, callback) => {
    getWeather({lat: HOME_LATITUDE, lon: HOME_LONGITUDE})
      .then(weather => {
        if (weather.temperature.value < 5) {
          return car.climateOn()
        }
      })
      .then(callback)
  }
}
