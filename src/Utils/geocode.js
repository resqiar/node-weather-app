const request = require('postman-request');

/** 
 * ! MAPBOX API
 */
const MAPBOX_API = 'pk.eyJ1IjoicmVzcWlhciIsImEiOiJja2Y5cTB4N2kwNXliMzVwZWhjcmZsZ3dvIn0.e6xomU_Q7BGeGBDX9GiKyQ';

/** 
 * TODO: Request API to mapbox to gain LAT & LONG
 */

const geocode = (address, callback) => {
    const encodedUrl = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=${MAPBOX_API}`;

    request(url, (error, response, body) => {
        if (error) {
            callback('Unable to connect to API. Check your internet connection and try again!');
        } else {
            const jsonBody = JSON.parse(body);

            /** 
             * TODO: Transfer data to the callback so it should be reusable
             */

            callback(undefined, {
                location: jsonBody.features[0].place_name,
                lat: jsonBody.features[0].center[1],
                long: jsonBody.features[0].center[0]
            });

        }
    });
}

module.exports = geocode;