/**
 * Set default value for function parameters
 */
const myFun = (name, gender = 'Male', age) => {
    console.log(name+' '+' '+gender+' '+age);
}
myFun('Sushil');
//myFun('Sushil','Male',23);


/**
 * Example - 2
 */
const product = {
    label: 'Notebook',
    price: 30,
    stock: 140,
    saleprice: 35,
    size: '12*12'
}
const getProdDetails = (txnID, {label, stock = 0} = {}) => {
    console.log(txnID+' '+label+' '+stock);
}
getProdDetails('T141');
//getProdDetails('T141',product);