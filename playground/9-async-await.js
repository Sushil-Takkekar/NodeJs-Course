/**
 * ------------------
 * Use of Async-Await
 * ------------------
 * Async : indicates that function will return a promise
 * Await : waits for the function to return a promise and allow to store the result in a variable
 */

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0)
                return reject('Error: Num should be greater than zero !!');
            resolve(a + b);
        }, 2000);
    });
}
const square = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x < 0)
                return reject('Error: Num should be greater than zero !');
            resolve(x * x);
        }, 2000);
    });
}

// create chaining function using async-await
const doWork = async (n1, n2) => {
    const sum = await add(n1, n2);
    const sqr = await square(sum);
    console.log('Sum: ',sum, 'Sqr: ',sqr);
    return sqr;
}

doWork(2, -3).then((data) => {
    console.log('Final result: '+data);
}).catch((e) => {
    console.log(e);
});
