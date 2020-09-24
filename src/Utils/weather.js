const request = require('postman-request');

/** 
 * ! WEATHER STACK API 
 */
const WEATHER_API = '8f5f187895b8714b2336a9f1e5c70e0a';

/** 
 * TODO: Request API to weather stack 
 */

    const weather = (lat, long, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${WEATHER_API}&query=${lat},${long}`;

        request(url, (error,response, body) => {
            if (error) {
                callback('Cannot access API, please check your internet connection!');
            } else {
                const jsonBody = JSON.parse(body);

                /** 
                 * TODO: Pass the data to callback to make it reusable
                 */
                callback(undefined, {
                    weather: jsonBody.current.weather_descriptions,
                    temp: jsonBody.current.temperature,
                    windKnots: jsonBody.current.wind_speed,
                    windKmh: jsonBody.current.wind_speed * 1.85,
                    time: jsonBody.location.localtime
                })

            }
        });
    }

    module.exports = weather;