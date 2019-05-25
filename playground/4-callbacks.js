/**
 * ------------- 
 * Challenge - 13
 * ------------- 
 * Mess around with callback function
 * -------------
 */
const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x+y);
    },3000);
}

add(1, 4, (data) => {
    console.log('Sum: '+data);
});
/*** End of Challenge ***/