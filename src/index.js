function selectionSort(arr) {
  // find the index of first element
  // for bubbling position
  for (let j = 0; j < arr.length; j++) {
    let temp = arr[j];
    let tempIdx = j;
    // for finding the minimum value
    for (let i = j; i < arr.length; i++) {
      if (temp > arr[i]) {
        // if temp is greater, assign arr[i] to the first position
        temp = arr[i];
        tempIdx = i;
      }
    }
    swap(j, tempIdx, arr);
  }
  return arr;
}

function swap(j, i, arr) {
  let hold = arr[j];
  arr[j] = arr[i];
  arr[i] = hold;
}

console.log(selectionSort([1, 3, 2, 7, 5, 6, 4]));
