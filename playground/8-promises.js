const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1,2,4]);
        reject('Something went wrong !');
    }, 2000);
});

// call promise 
doWorkPromise.then((data) => {
    console.log('Success: '+data);
}).catch((err) => {
    console.log('Error: '+err);
});



/**
 * Promise chaining
 */
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
}

// call promise (using promise chaining)
add(2, 3).then((sum1) => {
    console.log('First sum: '+sum1);
    return add(sum1, 5);    // returning promise
}).then((sum2) => {
    console.log('Second sum: '+sum2);
}).catch((e) => {
    console.log(e);
});