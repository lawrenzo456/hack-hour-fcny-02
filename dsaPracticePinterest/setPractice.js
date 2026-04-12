const arr = [5, 4, 3, 3, 2, 1];
const arr2 = [5, 4, 3, 2, 9, 3];

const set = new Set(arr);

// console.log(set);
// console.log(arr);

const containsDuplicate = (array) => {
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    console.log(set);
    if (set.has(array[i])) return true;
    else set.add(array[i]);
  }
  return false;
};

// console.log(containsDuplicate(arr));
// console.log(containsDuplicate(arr2));
