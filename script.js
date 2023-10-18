// function findKthElement(arr1, arr2, k) {
//   const combinedArray = arr1.concat(arr2);
//   combinedArray.sort((a, b) => a - b);
//   return combinedArray[k - 1];
// }

// const arr1 = [100, 112, 256, 349, 770];
// const arr2 = [72, 86, 113, 119, 265, 445, 892];
// const k = 6;

// const kthElement = findKthElement(arr1, arr2, k);
// console.log(kthElement);
//Здесь 6 элемент показывает 119

function findK(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let count = 0;
  let result;

  while (count < k) {
    result =
      i < arr1.length && (j >= arr2.length || arr1[i] <= arr2[j])
        ? arr1[i++]
        : arr2[j++];
    count++;
  }

  return result;
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 6;

const kElement = findK(arr1, arr2, k);
console.log(kElement);
//решила этим методом тоже ,здесь тоже 6 элемент 119
