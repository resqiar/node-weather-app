const path = require('path');
const express = require('express');
const app = express();
const publicDir = path.join(__dirname, '../public');
const geocode = require('./Utils/geocode');
const weather = require('./Utils/weather');


/** 
 * TODO: Make a simple route
 */

 app.use(express.static(publicDir))

 app.get('/' , (req, res) => {
    res.send("<h1><b>This is Home Page</b><h1>");
 });


 
 // ! WEATHER ROUTE
 app.get('/weazher', (req, res) => {
      /** 
       * ???? Get query from url
       */
      const reqAddress = req.query.find

      if (!reqAddress) {
         return res.send({
            error: "Please provide your address"
         })
      }

      /** 
       * TODO: Get the address, and pass it to geocode function
       */
      weather(reqAddress, (error, data) => {
         if (error) {
            return res.send(error)
         }

         res.send(data);
         
      });

      // res.send({
      //    "address": reqAddress,
      //    "observation_time": "01:32 PM",
      //    "temperature": 31,
      //    "weather_code": 353,
      //    "weather_icons": [
      //    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
      //    ],
      //    "weather_descriptions": [
      //    "Light rain shower"
      //    ],
      //    "wind_speed": 14,
      //    "wind_degree": 91,
      //    "wind_dir": "E",
      //    "pressure": 1008,
      //    "precip": 0.6,
      //    "humidity": 59,
      //    "cloudcover": 72,
      //    "feelslike": 35,
      //    "uv_index": 7,
      //    "visibility": 10,
      //    "is_day": "yes"
      // });
 });



 /** 
  * TODO: Listen to server
  */
app.listen('3000', console.log('Server Running on Port 3000'))