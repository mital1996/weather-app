const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f81ab12f75bad3136ddc62f06ae8fe03&query=' + latitude + ',' + longitude+'&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' 
            + response.body.current.temperature +
             ' degress out. It is feel like  ' +  response.body.current.feelslike + ' degress out.'+
             'if the humidity like'+response.body.current.humidity+'% period.')
            }
    })
}

module.exports = forecast