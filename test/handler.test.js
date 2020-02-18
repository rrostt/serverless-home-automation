const getWeather = require('current-weather-data')

test('Weather works', () =>
    getWeather({ lon: 12, lat: 58 })
        .then(weather => expect(weather).toHaveProperty('temperature.value'))
)
