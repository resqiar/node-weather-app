const { json } = require('express');
const request = require('postman-request');

/** 
 * ! WEATHER STACK API 
 */
const WEATHER_API = '8f5f187895b8714b2336a9f1e5c70e0a';

/** 
 * TODO: Request API to weather stack 
 */

    const weather = (address, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${WEATHER_API}&query=${address}`;

        request(url, (error,response, body) => {
            if (error) {
                callback('Cannot access API, please check your internet connection!');
            } else {
                const jsonBody = JSON.parse(body);

                /** 
                 * TODO: Pass the data to callback to make it reusable
                 */
                callback(undefined, {
                    location: jsonBody.location.name,
                    weather: jsonBody.current.weather_descriptions,
                    temp: jsonBody.current.temperature,
                    humidity: jsonBody.current.humidity,
                    windKnots: jsonBody.current.wind_speed,
                    windKmh: jsonBody.current.wind_speed * 1.85.toFixed(0),
                    wind_dir: jsonBody.current.wind_dir,
                    time: jsonBody.location.localtime
                })

            }
        });
    }

    module.exports = weather;