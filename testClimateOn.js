const config = require('./config.json')
process.env.MY_TESLA_API = config.MY_TESLA_API
process.env.GOOGLE_TOKEN = config.GOOGLE_TOKEN
const car = require('./service/car')

car.climateOn().then(res => console.log(res))
