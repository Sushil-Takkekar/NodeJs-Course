/**
 * Object Destructuring
 */
const product = {
    label: 'Notebook',
    price: 30,
    stock: 140,
    saleprice: 35,
    size: '12*12'
}

const {label, stock, color, outOfStock=false, size='10*10'} = product; // to store object-elements in individual variables
 
console.log(label);
console.log(stock);
console.log(color); // variable declared but no such element exists in the object. So it's value will be 'undefined'.
console.log(outOfStock); // variable declared with default value
console.log(size); // variable declared with default value But if a value exists in an object, it will override the default one.


/**
 * Object Destructuring - within function
 */
const getProdDetails = (tranID, {label, saleprice, size:prodSize}) => {
    console.log('----------');
    console.log(tranID+' '+label+' '+saleprice+' '+prodSize);
}
// call above function
getProdDetails('T101',product);
