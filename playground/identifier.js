const const_id = 'John'; /* const value cannnot be changed */

for(let i=0;i<2;i++) {
    var var_id = i+10;
    const const_id_2 = 'Smith';
    console.log('-----');
    console.log('Inside for-loop: \n'+const_id+' '+const_id_2);
    console.log(i); /* Can access 'let' identifier only inside the block it is defined */
    console.log(++var_id);
}

console.log('-----');
console.log('Outside for-loop: \n'+const_id);
//console.log(i); /* Cannot access 'let' identifier outside the block it is defined (for-loop in this case) */
console.log(++var_id); /* Can access 'var' identifier outside the block it is defined (for-loop in this case) */

console.log('-----');
//const_id += ' Smith'; /* Cannot change the value of const throughout the program */
//console.log(const_id_2); /* Cannot access 'const' identifier outside the block it is defined (for-loop in this case) */


/**
 * --------------------------------
 * Features of NodeJs identifiers :
 * --------------------------------
 * const : 
 *      Accessible within the block it is defined.
 *      Cannot change the value throughout the program (immutable).
 * let :
 *      Accessible within the block it is defined.
 *      Can change the value (mutable).
 * var :
 *      Accessible in entire code.
 *      Can change the value (mutable).
 * 
 */