const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3RyaXBhdGh5MTk5OSIsImEiOiJja2V4OG9namcwOG05MzFyenF0MjUzZDdyIn0.Ji8U5F01Q4SYhFleXosl3w&limit=1'
    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to location sevices!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find Location. Try another search!', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode