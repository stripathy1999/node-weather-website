const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5f94c09d3f40e2a07519826a1bef05aa&query='+latitude+','+longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log(body.error)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions+'. The temperature outside is '+body.current.temperature+' degrees. It feels like '+body.current.feelslike+' degrees!')
        }
    })
}

module.exports = forecast

























/*const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url= 'https://api.weatherstack.com/current?access_key=5f94c09d3f40e2a07519826a1bef05aa&query='+latitude+','+longitude
    request( {url : url, json: true}, (error, response) => {
        if(error)
        {
            callback('Unable to connect to the weather services! Please Try again later!', undefined)
        }else if(response.body.error)
        {
            callback('Unable to fetch data due to INVALID coordinates! ',undefined)
        }
        else{
            callback(undefined, response.body.current.weather_descriptions+'. The temperature outside is '+response.body.current.temperature+' degrees. It feels like '+response.body.current.feelslike+' degress!')
        }
    } )
}

module.exports= forecast*/







