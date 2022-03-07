const arr = [5, 1, 3, 2, 6]

//map function

function double(x) {
    return x * 2
}

const output1 = arr.map(double)
console.log(output1)
//both code work same
const output = arr.map((x) => x * 2)

console.log(output)

// map filter
function isOdd(number) {
    return number % 2;
}

const output3 = arr.filter(isOdd)

//both means same
const output9 = arr.filter((number) => number % 2);
console.log(output9)

//////////////
function isGreater4(number) {
    return number > 4
}

const output5 = arr.filter(isGreater4);
console.log(output5)
//shortcut arrow function
const output6 = arr.filter((number) => number > 4);
console.log(output6)


const users = [
    {firstName: 'gauri', lastname: 'upreti', age: 28},
    {firstName: 'rabin', lastname: 'bhattarai', age: 40},
    {firstName: 'pawan', lastname: 'khanal', age: 35},
    {firstName: 'sangita', lastname: 'bhandari', age: 67},
    {firstName: 'bibak', lastname: 'paudel', age: 25}
]
// We have a list of array now we use map, filter and reduce function here.
/// Lets usse map function first, wich return the array with first name.




const first_name1 = users.filter((name)=>name.age>45)
    .map((name)=>name.firstName);
console.log(first_name1)

const first_name = users.map((name) => name.firstName);
console.log(first_name)


/// reduce function:
const numbers = [3,78,5,8, 10]
const result =numbers.reduce(
    (accumulator, currentValue)=>accumulator + currentValue
);
console.log(result)


// find maximum value
// in reduce function there is always  two arguments first value which accumulate and second value which get single value from array.

const num = [9, 3,78,5,8, 10, 14,80]
function findMax(acc, value){
    if(value > acc){
        value:acc
    }
    return value;
}
const result14 = num.reduce(findMax)
console.log(result14)

// from a list of numbers return the sum of all numbers disible by 5.

const list =[10, 40, 25,27, 33]

 function divisibleBy5 (number){
    return number%5==0
 }
 const divisibleList = list.filter(divisibleBy5)
console.log(divisibleList)
const sum =  divisibleList.reduce((acc,value)=>acc+value)
console.log(sum)

