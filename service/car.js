const axios = require('axios')

const MY_TESLA_API = process.env.MY_TESLA_API

const climateOn = () =>
    axios.get(`${MY_TESLA_API}/vehicle/climateOn`)

module.exports = {
    climateOn,
}
