/**
 * ------------- 
 * Challenge - 12
 * ------------- 
 * Use request library to get temperature data from DarkSky.net
 * -------------
 */
// const request = require('request');
// const darksky_url = 'https://api.darksky.net/forecast/181b6162f2543aeb9e11517d58cbb84a/19.1187,72.9073?units=si';

// request.get({ url: darksky_url}, (err, data) => {
//     if(err) {
//         console.log('Error - Server unreachable !');
//     }else {
//         const res = JSON.parse(data.body);
//         console.log('It is currently '+res.currently.temperature+' degrees out there. There is a '+res.currently.precipProbability+'% chance of rain.');
//     }
// });
/*** End of Challenge ***/


/**
 * ------------- 
 * Challenge - 12
 * ------------- 
 * Use request library to get lat-long data from mapbox.com
 * -------------
 */
// const request = require('request');
// const placeToSerach = 'Mumbai';
// const mapbox_token = 'pk.eyJ1Ijoic3VzaGlsLXRha2tla2FyIiwiYSI6ImNqdHNiOW9ydTB2eHk0NHBjeW5rZHhzZHIifQ.wpq8tuCgPge32KcWR6IM-Q';
// const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+placeToSerach+'.json?access_token='+mapbox_token+'&limit=1';

// const darksky_token = '181b6162f2543aeb9e11517d58cbb84a';
// var darksky_url = 'https://api.darksky.net/forecast/'+darksky_token+'/';

// // make a request to mapbox.com
// request.get({ url: mapbox_url, json: true }, (err, data) => {
//     if(err) {
//         console.log('Error - Server unreachable !');
//     }else if(data.body.message) {
//         console.log('Error from mapbox server: '+data.body.message);
//     }else if(data.body.features.length < 1) {
//         console.log('Error from mapbox server: Place not found !');
//     }else {
//         const res = data.body;
//         const lat = res.features[0].center[1];
//         const long = res.features[0].center[0];
//         console.log('Lat: '+lat+'\nLong: '+long);
//         darksky_url += lat+','+long;
//         // make a request to darksky.net
//         request.get({ url: darksky_url, json: true }, (err_darksky, data) => {
//             if(err_darksky) {
//                 console.log('Error - Server unreachable !');
//             }else if(data.statusCode === 403) {
//                 console.log('Error - Forbidden ('+data.statusCode+')');
//             }else if(data.statusCode === 401) {
//                 console.log('Error - Permission denied ('+data.statusCode+')');
//             }else if(data.body.error) {
//                 console.log('Error - '+data.body.error);
//             }else {
//                 const res = data.body;
//                 console.log('It is currently '+res.currently.temperature+' degrees out there in '+placeToSerach+'. There is a '+res.currently.precipProbability+'% chance of rain.');
//             }
//         });
//     }
// });
/*** End of Challenge ***/


/**
 * --------------------
 * Challenge - 14/15/16 - L33-L38
 * --------------------
 * Write a custom callback function for mapbox and darksky apis
 * --------------------
 * Run : $ node .\app.js Thane
 * --------------------
 */
const geocode = require('./utils/geocode'); // contains function to get geo location
const weather = require('./utils/weather'); // contains function to get weather location

const searchAddress = process.argv[2];
const mapbox_token = 'pk.eyJ1Ijoic3VzaGlsLXRha2tla2FyIiwiYSI6ImNqdHNiOW9ydTB2eHk0NHBjeW5rZHhzZHIifQ.wpq8tuCgPge32KcWR6IM-Q';
const darksky_token = '181b6162f2543aeb9e11517d58cbb84a';

// get geo location of a place
geocode.getGeoCode(mapbox_token, searchAddress, (err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log(data);
        // get weather of a place
        weather.getWeather(darksky_token, data.lat, data.long, (err_darksky, res) => {
            if(err_darksky) {
                console.log(err_darksky);
            }else {
                console.log('It is currently '+res.currently.temperature+' degrees out there in '+searchAddress.trim()+'. There is a '+res.currently.precipProbability+'% chance of rain.');
            }
        });
    }
});
/*** End of Challenge ***/
