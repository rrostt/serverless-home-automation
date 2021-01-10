const axios = require('axios')

const MY_TESLA_API = process.env.MY_TESLA_API
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN

const climateOn = () =>
    axios.get(
        `${MY_TESLA_API}/vehicle/climateOn`,
        {
            headers: {
                'x-g-token': GOOGLE_TOKEN
            }
        }
    )

module.exports = {
    climateOn,
}
