/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

export const reverseArray = (array: any[]): any[] => {
  let valueFront = array[0];
  let valueBack = array[array.length - 1];
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    valueFront = array[i];
    valueBack = array[array.length - 1 - i];
    array[i] = valueBack;
    array[length - 1 - i] = valueFront;
  }

  return array;
};

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

export const reverseSentence = (sentence: string): string => {
  return '';
};
