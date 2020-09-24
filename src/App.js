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
 });



 /** 
  * TODO: Listen to server
  */
const port = process.env.PORT || 3000

app.listen(port)