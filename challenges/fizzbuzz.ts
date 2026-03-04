/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = (num: number): (number | string)[] => {
  const array: (number | string)[] = [];
  //can we use a for in loop?
  for (let i = 1; i <= num; i++) {
    //if num is divisible by 3 but not 5, push fizz
    if (i % 3 === 0 && i % 5 !== 0) {
      array.push('fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      array.push('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      array.push('fizzbuzz');
    } else {
      array.push(i);
    }
  }
  return array;
};

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,
"buzz" in place of numbers divisible by 5 but not by 3 or 7,
"bazz" in place of numbers divisible by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

const fizzbuzzbazz = (num: number): (number | string)[] => {
  const array: (number | string)[] = [];
  for (let i = 1; i <= num; i++) {
    //if num is divisible by 3 but not 5, push fizz
    if (i % 3 === 0 && i % 5 !== 0 && i % 7 !== 0) {
      array.push('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0 && i % 7 !== 0) {
      array.push('buzz');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
      array.push('fizzbuzz');
    } else if (i % 3 !== 0 && i % 5 !== 0 && i % 7 === 0) {
      array.push('bazz');
    } else if (i % 3 !== 0 && i % 5 === 0 && i % 7 === 0) {
      array.push('fizzbazz');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      array.push('fizzbuzzbazz');
    } else {
      array.push(i);
    }
  }
  return array;
};
console.log(fizzbuzzbazz(7));

function processFizzBuzz(number:number) {

}

export { fizzbuzz, fizzbuzzbazz };
