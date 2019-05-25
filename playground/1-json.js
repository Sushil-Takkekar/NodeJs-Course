/**
 * ------------- 
 * Challange - 6
 * ------------- 
 * Work with JSON methods and fs
 * -------------
 */
const fs = require('fs');
let data_buff = fs.readFileSync('1-json.json');
let data_str = data_buff.toString();
let data = JSON.parse(data_str);
console.log(data);
data.name = 'Sushil';
data.age = 23;
console.log(data);
fs.writeFileSync('1-json.json',JSON.stringify(data));
/*** End of challange ***/
