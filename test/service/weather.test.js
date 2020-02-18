const weather = require('../../service/weather')

describe('weather', () => {
    test('gets a temperature', () => {
        return weather.getWeather({
            lat: 53.3478,
            lon: 6.2597
        })
            .then(weather => expect(weather).toHaveProperty('temperature'))
    })
})
